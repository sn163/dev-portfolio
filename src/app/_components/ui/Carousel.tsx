import { Card } from "./Card";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

type CarouselProps = {
  work: {
    title: string;
    url: string;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    skills: string[];
  }[];
};

export const Carousel = (props: CarouselProps) => {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr === 0 ? props.work.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === props.work.length - 1 ? 0 : curr + 1));

  const slides = props.work.map((s, i) => (
    <div key={i} className="carousel-item w-full justify-center">
      <Card title={s.title} url={s.url} description={s.description} image={s.image} skills={s.skills} />
    </div>
  ));

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="pointer-events-auto rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={next}
          className="pointer-events-auto rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {props.work.map((s, i) => (
            <div
              key={i}
              className={`h-1.5 w-1.5 rounded-full bg-white transition-all  ${curr === i ? "p-0.5" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
