import React from 'react';

import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';

import { Container, Form, Main } from './styles';

const TeacherList: React.FC = () => {
  return (
    <Container className="container">
      <Header title="Estes são os proffys disponíveis.">
        <Form>
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </Form>
      </Header>

      <Main>
        <TeacherItem />
      </Main>
    </Container>
  );
};

export default TeacherList;
