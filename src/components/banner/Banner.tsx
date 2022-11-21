import React, { ImgHTMLAttributes } from 'react';

type BannerProps = {
  children?: React.ReactNode;
};

type BannerImageProps = ImgHTMLAttributes<HTMLImageElement>;

type BannerTextProps = {
  titleLight?: string | React.ReactNode;
  titleDark?: string | React.ReactNode;
  description?: string | React.ReactNode;
  action?: string | React.ReactNode;
};

const BannerText: React.FC<BannerTextProps> = (props) => {
  const { titleLight, titleDark, description, action } = props;
  return (
    <div className="banner-text">
      <div className="title">
        {titleLight ? <span className="title-light">{titleLight}</span> : null}
        {titleDark ? <span className="title-dark">{titleDark}</span> : null}
      </div>

      {description ? (
        <div className="description">
          <p>{description}</p>
        </div>
      ) : null}

      {action ? <div className="action">{action}</div> : null}
    </div>
  );
};

const BannerImage: React.FC<BannerImageProps> = (props) => {
  return (
    <div className="banner-image">
      <img {...props} alt="banner" />
    </div>
  );
};

const Banner: React.FC<BannerProps> = (props) => {
  const { children } = props;
  return <div className="banner">{children}</div>;
};

export default Object.assign(Banner, {
  Text: BannerText,
  Img: BannerImage,
});
