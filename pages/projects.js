import { useRouter } from "next/router";

import styles from "../styles/Main.module.css";
import { data } from "../data";
import Project from "../components/Project";

export default function Project2() {
  const extractTags = () => {
    let _tags = [];
    for (const project of data) {
      for (const tag of project.tags) {
        if (!_tags.includes(tag)) _tags.push(tag);
      }
    }
    return _tags;
  };
  const tags = extractTags();

  const router = useRouter();
  const { tag: selectedTag } = router.query;

  return (
    <div className={styles.container}>
      <h1>Projects</h1>
      <p>
        &nbsp;
        {!selectedTag ? null : <>#{selectedTag}</>}
      </p>

      <p style={{ wordWrap: "break-word", wordSpacing: "8px" }}>
        <span>
          <a href="?">All</a>
          &nbsp;
        </span>
        {tags.map((tag) => {
          return (
            <span key={tag}>
              <a href={`?tag=${tag}`}>#{tag}</a>
              &nbsp;
            </span>
          );
        })}
      </p>
      <hr />

      {data
        .filter((project) =>
          selectedTag ? project.tags.includes(selectedTag) : project
        )
        .map((project, index) => (
          <Project data={project} key={index} />
        ))}
    </div>
  );
}
