'use client';
import React, { useCallback, useEffect, useRef } from 'react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselDotArrowButtons';
import { DotButton, useDotButton } from './EmblaCarouselDotButton';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
  slides: string[];
  options?: EmblaOptionsType;
  href?: string;
};

const EmblaCarousel: React.FC<PropType> = ({
  slides,
  options,
  href = '/'
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay()
  ]);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback(
    (emblaApi: EmblaCarouselType): void => {
      tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
        return slideNode.querySelector(
          '.embla__parallax__layer'
        ) as HTMLElement;
      });
    },
    []
  );

  const setTweenFactor = useCallback(
    (emblaApi: EmblaCarouselType) => {
      tweenFactor.current =
        TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    },
    []
  );

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex))
            return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const translate =
            diffToTarget * (-1 * tweenFactor.current) * 100;
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `translateX(${translate}%)`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenParallax(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax);
  }, [emblaApi, tweenParallax]);

  return (
    <div className='embla container'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((item, index) => (
            <div className='embla__slide overflow-hidden' key={index}>
              <Link href={href}>
                <div className='embla__parallax'>
                  <div className='embla__parallax__layer'>
                    {/* <Link href='/'> */}
                    <img
                      className='embla__slide__img embla__parallax__img'
                      // src={`https://picsum.photos/600/350?v=${index}`}
                      src={`${item}`}
                      alt='Your alt text'
                    />
                    {/* </Link> */}
                  </div>
                </div>
                <div className='relative text-white'>
                  <div className='service-details absolute bottom-[-110px] left-1/3 -translate-x-1/4 transition-all duration-300 ease-in'>
                    <h3 className='mb-3 text-lg font-bold text-blue-50 text-shadow-sm'>
                      CCTV Installation
                    </h3>

                    <p className='mb-3 text-shadow-sm'>
                      We specialize in planning, installation, and
                      repair of full range security.
                    </p>

                    <Link href={href} className='text-shadow-sm'>
                      Read More ⟶
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          />
        </div>

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
