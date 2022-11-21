import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type SideNavProps = {
  children?: React.ReactNode;
  visible?: boolean;
  hideClose?: boolean;
  onClose?: () => void;
  position?: 'left' | 'right';
  width?: number | string;
};

const SideNav: React.FC<SideNavProps> = (props) => {
  const target = document.getElementById('root');
  const { visible, children, position, width, hideClose, onClose } = props;
  const [currentVisible, setCurrentVisible] = useState<boolean>(visible ?? false);

  useEffect(() => {
    setCurrentVisible(visible ?? false);
  }, [visible]);

  return target
    ? createPortal(
        <div className="sidenav-container">
          <div
            className={`sidenav ${currentVisible ? 'show' : ''} ${position || 'left'}`}
            style={{ width }}
          >
            {!hideClose && (
              <div>
                <a
                  href="#/"
                  className="closebtn"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose?.();
                  }}
                >
                  &times;
                </a>
              </div>
            )}
            <div className="sidenav-content">{children}</div>
          </div>
          {currentVisible && <div className="backdrop" onClick={onClose}></div>}
        </div>,
        target
      )
    : null;
};

export default React.memo(SideNav);
