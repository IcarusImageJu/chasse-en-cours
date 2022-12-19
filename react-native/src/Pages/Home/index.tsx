import React from 'react';
import type { FC } from 'react';
import { View } from 'react-native';
import Maps from '../../Features/Maps';
import { StyledContainer } from './styles';

const Home: FC = () => {
  return (
    <StyledContainer>
      <StyledContainer>
        <Maps />
      </StyledContainer>
      <View />
    </StyledContainer>
  );
};

export default Home;
