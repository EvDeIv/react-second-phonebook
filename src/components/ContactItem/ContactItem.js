import Delete from "../Delete/Delete";

const ContactItem = ({ name, number, deleteContact }) => {
  return (
    <li>
      <span>
        {name}:{number}
      </span>
      <Delete deleteContact={deleteContact} name={name} />
    </li>
  );
};

export default ContactItem;
