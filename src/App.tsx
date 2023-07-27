import React, { useState } from "react";

type Contact = {
  fname: String;
  lname?: String;
};

const App = () => {
  const [dataProvider, setdataProvider] = useState<Contact[]>([]);

  function handleFormSubmit(contact: Contact) {
    setdataProvider([...dataProvider, contact]);
  }

  return (
    <div className="container my-5">
      <ContactForm contactList={dataProvider} />
      <ContactList onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;

type ContactListProps = {
  onSubmit: (contact: Contact) => void;
};
const ContactList = (props: ContactListProps) => {
  const [fname, setfname] = useState<string>("");
  const [lname, setlname] = useState<string>("");

  function handleSumit(e: React.SyntheticEvent) {
    e.preventDefault();
    props.onSubmit({ fname, lname });
    setfname("");
    setlname("");
  }
  return (
    <form
      onSubmit={(e: React.SyntheticEvent) => handleSumit(e)}
      className="mt-5"
    >
      <div className="row">
        <div className="col-sm-2">
          <label>First Name</label>
        </div>
        <div className="col-sm-6">
          <input
            value={fname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setfname(e.target.value)
            }
            className="form-control"
          />
        </div>
      </div>
      <div className="row my-4">
        <div className="col-sm-2">
          <label>Last Name</label>
        </div>
        <div className="col-sm-6">
          <input
            value={lname}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setlname(e.target.value)
            }
            className="form-control"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-6">
          <button className="btn btn-outline-primary" type="submit">
            Add Contact
          </button>
        </div>
      </div>
    </form>
  );
};

type ContactFormProps = {
  contactList: Contact[];
};

const ContactForm = (contactList: ContactFormProps) => {
  return (
    <div>
      {contactList.contactList.map((contact: Contact) => (
        <h1>
          {contact.fname} {contact.lname}
        </h1>
      ))}
    </div>
  );
};
