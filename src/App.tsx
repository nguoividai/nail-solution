import React, { Suspense, useEffect } from 'react';
import './App.css';
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom';
import routes from './routes';
import useSiteUrl from './hooks/useSiteUrl';

// Containers
const MainLayout = React.lazy(() => import('./layout/MainLayout'));

function App() {
  return (
    <HashRouter>
      <Suspense fallback="loading">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {routes.map((route, idx) => {
              return (
                route.element && <Route key={idx} path={route.path} element={<route.element />} />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

export default App;
