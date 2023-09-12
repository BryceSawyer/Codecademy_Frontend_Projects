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
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'></label>
        <input
          required
          id='title'
          name='title'
          type='text'
          value={title}
          aria-label="Appointment Title"
          placeholder="Appointment Title"
          onChange={({ target }) => setTitle(target.value)}
        />
        <label htmlFor='date'></label>
        <input
          required
          id='date'
          name='date'
          type='date'
          min={getTodayString()}
          value={date}
          aria-label='Appointment Date Picker'
          onChange={({ target }) => setDate(target.value)}
        />
        <label htmlFor='time'></label>
        <input
          required
          id='time'
          name='time'
          type='time'
          value={time}
          aria-label='Appointment Time Picker'
          onChange={({ target }) => setTime(target.value)}
        />
        <ContactPicker
          name='contact'
          value={contact}
          contacts={contacts}
          onChange={({ target }) => setContact(target.value)} 
        />
        <button type='submit'>Add Appointment</button>
      </form>
    </>
  );
};
