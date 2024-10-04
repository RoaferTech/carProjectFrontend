import React from "react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      <ContactCard />
      <ContactForm />
      <div className=" pt-10 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6809.940255495374!2d74.2631103389886!3d31.41494910323206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391900f862a15ea3%3A0x685dd8b24e3d004d!2sNFC%20Society%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727794351980!5m2!1sen!2s"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-screen"
          height={400}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
