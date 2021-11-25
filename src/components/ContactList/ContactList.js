import ContactItem from "./../ContactItem/ContactItem";

const ContactList = ({ filterContacts, deleteContact }) => {
  return (
    <>
      <ul>
        {filterContacts().map((el) => (
          <ContactItem
            key={el.id}
            name={el.name}
            number={el.number}
            deleteContact={deleteContact}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
