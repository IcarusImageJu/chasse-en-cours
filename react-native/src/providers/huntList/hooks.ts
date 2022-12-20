import type { Region } from 'react-native-maps';
import { useRecoilValue } from 'recoil';
import { huntListQuery } from './selectors';

export const useHuntList = (region: Region | undefined) => {
  const huntList = useRecoilValue(huntListQuery(region));

  return { huntList };
};
