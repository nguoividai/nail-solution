import React from 'react';
import Slider, { Settings } from 'react-slick';

type SimpleSliderProps = {
  children?: React.ReactNode;
  settings?: Settings;
  className?: string;
};

/**
 *
 * link tham khảo: http://kenwheeler.github.io/slick/
 */
const SimpleSlider: React.FC<SimpleSliderProps> = (props) => {
  const { children, settings, className } = props;

  const defaultSettings = settings
    ? settings
    : {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: false,
            },
          },
        ],
      };

  return (
    <Slider className={className || ''} {...defaultSettings}>
      {children}
    </Slider>
  );
};

export default React.memo(SimpleSlider);
