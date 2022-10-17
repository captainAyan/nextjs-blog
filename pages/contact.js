import { useState } from "react";
import axios from "axios";

import styles from "../styles/Main.module.css";
import contactStyles from "../styles/Form.module.css";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("submit");

    const data = { name, email, description, phone };

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/contact`, data);
      alert("Thanks for your feedback");
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "name") setName(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
    if (e.target.name === "phone") setPhone(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>Contact</h1>

      <div className={contactStyles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={contactStyles.mb3}>
            <label htmlFor="name" className={contactStyles.formLabel}>
              Name
            </label>
            <input
              type="text"
              className={contactStyles.formControl}
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </div>

          <div className={contactStyles.mb3}>
            <label htmlFor="email" className={contactStyles.formLabel}>
              Email
            </label>
            <input
              type="email"
              className={contactStyles.formControl}
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>

          <div className={contactStyles.mb3}>
            <label htmlFor="description" className={contactStyles.formLabel}>
              Description
            </label>
            <textarea
              type="text"
              className={contactStyles.formControl}
              id="description"
              name="description"
              rows="4"
              value={description}
              onChange={handleChange}
            />
          </div>

          <div className={contactStyles.mb3}>
            <label htmlFor="phone" className={contactStyles.formLabel}>
              Phone
            </label>
            <input
              type="text"
              className={contactStyles.formControl}
              id="phone"
              name="phone"
              value={phone}
              onChange={handleChange}
            />
          </div>

          <button type="submit" disabled={isLoading ? "disabled" : null}>
            {isLoading ? "Saving ..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
