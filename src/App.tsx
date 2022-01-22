import React from 'react';
import Home from './Home';
import { Routes, Route } from 'react-router-dom';
/* const MicroFrontendA = React.lazy(() => import('Weatherapp/Weatherapp')); */
const DivingSites = React.lazy(() => import('Divesitesapp/Divesitesapp'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route
        path="/prohibited-dive-sites"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <DivingSites />
          </React.Suspense>
        }
      ></Route>
      {/*  <Route
        path="/weather"
        element={
          <React.Suspense fallback={<div>Loading...</div>}>
            <MicroFrontendA />
          </React.Suspense>
        }
      ></Route> */}
    </Routes>
  );
}

export default App;
