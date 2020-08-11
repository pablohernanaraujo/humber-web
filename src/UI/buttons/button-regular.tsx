import React, { FunctionComponent } from 'react';
import styled from '../../theme/styled-components';

const ButtonWrapper = styled.div`
  background-color: coral;
  padding: 16px;
`;

const ButtonText = styled.div`
  font-size: 16px;
`;

interface ButtonRegularProps {
  onActionHandle: () => void;
}

export const ButtonRegular: FunctionComponent<ButtonRegularProps> = ({
  children,
  onActionHandle,
}) => (
  <ButtonWrapper onClick={onActionHandle}>
    <ButtonText>{children}</ButtonText>
  </ButtonWrapper>
);
