import React from 'react';
import { Spinner } from 'react-bootstrap';
import { createPortal } from 'react-dom';

interface PageLoadingProps {
  loading?: boolean;
}

const PageLoading: React.FC<PageLoadingProps> = (props) => {
  const { loading } = props;
  const target = document.getElementById('root');
  return loading && target
    ? createPortal(
        <div className="loading-backdrop">
          <div className="spinner">
            <Spinner variant="primary" />
            <div className="d-block text-primary">Loading...</div>
          </div>
        </div>,
        target
      )
    : null;
};

export default React.memo(PageLoading);
