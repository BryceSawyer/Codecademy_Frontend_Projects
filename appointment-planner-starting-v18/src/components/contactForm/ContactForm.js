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
    <form onSubmit={handleSubmit}>
      <label>
        <input
          id='name'
          type='text'
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
          placeholder="Contact Name"
          aria-label="Contact Name"
        />
      </label>
      <label>
        <input
          id='phone'
          type='tel'
          value={phone}
          onChange={({ target }) => setPhone(target.value)}
          required
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          placeholder="Contact Phone (###-###-####)"
          aria-label="Contact Phone"
        />
      </label>
      <label>
        <input
          id='email'
          type='email'
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
          placeholder="Contact Email"
          aria-label="Contact Email"
        />
      </label>
      <button type='submit'>Add Contact</button>
    </form>
  );
};

