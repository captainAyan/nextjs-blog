import { useState } from "react";
import axios from "axios";

import styles from "../styles/Main.module.css";
import formStyles from "../styles/Form.module.css";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = { title, description, date, content, password };

    try {
      await axios.post(`/api/create`, data);
      alert("Blog Saved");
    } catch (e) {
      console.log(e);
    }
    setIsLoading(false);
  };

  const handleChange = (e) => {
    if (e.target.name === "title") setTitle(e.target.value);
    if (e.target.name === "description") setDescription(e.target.value);
    if (e.target.name === "date") setDate(e.target.value);
    if (e.target.name === "content") setContent(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  return (
    <div className={styles.container}>
      <h1>Create Blog</h1>

      <div className={formStyles.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={formStyles.mb3}>
            <label htmlFor="title" className={formStyles.formLabel}>
              Title
            </label>
            <input
              type="text"
              className={formStyles.formControl}
              id="title"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>

          <div className={formStyles.mb3}>
            <label htmlFor="description" className={formStyles.formLabel}>
              Description
            </label>
            <input
              type="text"
              className={formStyles.formControl}
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </div>

          <div className={formStyles.mb3}>
            <label htmlFor="date" className={formStyles.formLabel}>
              Date
            </label>
            <input
              type="text"
              className={formStyles.formControl}
              id="date"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </div>

          <div className={formStyles.mb3}>
            <label htmlFor="content" className={formStyles.formLabel}>
              Content
            </label>
            <textarea
              type="text"
              className={formStyles.formControl}
              id="content"
              name="content"
              rows="10"
              value={content}
              onChange={handleChange}
            />
          </div>

          <div className={formStyles.mb3}>
            <label htmlFor="password" className={formStyles.formLabel}>
              Password
            </label>
            <input
              type="password"
              className={formStyles.formControl}
              id="password"
              name="password"
              value={password}
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
