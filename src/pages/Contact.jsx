import styles from "./Contact.module.scss";

const data = [
  {
    name: "envelope",
    text: "sajjadmashhadi7@gmail.com",
    link: "mailto:sajjadmashhadi7@gmail.com",
  },
  {
    name: "github",
    text: "@sajjadmashhadi",
    link: "https://github.com/SajjadMashhadi",
  },
  {
    name: "telegram",
    text: "@sajjadmashhadi",
    link: "https://t.me/Sajjadmashhadi",
  },
  {
    name: "instagram",
    text: "@sajjadmashhadi7",
    link: "https://www.instagram.com/sajjadmashhadi7",
  },
];

function Contact() {
  return (
    <div className={styles.contact}>
      <p>You can contact me through these:</p>
      <div>
        {data.map((item) => (
          <li key={item.name}>
            <a target="_blank" href={item.link}>
              <span className={styles.iconContainer}>
                <i className={`fa fa-${item.name}  icon-3d`}></i>
              </span>
              <span className={styles.linkText}>{item.text}</span>
            </a>
          </li>
        ))}
      </div>
    </div>
  );
}

export default Contact;
