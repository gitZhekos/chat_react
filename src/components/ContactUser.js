import React from 'react';
import { NavLink } from "react-router-dom";

function ContactUser({ id, name }) {
  return (
    <NavLink to={id} className="contact-user" activeClassName="active">
      <div className="contact-user-foto">
        <img src="" alt="" />
      </div>

      <div className="contact-user-info">
        <div className="contact-user-top">
          <span className="contact-user-name">
            {name}
          </span>
        </div>
      </div>
    </NavLink>
  );
}

export default ContactUser;