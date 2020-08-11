import React from 'react';
import { NextPage } from 'next';

import styled from '../theme/styled-components';
import { ButtonRegular } from '../UI/buttons';

const H1 = styled.h1`
  color: ${({ theme }) => theme.Palette.chineseNewYear};
`;

const Home: NextPage = () => {
  return (
    <div>
      <H1 data-testid="h1">Humber</H1>
      <ButtonRegular onActionHandle={() => console.log('press')}>
        Press me
      </ButtonRegular>
    </div>
  );
};

export default Home;
