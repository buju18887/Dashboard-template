import { useForm } from "react-hook-form";
import moment from "moment-timezone";

function EventModal({
  onAdd,
  onUpdate,
  onDelete,
  edit = false,
  id,
  onHide,
  defaultTitle,
  defaultStart,
  defaultEnd,
}) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const formattedStart = moment(data.start).format("YYYY-MM-DD");
    const formattedEnd = moment(data.end).format("YYYY-MM-DD");

    const sameDay = formattedStart === formattedEnd;
    const finalStart = sameDay
      ? moment(formattedStart).toDate()
      : moment(formattedStart).startOf("day").toDate();
    const finalEnd = sameDay
      ? null
      : moment(formattedEnd).endOf("day").toDate();

    const payload = {
      ...data,
      start: finalStart,
      end: finalEnd,
      sameDay,
    };

    console.log(payload);

    if (edit) {
      return onUpdate(payload);
    }

    return onAdd(payload);
  };

  const Delete = () => edit && onDelete(id);

  return (
    <div className="w-66 lg:w-1/3 p-5 fixed top-52 items-center z-10 rounded-md bg-tertiary dark:bg-gray-200 text-gray-200 dark:text-primary">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Event title</label>
        <input
          type="text"
          {...register("title")}
          className="input"
          defaultValue={edit ? defaultTitle : null}
        />
        <div className="flex gap-x-5">
          <div>
            <label>Select first date</label>
            <input
              type="date"
              {...register("start")}
              className="input"
              defaultValue={defaultStart}
            />
          </div>
          <div>
            <label>Select last date</label>
            <input
              type="date"
              {...register("end")}
              className="input"
              defaultValue={defaultEnd === null ? defaultStart : defaultEnd}
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex gap-x-3">
            <button type="submit" className="button-modal">
              {edit ? "Update event" : "Add new event"}
            </button>
            {edit ? (
              <button className="button-danger" onClick={Delete}>
                Delete event
              </button>
            ) : null}
          </div>
          <span className="cursor-pointer" onClick={onHide}>
            Close
          </span>
        </div>
      </form>
    </div>
  );
}

export default EventModal;
