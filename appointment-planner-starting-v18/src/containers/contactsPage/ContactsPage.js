import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContact({
        name: name,
        phone: phone,
        email: email
      })
      setName('');
      setPhone('');
      setEmail('');
      setDuplicate(false)
    }
  };

  useEffect(() => {
    setDuplicate(contacts.some(contact => (
      contact.name === name || contact.phone === phone || contact.email === email
    )));
  }, [name, phone, email, contacts])

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        {duplicate ? " - Contact Already Exists" : ""}
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tile={contacts} />
      </section>
    </div>
  );
};
