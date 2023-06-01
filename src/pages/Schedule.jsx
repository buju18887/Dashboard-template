import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import events from "../data/events";

function Schedule() {
  const calenderRef = useRef();

  return (
    <div className="p-10 md:ml-56 text-gray-400 dark:text-primary dark:bg-gray-400">
      <FullCalendar
        ref={calenderRef}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        editable
        selectable
        displayEventTime={false}
      />
    </div>
  );
}

export default Schedule;
