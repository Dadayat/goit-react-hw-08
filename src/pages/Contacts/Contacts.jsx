import { ContactForm } from "../../components/ContactForm/ContactForm.jsx";
import { SearchBox } from "../../components/SearchBox/SearchBox.jsx";
import { ContactList } from "../../components/ContactList/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";
import { Loader } from "../../components/Loader/Loader.jsx";
import { ErrorMessage } from "../../components/ErrorMessage/ErrorMessage.jsx";
import {
  selectContactError,
  selectContactLoading,
} from "../../redux/contacts/selectors.js";
import css from "./Contacts.module.css";

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectContactLoading);
  const error = useSelector(selectContactError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.font}>
      <div className={css.container}>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Phonebook</h1>
        <ContactForm />
        <h2 style={{ textAlign: "justify" }}>Contacts</h2>
        <SearchBox />
        {error && <ErrorMessage />}
        {loading && <Loader />}
        <ContactList />
      </div>
    </div>
  );
}
