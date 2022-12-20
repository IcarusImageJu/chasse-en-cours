import React from 'react';
import type { FC } from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './Home';

import { RecoilRoot } from 'recoil';

const AppRouter: FC = () => {
  return (
    <RecoilRoot>
      <NativeRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NativeRouter>
    </RecoilRoot>
  );
};

export default AppRouter;
