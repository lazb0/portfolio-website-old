import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  main: {
    padding: "100px 10vw",
    display: "flex",
    flexDirection: "column",
    placeItems: "center",
  },
  header: {
    fontSize: "3rem",
    margin: "0 0 16px 0",
    color: "#8ec07c",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 6,
    fontSize: "1.5rem",
    "& > input, & > textarea": {
      border: 0,
      background: "#3c3836",
      fontSize: "1rem",
      color: "#fbf1c7",
      padding: "4px 8px",
      resize: "none",
      width: "33vw",
    },
    "& > input::placeholder, & > textarea::placeholder": {
      fontFamily: "'Space Mono', monospace",
    },
    "& > input:focus, & > textarea:focus": {
      outline: "none",
    },
  },
  submit: {
    color: "#8ec07c !important",
    cursor: "pointer",
    width: "50% !important",
    alignSelf: "end",
  },
});

const Contact = () => {
  const Css = useStyles();

  return (
    <section className={Css.main} id="contact">
      <h2 className={Css.header}>Contact me</h2>
      <form className={Css.form}>
        <label htmlFor="name" hidden>
          Name
        </label>
        <input name="name" id="name" placeholder="Name" />
        <label htmlFor="email" hidden>
          Email
        </label>
        <input name="email" id="email" placeholder="Email" />
        <label htmlFor="message" hidden>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Your message"
          rows="5"
        />
        <input type="submit" className={Css.submit} />
      </form>
    </section>
  );
};

export default Contact;
