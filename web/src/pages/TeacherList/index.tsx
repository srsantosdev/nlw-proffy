import React, { useState, useCallback, FormEvent } from 'react';

import Header from '../../components/Header';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, Form, Main } from './styles';
import api from '../../services/api';

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  const searchTeachers = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

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
        });
    },
    [subject, week_day, time],
  );

  return (
    <Container className="container">
      <Header title="Estes são os proffys disponíveis.">
        <Form onSubmit={searchTeachers}>
          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Química', label: 'Química' },
              { value: 'Educação física', label: 'Educação física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Literatura', label: 'Literatura' },
              { value: 'Sociologia', label: 'Sociologia' },
              { value: 'Filosofia', label: 'Filosofia' },
            ]}
            value={subject}
            onChange={event => setSubject(event.target.value)}
          />
          <Select
            label="Dia da semana"
            name="week_day"
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
            value={week_day}
            onChange={event => setWeekDay(event.target.value)}
          />
          <Input
            label="Hora"
            name="time"
            type="time"
            value={time}
            onChange={event => setTime(event.target.value)}
          />

          <button type="submit">Buscar</button>
        </Form>
      </Header>

      <Main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </Main>
    </Container>
  );
};

export default TeacherList;
