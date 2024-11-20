import Image from "next/image";
import uuid from "react-uuid";
type CardProps = {
  title: string;
  url: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  skills: string[];
};

export const Card = (props: CardProps) => {
  const id = uuid();
  const { title, url, description, image, skills } = props;
  return (
    <div className="card m-2 w-full max-w-2xl select-none rounded-2xl bg-base-300 text-base-100 shadow-xl">
      <a
        href={url}
        target="_blank"
        title={title}
        rel="noreferrer noopener"
        className="flex h-96 w-full overflow-hidden p-4"
      >
        <Image
          alt={image.alt}
          src={image.src}
          width={0}
          height={0}
          className="h-96 w-full rounded-t-2xl"
          loading="lazy"
        />
      </a>
      <div className="card-body space-y-4">
        <a href={url} className="project-title card-title">
          {title}
        </a>
        <span className="project-subtitle">{description}</span>
        <div className="card-actions pb-4">
          {skills.map((skill, index) => (
            <div
              key={`${id}-${index}`}
              className="prose-sm badge rounded border-primary bg-primary p-3 font-semibold text-base-100"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
