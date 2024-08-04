import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const SampleScreen = lazy(() => import('../screens/Sample'));
const Sample2Screen = lazy(() => import('../screens/Sample2'));

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<SampleScreen />} />
                <Route path="/sample" element={<Sample2Screen />} />
            </Routes>
        </Suspense>
    );
};
