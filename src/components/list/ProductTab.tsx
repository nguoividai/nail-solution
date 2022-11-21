import React, { useState } from 'react';
import CardImage from '../card/CardImage';
import SliderSimple from '../slider/SliderSimple';

type ProductTabProps = {
  children?: React.ReactNode;
  tabs?: { key: string; src?: string; title?: string; children?: React.ReactNode }[];
  active?: string;
};

type ContentProps = {
  children?: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="product-tab--content">{children}</div>;
};

const ProductTab: React.FC<ProductTabProps> = ({ tabs, active }) => {
  const [currentActive, setCurrentActive] = useState<string | undefined>(active);

  return (
    <>
      <div className="product-tabs">
        <SliderSimple
          settings={{
            // speed: 500,
            autoplay: false,
            // autoplaySpeed: 5000,
            infinite: true,
            dots: false,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  centerMode: true,
                  centerPadding: '30px',
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  centerMode: true,
                  centerPadding: '0px',
                },
              },
            ],
          }}
        >
          {tabs &&
            tabs.length > 0 &&
            tabs?.map((e) => (
              <>
                <div key={e.key} onClick={() => setCurrentActive(e.key)}>
                  <CardImage
                    style={{
                      backgroundColor: '#fff',
                      borderRadius: '1rem',
                      padding: '0.5rem 0',
                      cursor: 'pointer',
                    }}
                    src={e.src}
                    title={e.title}
                    size="sm"
                    active={currentActive === e.key}
                  />
                </div>
              </>
            ))}
        </SliderSimple>

        <div className="tab-pane">
          {tabs &&
            tabs.length > 0 &&
            tabs.map((e) => <>{e.key === currentActive ? e.children : null}</>)}
        </div>
      </div>
    </>
  );
};

export default Object.assign(ProductTab, { Content });
