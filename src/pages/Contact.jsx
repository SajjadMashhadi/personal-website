import styles from "./Contact.module.scss";

const data = [
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
      <ul>
        {data.map((item) => (
          <li key={item.name}>
            <a target="_blank" href={item.link}>
              <span className={styles.iconContainer}>
                <i className={`fa fa-${item.name}  icon-3d`}></i>
              </span>{" "}
              <span>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contact;
