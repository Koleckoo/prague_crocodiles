import "./Practise.css";

export default function Practise() {
  return (
    <section id="practise">
      <h5>Come to train with us</h5>
      <h2>Practise</h2>
      <div className="container practise_container">
        <article className="practise_option">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1279.8571238970526!2d14.499178351529704!3d50.09163669913055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93309ef337d1%3A0xa39a88a2fa6d85a4!2zU3TFmWVkbsOtIG9kYm9ybsOhIMWha29sYSBKYXJvdg!5e0!3m2!1scs!2scz!4v1709634012975!5m2!1scs!2scz"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <h4>Střední odborná škola Jarov</h4>
          <h4>Tuesday</h4>
          <h4>18:30 - 21:00</h4>
        </article>
        <article className="practise_option">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5119.250824645711!2d14.488755051889942!3d50.09329978547122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b93480d78f6a3%3A0x98a275d94feac689!2zWsOha2xhZG7DrSDFoWtvbGEgQ2htZWxuaWNl!5e0!3m2!1scs!2scz!4v1709634303435!5m2!1scs!2scz"
            style={{ border: 0, borderRadius: 10 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <h4>Základní škola Chmelnice</h4>
          <h4>Thursday</h4>
          <h4>18:00 - 20:00</h4>
        </article>
      </div>
    </section>
  );
}
