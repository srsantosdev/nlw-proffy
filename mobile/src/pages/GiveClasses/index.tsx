import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';
import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import {
  Container,
  Background,
  Title,
  Description,
  ButtonText,
  Button,
} from './styles';

const GiveClasses: React.FC = () => {
  const navigation = useNavigation();

  const handleNavigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Container>
      <Background source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>

        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </Background>

      <Button onPress={handleNavigateBack}>
        <ButtonText>Tudo bem</ButtonText>
      </Button>
    </Container>
  );
};

export default GiveClasses;
