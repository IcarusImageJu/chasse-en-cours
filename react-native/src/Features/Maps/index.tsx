import React from 'react';
import type { FC } from 'react';
import { StyledMaps } from './styles';
import type { Details, Region } from 'react-native-maps';

const Maps: FC = () => {
  const handleonRegionChangeComplete = (region: Region, details: Details) => {
    console.log(region, details);
  };
  return (
    <StyledMaps
      showsCompass
      followsUserLocation
      loadingEnabled
      showsMyLocationButton
      showsUserLocation
      userLocationPriority="balanced"
      onRegionChangeComplete={handleonRegionChangeComplete}
    />
  );
};

export default Maps;
