import React, { useState, useCallback, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';

import warningIcon from '../../assets/images/icons/warning.svg';

import { Container, Main, ScheduleItem } from './styles';
import api from '../../services/api';

interface Schedule {
  week_day: number | undefined;
  from: string;
  to: string;
}

const TeacherForm: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState<Schedule[]>([
    { week_day: undefined, from: '', to: '' },
  ]);

  const handleAddNewScheduleItem = useCallback(() => {
    setScheduleItems(state => [
      ...state,
      { week_day: undefined, from: '', to: '' },
    ]);
  }, []);

  const handleCreateClass = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      api
        .post('classes', {
          name,
          avatar,
          whatsapp,
          bio,
          subject,
          cost: Number(cost),
          schedules: scheduleItems,
        })
        .then(() => {
          alert('Cadastro realizado com sucesso.');
          history.push('/');
        })
        .catch(() => {
          alert('Erro no cadastro, tente novamente');
        });
    },
    [name, avatar, whatsapp, bio, subject, cost, scheduleItems, history],
  );

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return { ...scheduleItem, [field]: value };
        }

        return scheduleItem;
      });

      setScheduleItems(updatedScheduleItems);
    },
    [scheduleItems],
  );

  return (
    <Container>
      <Header
        title="Que incrível que voce quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              label="Nome completo"
              name="name"
              value={name}
              onChange={event => setName(event.target.value)}
            />

            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={event => setAvatar(event.target.value)}
            />

            <Input
              label="Whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={event => setWhatsapp(event.target.value)}
            />

            <Textarea
              label="Biografia"
              name="bio"
              value={bio}
              onChange={event => setBio(event.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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

            <Input
              label="Custo da sua hora por aula"
              name="cost"
              value={cost}
              onChange={event => setCost(event.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={handleAddNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, key) => (
              <ScheduleItem key={key}>
                <Select
                  label="Dia da semana"
                  name="week_day"
                  value={scheduleItem.week_day}
                  onChange={event => {
                    setScheduleItemValue(key, 'week_day', event.target.value);
                  }}
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                />

                <Input
                  label="Das"
                  name="from"
                  type="time"
                  value={scheduleItem.from}
                  onChange={event => {
                    setScheduleItemValue(key, 'from', event.target.value);
                  }}
                />

                <Input
                  label="Até"
                  name="to"
                  type="time"
                  value={scheduleItem.to}
                  onChange={event => {
                    setScheduleItemValue(key, 'to', event.target.value);
                  }}
                />
              </ScheduleItem>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados!
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </Main>
    </Container>
  );
};

export default TeacherForm;
