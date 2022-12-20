import React from 'react';
import type { FC } from 'react';
import { useHuntList } from '../../providers/huntList/hooks';
import { useRegion } from '../../providers/region/hooks';
import { Marker } from 'react-native-maps';
import { useLocation } from '../../providers/location/useLocation';

const Markers: FC = () => {
  const { region } = useRegion();
  const { userLocation } = useLocation();
  const { huntList } = useHuntList({ region, userLocation });

  return (
    <>
      {huntList.map((hunt) => (
        <Marker
          key={hunt.id}
          coordinate={{
            latitude: hunt.get('location').latitude,
            longitude: hunt.get('location').longitude,
          }}
        />
      ))}
    </>
  );
};

export default Markers;
