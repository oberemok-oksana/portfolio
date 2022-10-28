import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mvoywvyv");
  if (state.succeeded) {
    return <p>Thanks for your time!</p>;
  }
  return (
    <form
      onSubmit={handleSubmit}
      action="https://formspree.io/f/mvoywvyv"
      method="POST"
    >
      <ul>
        <li className="half">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </li>
        <li className="half">
          <input
            type="email"
            name="email"
            placeholder="Email"
            id="email"
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </li>
        <li>
          <input
            placeholder="Subject"
            type="text"
            name="subject"
            id="subject"
            required
          />
        </li>
        <li>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            cols="30"
            rows="10"
            required
          ></textarea>
        </li>
        <button
          className="flat-button"
          type="submit"
          disabled={state.submitting}
        >
          SEND
        </button>
      </ul>
    </form>
  );
}

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  // const [userData, setUserData] = useState({
  //   email: "",
  //   name: "",
  //   subject: "",
  //   message: "",
  // });
  const contactArr = "Contact me".split("");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  // const handleChangeName = (e) => {
  //   setUserData((prevUserData) => {
  //     return { ...prevUserData, name: e.target.value };
  //   });
  // };

  // const handleChangeEmail = (e) => {
  //   setUserData((prevUserData) => ({ ...prevUserData, email: e.target.value }));
  // };

  // const handleChangeSubject = (e) => {
  //   setUserData((prevUserData) => ({
  //     ...prevUserData,
  //     subject: e.target.value,
  //   }));
  // };

  // const handleChangeMessage = (e) => {
  //   setUserData((prevUserData) => ({
  //     ...prevUserData,
  //     message: e.target.value,
  //   }));
  // };

  // console.log(userData);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={contactArr}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I'm interested in remote working. However, if you have other
            requests or questions, don t hesitate to contact me using below form
            either.
          </p>
          <div className="contact-form">
            <ContactForm />
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
