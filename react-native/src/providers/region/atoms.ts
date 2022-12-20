import type { Region } from 'react-native-maps';
import { atom } from 'recoil';

export const regionState = atom<Region | undefined>({
  key: 'RegionState',
  default: undefined,
});
