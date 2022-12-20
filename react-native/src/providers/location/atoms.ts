import { atom } from 'recoil';
import type * as Location from 'expo-location';

export const useLocationState = atom<Location.LocationObject | undefined>({
  key: 'UserLocationState',
  default: undefined,
});
