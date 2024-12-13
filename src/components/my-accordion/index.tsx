import { FaChevronDown } from "react-icons/fa";

import styles from "./my-accordion.module.css";

interface AccordionProps {
  name: string;
  title: React.ReactNode;
  content: any;
  isOpen?: boolean;
}

const AppAccordion: React.FC<AccordionProps> = ({
  title,
  content,
  name,
  isOpen = false,
}) => (
  <div className="relative">
    <input
      type="checkbox"
      // type={isMultiple ? "checkbox" : "radio"}
      defaultChecked={isOpen}
      name={name}
      id={name}
      className={styles.input}
    />
    <label
      htmlFor={name}
      className="flex justify-between items-center cursor-pointer "
    >
      {title}
      <FaChevronDown className={styles.Svg} />
    </label>
    <div className={styles.Content}>{content}</div>
  </div>
);

export default AppAccordion;
