import React from 'react';

type ListProps = {
  title?: string;
  layout?: 'vertical' | 'horizontal';
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
};
type ListItemProps = { children?: React.ReactNode; className?: string };
type ListDescriptionProps = { title?: string; information?: string; active?: boolean };

const ListItem: React.FC<ListItemProps> = (props) => {
  const { children, className } = props;
  return <li className={`list-item ${className || ''}`}>{children}</li>;
};

const ListDescription: React.FC<ListDescriptionProps> = (props) => {
  const { title, information, active } = props;
  return (
    <ListItem className={`list-description ${active ? 'active' : ''}`}>
      <div className="list-description--title">{title}</div>
      <div className="list-description--information">{information}</div>
    </ListItem>
  );
};

const List: React.FC<ListProps> = (props) => {
  const { title, layout, children, style, className } = props;
  return (
    <>
      {title && <h4 className="list-title">{title}</h4>}
      <ul className={`list list-${layout || 'vertical'} ${className || ''}`} style={style}>
        {children}
      </ul>
    </>
  );
};

export default Object.assign(List, { ListItem, ListDescription });
