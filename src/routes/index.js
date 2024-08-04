 import React, { lazy, Suspense } from 'react';
 import { Routes, Route } from "react-router-dom";

const SampleContainer = lazy(() => import('../screens/Sample')); 
const SampleContainer2 = lazy(() => import('../screens/Sample2'));

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
          <Route path="/"  element={<SampleContainer />} />
          <Route path="/sample" element={<SampleContainer2 />} />
          
          
      </Routes>
      </Suspense>
    
  );
}
