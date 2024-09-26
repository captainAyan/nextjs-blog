import Image from "next/image";

export default function Project({ data }) {
  return (
    <article>
      <h3 style={{ fontWeight: "lighter" }}>
        <b>{data.title}</b> — <i>{data.stackInfo}</i>
      </h3>
      <p>
        {data.tags.map((tag) => {
          return (
            <span key={tag}>
              <a href={`?tag=${tag}`}>#{tag}</a>
              &nbsp;
            </span>
          );
        })}
      </p>
      <p>
        {data.links?.map((link, index) => (
          <span key={index}>
            <a href={link.url} target="_blank" rel="noreferrer">
              {link.url}
            </a>
            &nbsp;
            <span>({link.label})</span>
            <br />
          </span>
        ))}
      </p>
      {data.imageUrl && (
        <Image
          src={data.imageUrl}
          alt="Responsive Design"
          width={16}
          height={9}
          layout="responsive"
          priority={false}
        />
      )}
      <p>{data.description}</p>
      <p>
        <u>Technologies used:</u>{" "}
        {data.techUsed?.map(
          (tech, i) => `${tech}${data.techUsed?.length - 1 === i ? "" : ", "}`
        )}
      </p>

      <hr />
    </article>
  );
}
