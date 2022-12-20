import React, { Suspense } from 'react';
import type { FC } from 'react';
import { StyledMaps } from './styles';
import { useLocation } from '../../providers/location/useLocation';
import { useRegion } from '../../providers/region/hooks';
import Markers from './Markers';

const Maps: FC = () => {
  const {} = useLocation();
  const { handleRegionChange } = useRegion();
  return (
    <StyledMaps
      showsCompass
      followsUserLocation
      loadingEnabled
      showsMyLocationButton
      showsUserLocation
      userLocationPriority="balanced"
      onRegionChangeComplete={(region) => handleRegionChange(region)}
    >
      <Suspense>
        <Markers />
      </Suspense>
    </StyledMaps>
  );
};

export default Maps;
