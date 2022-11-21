import React, { FormHTMLAttributes, ReactHTMLElement } from 'react';

type FormProps = FormHTMLAttributes<HTMLFormElement> & {
  children?: React.ReactNode;
};
type FormItemProps = {
  label?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

const Item: React.FC<FormItemProps> = (props) => {
  const { label, children, className, style } = props;
  return (
    <div style={style} className={`form-item ${className || ''}`}>
      {label && <label htmlFor={label}>{label}</label>}
      <div className="form-item-input">{children}</div>
    </div>
  );
};

const Form: React.FC<FormProps> = (props) => {
  const { children, ...formProps } = props;
  return <form {...formProps}>{children}</form>;
};

export default Object.assign(Form, { Item });
