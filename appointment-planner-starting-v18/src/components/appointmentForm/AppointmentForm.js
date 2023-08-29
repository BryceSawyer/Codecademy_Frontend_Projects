import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          id='title'
          type='text'
          value={title}
          onChange={({ target }) => setTitle(target.value)}
          required
          placeholder="Appointment Title"
          aria-label='Appointment Title'
        />
      </label>
      <label>
        <input
          id='date'
          type='date'
          value={date}
          min={getTodayString()}
          onChange={({ target }) => setDate(target.value)}
          aria-label='Appointment Date'
        />
      </label>
      <label>
        <input
          id='time'
          type='time'
          value={time}
          onChange={({ target }) => setTime(target.value)}
          aria-label='Appointment Date'
        />
      </label>
      <ContactPicker 
        contacts={contacts}
        onChange={({ target }) => setContact(target.value)}
        value={contact}
      />
      <button type='submit'>Add Appointment</button>
    </form>
  );
};
