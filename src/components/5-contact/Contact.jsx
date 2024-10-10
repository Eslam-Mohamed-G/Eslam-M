import React, { useState } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from '../../animation/done.json';
import contactAnimation from '../../animation/contactMe.json';
import blackemail from '../../animation/black-email.json';
import whiteemail from '../../animation/white-email.json';
const Contact = () => {
  const [state, handleSubmit] = useForm("mvgplpyw");

  return (
    <section className="contact_us" id="contact">
      <div className="head">
        <h1 className="title">
          <Lottie
            animationData={whiteemail}
            className="whitee-mail-animation title-animation"
          />
          <Lottie
            animationData={blackemail}
            className="blacke-mail-animation title-animation"
          />
          <span className="icon-envelope"> </span> Contact Me
        </h1>
        <p>
          Contact me for more information and Get notified when i publish
          something new.
        </p>
      </div>

      <div className="contact_form">
        <form onSubmit={handleSubmit} className="form">
          <div className="inputEmail">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="inputTextarea">
            <label htmlFor="message">Your Message:</label>
            <textarea required name="message" id="message" />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="submition">
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Submitting" : "Submit"}
            </button>

            {state.succeeded && (
              <Lottie
                loop={false}
                animationData={doneAnimation}
                className="done-animation"
              ></Lottie>
            )}
          </div>
        </form>

        <div className="contactAnimation">
          <Lottie
            animationData={contactAnimation}
            className="lottieContactAnimation"
          ></Lottie>
        </div>
      </div>
    </section>
  );
};

export default Contact;
