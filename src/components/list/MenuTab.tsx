import React from 'react';

type ItemProps = {
  className?: string;
  active?: boolean;
  children?: React.ReactNode;
  name: string;
};

type MenuTabProps = {
  className?: string;
  children?: React.ReactNode;
  type?: 'horizontal' | 'vertical';
};

const Item: React.FC<ItemProps> = ({ className, active, children, name }) => {
  return (
    <div key={name} className={`menu-tab--item ${className || ''} ${active ? 'active' : ''}`}>
      {children}
    </div>
  );
};

const Content: React.FC<ItemProps> = ({ className, children }) => {
  return <div className={`menu-tab--content ${className || ''}`}>{children}</div>;
};

const MenuTab: React.FC<MenuTabProps> = ({ className, children, type }) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const currentTarget = e.currentTarget as Element;
    for (let i in currentTarget?.children) {
      const element = currentTarget?.children[i] as Element;
      element?.classList?.remove('active');
    }
    const target = e.target as Element;
    target.classList.add('active');
  };

  return (
    <div className={`menu-tabs ${className || ''} ${type || ''}`} onClick={(e) => handleClick(e)}>
      {children}
    </div>
  );
};

export default Object.assign(MenuTab, { Item, Content });
