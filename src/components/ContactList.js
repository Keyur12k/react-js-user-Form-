import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import "./modual.css";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };


  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
        <div className="ui celled list" style={{"margin-top": '-10px'}}>{renderContactList} </div>
    
  );
};

export default ContactList;