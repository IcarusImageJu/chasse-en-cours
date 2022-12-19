import React, { useEffect, useState } from 'react';
import type { FC } from 'react';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './Home';

import * as Location from 'expo-location';

const AppRouter: FC = () => {
  const [_location, setLocation] = useState<
    Location.LocationObject | undefined
  >(undefined);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      const res = await Location.getCurrentPositionAsync({});
      setLocation(res);
    })();
  }, []);

  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </NativeRouter>
  );
};

export default AppRouter;
