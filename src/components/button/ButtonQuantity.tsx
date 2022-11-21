import React, { useState } from 'react';
import Button from './Button';

const ButtonQuantity = () => {
  const [value, setValue] = useState<number>(0);

  const increase = () => {
    setValue((prev) => prev + 1);
  };

  const decrease = () => {
    setValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="button-quantity">
      {value > 0 ? (
        <>
          <Button size="sm" onClick={decrease}>
            <i className="icofont-minus"></i>
          </Button>
          <input value={value} disabled />
        </>
      ) : null}

      <Button size="sm" onClick={increase}>
        <i className="icofont-plus"></i>
      </Button>
    </div>
  );
};

export default React.memo(ButtonQuantity);
