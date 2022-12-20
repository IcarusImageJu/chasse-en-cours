import { useEffect } from 'react';
import * as Location from 'expo-location';
import { useRecoilState } from 'recoil';
import { useLocationState } from './atoms';

export const useLocation = () => {
  const [userLocation, setUserLocation] = useRecoilState(useLocationState);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }
      const res = await Location.getCurrentPositionAsync({});
      setUserLocation(res);
    })();
  }, [setUserLocation]);

  return { userLocation };
};
