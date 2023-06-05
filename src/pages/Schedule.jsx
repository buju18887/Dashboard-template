import React, { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import eventsData from "../data/events";
import EventModal from "../components/EventModal";
import moment from "moment-timezone";
import { v4 as uuidv4 } from "uuid";

function Schedule() {
  const defaultModalProps = { id: uuidv4(), title: "", start: null, end: null };
  const calendarRef = useRef();
  const [addModal, SetAddModal] = useState(false);
  const [editModal, SetEditModal] = useState(false);
  const [events, SetEvents] = useState(eventsData);
  const [modalProps, SetModalProps] = useState(defaultModalProps);

  const currentDate = moment().format("YYYY-MM-DD");

  const formatDate = (date) => {
    return moment(date).format("YYYY-MM-DD");
  };

  const onEventAdd = (props) => {
    const newEvent = {
      id: uuidv4(),
      ...props,
      className: "bg-yellow-500",
      allDay: props.sameDay,
    };

    SetAddModal(false);
    SetEvents([...events, newEvent]);
    SetModalProps(defaultModalProps);
  };

  const onEventUpdate = (props) => {
    const { id, title, start, end, sameDay } = props;
    const calendarApi = calendarRef.current.getApi();
    const calendarElem = calendarApi.getEventById(id);

    if (calendarElem) {
      calendarElem.setProp("title", title);
      calendarElem.setDates(start, end, { allDay: sameDay });
    }

    SetEditModal(false);
  };

  const onEventDelete = (id) => {
    const newEvents = events.filter((e) => e.id !== id);
    SetEvents(newEvents);
    SetModalProps(defaultModalProps);
    SetEditModal(false);
  };

  const onDateClick = (props) => {
    const id = events.length + 1;
    const date = new Date(props.date);
    const endDate = moment(date).endOf("day").add(1, "day").toDate();

    SetModalProps({ ...defaultModalProps, id, start: date, end: endDate });
    SetAddModal(true);
  };

  const onEventClick = (props) => {
    const {
      event: { id, title, start, end },
    } = props;
    SetModalProps({ id, title, start, end });
    SetEditModal(true);
  };

  const onClose = () => {
    SetAddModal(false);
    SetEditModal(false);
  };

  return (
    <div className="p-10 md:ml-56 text-gray-400 dark:text-primary dark:bg-gray-100">
      <div className="flex justify-center items-center">
        {addModal ? (
          <EventModal
            {...modalProps}
            edit={false}
            onAdd={onEventAdd}
            onHide={onClose}
            defaultStart={formatDate(modalProps.start)}
            defaultEnd={formatDate(
               modalProps.start
            )}
          />
        ) : null}
        {editModal ? (
          <EventModal
            {...modalProps}
            edit={true}
            onUpdate={onEventUpdate}
            onDelete={onEventDelete}
            onHide={onClose}
            defaultTitle={modalProps.title}
            defaultStart={formatDate(modalProps.start)}
            defaultEnd={formatDate(
              modalProps.end === null ? modalProps.start : modalProps.end
            )}
          />
        ) : null}
      </div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable
        selectable
        displayEventTime={false}
        initialDate={currentDate}
        dateClick={onDateClick}
        eventClick={onEventClick}
      />
    </div>
  );
}

export default Schedule;
