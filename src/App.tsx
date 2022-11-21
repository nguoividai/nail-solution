import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DefaultReact from './pages/test/DefaultReact';
import routes from './routes';

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
