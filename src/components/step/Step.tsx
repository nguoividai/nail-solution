import React, { useEffect, useRef, useState } from 'react';

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
  disabledFromStep?: number;
  id?: string;
  onChangeStep?: (step: number) => void;
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

const Step: React.FC<StepProps> = ({
  id,
  children,
  defaultStep,
  disabledFromStep,
  onChangeStep,
}) => {
  const [show, setShow] = useState<string>(children?.[0]?.props?.name);
  const [step, setStep] = useState<number>(defaultStep || 0);

  const handleClick = (item: PaneProps, index: number) => {
    if (disabledFromStep !== undefined && +disabledFromStep >= 0 && index > disabledFromStep) {
      return;
    }
    setShow(item.name);
    setStep(index);
    onChangeStep?.(index);
  };

  useEffect(() => {
    const changeStep = defaultStep || 0;
    setStep(changeStep);
    setShow(children?.[changeStep]?.props?.name);
  }, [defaultStep, children]);

  return (
    <div id={id} className="booking-info">
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

export default Object.assign(React.memo(Step), { Pane: React.memo(Pane) });
