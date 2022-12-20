import React from 'react';
import type { FC } from 'react';
import { useHuntList } from '../../providers/huntList/hooks';
import { useRegion } from '../../providers/region/hooks';

const Markers: FC = () => {
  const { region } = useRegion();
  const {} = useHuntList(region);
  return <></>;
};

export default Markers;
