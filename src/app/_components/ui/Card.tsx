import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { Project } from "./CardSlider";

type CardProps = Project;

export const Card = (props: CardProps) => {
  const id = uuidv4();
  const { title, url, description, image, skills } = props;
  return (
    <div className="card m-2 select-none text-base-100">
      <a href={url} target="_blank" title={title} rel="noreferrer noopener" className="flex w-full px-4 pt-4">
        <div className="h-[30rem] w-full">
          <Image
            alt={image.alt}
            src={image.src}
            width={200}
            height={200}
            className="h-full w-full rounded-t-2xl object-cover object-top"
            loading="lazy"
          />
        </div>
      </a>
      <div className="card-body w-full pb-12 font-raleway">
        <a href={url} className="prose prose-2xl my-0 font-bold text-primary no-underline">
          {title}
        </a>
        <p className="prose font-sans text-base-100">{description}</p>
        <div className="card-actions mt-4">
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
