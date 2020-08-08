import React, { useCallback, useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import api from '../../services/api';

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  ButtonPrimary,
  ButtonSecondary,
  ButtonText,
  TotalConnections,
} from './styles';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    });
  }, []);

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigation.navigate('GiveClasses');
  }, [navigation]);

  const handleNavigateToStudyPages = useCallback(() => {
    navigation.navigate('Study');
  }, [navigation]);

  return (
    <Container>
      <Banner source={landingImg} />

      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <ButtonPrimary onPress={handleNavigateToStudyPages}>
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </ButtonPrimary>

        <ButtonSecondary onPress={handleNavigateToGiveClassesPage}>
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </ButtonSecondary>
      </ButtonsContainer>

      <TotalConnections>
        Total de {totalConnections} conexões ja realizadas{' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
