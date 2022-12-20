import type { Region } from 'react-native-maps';
import { useRecoilState } from 'recoil';
import { regionState } from './atoms';

export const useRegion = () => {
  const [region, setRegion] = useRecoilState(regionState);

  const handleRegionChange = (newRegion: Region) => {
    setRegion(newRegion);
  };

  return { region, setRegion, handleRegionChange };
};
