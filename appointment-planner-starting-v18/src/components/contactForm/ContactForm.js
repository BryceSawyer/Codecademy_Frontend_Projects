import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'></label>
        <input
          required
          id='name'
          name='name'
          type='text'
          value={name}
          aria_label='Contact Name'
          placeholder="Contact Name"
          onChange={({ target }) => setName(target.value)}
        />
        <label htmlFor='phone'></label>
        <input
          required
          id='phone'
          name='phone'
          type='tel'
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          value={phone}
          aria_label='Contact Phone Number'
          placeholder="Contact Phone Number"
          onChange={({ target }) => setPhone(target.value)}
        />
        <label htmlFor='email'></label>
        <input
          required
          id='email'
          name='email'
          type='email'
          value={email}
          aria_label='Contact Email Address'
          placeholder="Contact Email Address"
          onChange={({ target }) => setEmail(target.value)}
        />
        <button
          type='submit'
          value="Add Contact"
          aria-label="Add Contact"
        >
          Add Contact
        </button>
      </form>
    </>
  );
};

