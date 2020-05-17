import React from 'react';

import ContactUser from './ContactUser'

const CONTACTS_MOCK = [
  {
    id: '1',
    name: 'john_snow'
  },
  {
    id: '2',
    name: 'martin'
  },
  {
    id: '3',
    name: 'sherlock'
  },
  {
    id: '4',
    name: 'monica'
  },
  {
    id: '5',
    name: 'dallas'
  }
];

function Contacts() {
  const renderContacts = () => {
    return CONTACTS_MOCK.map(contact => (
      <ContactUser key={contact.id} {...contact} />
    ))
  }

  return (
    <div className="contacts-wrap">
      <div className="contact">
        {renderContacts()}
      </div>
    </div>
  );
}

export default Contacts;
