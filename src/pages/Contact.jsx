import styles from "./Contact.module.scss";
import ListItem from "../components/ListItem";

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
          <ListItem item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
