import React, { useState, useCallback } from 'react';

import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import { useFocusEffect } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import {
  Container,
  Scroll,
  SearchForm,
  Label,
  Input,
  InputBlock,
  InputGroup,
  SearchButton,
  SearchText,
} from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const [favorites, setFavorites] = useState<string[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  const loadFavorites = useCallback(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: Teacher) => {
            return teacher.id;
          },
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }, []);

  useFocusEffect(() => {
    loadFavorites();
  });

  const handleFiltersSubmit = useCallback(() => {
    loadFavorites();

    api
      .get('classes', {
        params: {
          subject,
          week_day,
          time,
        },
      })
      .then(response => {
        setTeachers(response.data);

        setIsFiltersVisible(false);
      });
  }, [subject, week_day, time, loadFavorites]);

  const handleToggleFiltersVisible = useCallback(() => {
    setIsFiltersVisible(state => !state);
  }, []);

  return (
    <Container>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <SearchForm>
            <Label>Matéria</Label>
            <Input
              placeholder="Qual a matéria?"
              value={subject}
              onChangeText={text => setSubject(text)}
            />

            <InputGroup>
              <InputBlock>
                <Label>Dia da semana</Label>
                <Input
                  placeholder="Qual o dia?"
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                />
              </InputBlock>
              <InputBlock>
                <Label>Horário</Label>
                <Input
                  placeholder="Qual horário?"
                  value={time}
                  onChangeText={text => setTime(text)}
                />
              </InputBlock>
            </InputGroup>

            <SearchButton onPress={handleFiltersSubmit}>
              <SearchText>Filtrar</SearchText>
            </SearchButton>
          </SearchForm>
        )}
      </PageHeader>

      <Scroll>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            favorite={favorites.includes(teacher.id)}
            key={teacher.id}
            teacher={teacher}
          />
        ))}
      </Scroll>
    </Container>
  );
};

export default TeacherList;
