import React, { useCallback } from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container } from './styles';
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
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  const createNewConnection = useCallback(() => {
    api.post('connections', {
      user_id: teacher.user_id,
    });
  }, [teacher.user_id]);

  return (
    <Container>
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </Container>
  );
};

export default TeacherItem;
