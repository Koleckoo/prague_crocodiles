import "./ContactMe.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import emailjs from "emailjs-com";
import { useRef } from "react";

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mnqz92d",
        "template_rd7lo5f",
        form.current,
        "mDwUjzxSrLIhiQC7O"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h4>praguecrocodilles@gmail.com</h4>
            <a href="mailto:praguecrocodilles@gmail.com">Send us an e-mail</a>
          </article>
          <article className="contact__option">
            <BsFacebook className="contact__option-icon" />
            <h4>Facebook</h4>
            <h4>Dodgeball - Prague Crocodiles</h4>
            <a
              href="https://www.facebook.com/dodgeballprague/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send us a message
            </a>
          </article>
          <article className="contact__option">
            <BsInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h4>dodgeball_prague</h4>
            <a
              href="https://www.instagram.com/dodgeball_prague/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send us a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
