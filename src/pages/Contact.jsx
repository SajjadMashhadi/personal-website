import styles from "./Contact.module.scss";
import ListItem from "../components/ListItem";
import { useTheme } from "../context/useTheme";

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
    name: "linkedin",
    text: "sajjad mashhadi",
    link: "https://www.linkedin.com/in/sajjad-mashhadi-407061222/",
  },
];

const text = {
  en: { sentence: "You can contact me through:" },
  fa: { sentence: ":راه های ارتباطی" },
};

function Contact() {
  const { theme, lang } = useTheme();
  return (
    <div className={`${styles.contact} ${styles[theme]} ${styles[lang]}`}>
      <p>{text[lang].sentence}</p>
      <div>
        {data.map((item) => (
          <ListItem item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
}

export default Contact;
