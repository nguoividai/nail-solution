import React, { useState } from 'react';

type PaneProps = {
  children?: React.ReactNode;
  title?: string;
  sub?: string;
  active?: boolean;
  name: string;
  style?: React.CSSProperties;
};

type StepProps = {
  children?: React.ReactElement[];
  defaultStep?: number;
};

const Pane: React.FC<PaneProps> = ({ title, active, name, sub, style }) => {
  return (
    <>
      <div style={style} key={name} className={`${active ? 'active' : ''}`}>
        <div className="content">
          <div className="title-small">{title}</div>
          <div className="title-sub">{sub}</div>
        </div>
      </div>
    </>
  );
};

const Step: React.FC<StepProps> = ({ children, defaultStep }) => {
  const [show, setShow] = useState<string>(children?.[0]?.props?.name);
  const [step, setStep] = useState<number>(defaultStep || 0);

  const handleClick = (item: PaneProps, index: number) => {
    setShow(item.name);
    setStep(index);
  };

  return (
    <div className="booking-info">
      <div className="booking-step clearfix">
        {children &&
          children?.map((e, index) => (
            <div
              style={e.props.style}
              className={`step_info_item ${index <= +step ? 'active' : ''}`}
              key={e?.props?.name}
              onClick={() => handleClick(e.props, index)}
            >
              <Pane
                name={e?.props?.name}
                title={e?.props?.title}
                sub={e.props.sub}
                active={show === e.props.name}
              />
            </div>
          ))}
      </div>
      <div className="tab-pane-content">
        {children?.find((e) => e.props.name === show)?.props?.children}
      </div>
    </div>
  );
};

export default Object.assign(Step, { Pane });
