import React, { useCallback, ReactNode } from 'react';
import { Image } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/images/logo.png';
import backIcon from '../../assets/images/icons/back.png';

import { Container, Topbar, Title, Header } from './styles';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  headerRight,
  children,
}) => {
  const navigation = useNavigation();

  const handleGoBackground = useCallback(() => {
    navigation.navigate('Landing');
  }, [navigation]);

  return (
    <Container>
      <Topbar>
        <BorderlessButton onPress={handleGoBackground}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </Topbar>

      <Header>
        <Title>{title}</Title>
        {headerRight}
      </Header>

      {children}
    </Container>
  );
};

export default PageHeader;
