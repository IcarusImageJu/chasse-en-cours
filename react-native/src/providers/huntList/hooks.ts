import type { Region } from 'react-native-maps';
import { useRecoilValue } from 'recoil';
import { huntListQuery } from './selectors';
import type * as Location from 'expo-location';

export const useHuntList = ({
  region,
  userLocation,
}: {
  region: Region | undefined;
  userLocation: Location.LocationObject | undefined;
}) => {
  const huntList = useRecoilValue(huntListQuery({ region, userLocation }));

  return { huntList };
};
