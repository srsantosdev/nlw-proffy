import React, { useState, useCallback } from 'react';
import { Image, Linking } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import favoriteIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

import {
  Container,
  Profile,
  Avatar,
  ProfileInfo,
  Name,
  Subject,
  Bio,
  Footer,
  Price,
  PriceValue,
  ButtonsContainer,
  FavoriteButton,
  WhatsappButton,
  ButtonText,
} from './styles';
import api from '../../services/api';

export interface Teacher {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  whatsapp: string;
  cost: string;
  subject: string;
  user_id: string;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorite: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorite }) => {
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleLinkToWhatsapp = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);

    api.post('connections', {
      user_id: teacher.user_id,
    });
  }, [teacher]);

  const handleToggleFavorite = useCallback(async () => {
    const favorites = await AsyncStorage.getItem('favorites');

    let favoritesArray = [];

    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }

    if (isFavorite) {
      const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id;
      });

      favoritesArray.splice(favoriteIndex, 1);

      setIsFavorite(false);
    } else {
      favoritesArray.push(teacher);

      setIsFavorite(true);
    }

    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
  }, [isFavorite, teacher]);

  return (
    <Container>
      <Profile>
        <Avatar source={{ uri: teacher.avatar }} />

        <ProfileInfo>
          <Name>{teacher.name}</Name>
          <Subject>{teacher.subject}</Subject>
        </ProfileInfo>
      </Profile>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <Price>
          Preço/hora {'   '}
          <PriceValue>R$ {teacher.cost}</PriceValue>
        </Price>

        <ButtonsContainer>
          <FavoriteButton
            isFavorite={isFavorite}
            onPress={handleToggleFavorite}
          >
            <Image source={isFavorite ? unFavoriteIcon : favoriteIcon} />
          </FavoriteButton>
          <WhatsappButton onPress={handleLinkToWhatsapp}>
            <Image source={whatsappIcon} />
            <ButtonText>Entrar em contato</ButtonText>
          </WhatsappButton>
        </ButtonsContainer>
      </Footer>
    </Container>
  );
};

export default TeacherItem;
