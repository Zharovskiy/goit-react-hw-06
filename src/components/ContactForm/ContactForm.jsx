import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

import { LuUserPlus2 } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice.js";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (valuesFilds, actions) => {
    const addIdContact = { id: nanoid(), ...valuesFilds };
    dispatch(addContact(addIdContact));
    actions.resetForm();
  };

  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
    number: Yup.string()
      .required("Required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.box}>
        <div className={css.fieldBox}>
          <label className={css.label} htmlFor={nameFieldId}>
            <RiContactsLine className={css.icon} />
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            placeholder="Jacob Mercer"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.fieldBox}>
          <label className={css.label} htmlFor={numberFieldId}>
            <FiPhone className={css.icon} />
            Number
          </label>
          <Field
            className={css.field}
            type="number"
            name="number"
            placeholder="012-345-67-89"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          <LuUserPlus2 className={css.addIcon} />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
