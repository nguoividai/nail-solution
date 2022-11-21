import React from 'react';

type SectionProps = {
  children?: React.ReactNode;
  title?: string | React.ReactNode;
  extra?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Section: React.FC<SectionProps> = (props) => {
  const { children, title, extra, className, style } = props;
  return (
    <section className={`section ${className || ''}`} style={style}>
      {title ? <h1 className="title"> {title} </h1> : null}
      {extra ? <p className="extra"> {extra} </p> : null}
      <div className="section-content">{children}</div>
    </section>
  );
};

export default React.memo(Section);
