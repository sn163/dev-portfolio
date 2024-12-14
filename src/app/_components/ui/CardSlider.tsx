import { Card } from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useCallback, useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { ChevronLeft, ChevronRight } from "react-feather";

export type Project = {
  title: string;
  url?: string;
  repo_url?: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  skills: string[];
};
type CardSliderProps = {
  work: Project[];
};

export const CardSlider = (props: CardSliderProps) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  const slides = props.work.map((s, i) => (
    <SwiperSlide key={i} className="mb-20 flex h-auto w-full max-w-3xl rounded-2xl bg-base-300 shadow-xl">
      <Card title={s.title} url={s.url} description={s.description} image={s.image} skills={s.skills} />
    </SwiperSlide>
  ));
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div className="ml-10 flex items-center space-x-10 px-28">
      <div>
        <button
          onClick={handlePrevious}
          className="pointer-events-auto rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronLeft size={30} />
        </button>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: -20,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={pagination}
        modules={[EffectCoverflow, Pagination, Navigation]}
      >
        {slides}
      </Swiper>
      <div>
        <button
          onClick={handleNext}
          className="pointer-events-auto rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};
