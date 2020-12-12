import React, { useState } from 'react';

import { FiClock, FiPower } from 'react-icons/fi';
import {
  Container,
  Profile,
  HeaderContent,
  Header,
  Content,
  Schedule,
  NextAppointment,
  Section,
  Appointment,
  Calendar,
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const { signOut, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />

          <Profile>
            <img
              src={
                user.avatar_url ||
                'https://gravatar.com/avatar/1d0df06e255a4ab0702a05a5608eacd3?s=400&d=wavatar&r=x'
              }
              alt={user.name}
            />
            <div>
              <span>Bem-vindo, </span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>

      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src={
                  user.avatar_url ||
                  'https://gravatar.com/avatar/1d0df06e255a4ab0702a05a5608eacd3?s=400&d=wavatar&r=x'
                }
                alt={user.name}
              />
              <strong>Luis Costa</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>

          <Section>
            <strong>Manhã</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src={
                    user.avatar_url ||
                    'https://gravatar.com/avatar/1d0df06e255a4ab0702a05a5608eacd3?s=400&d=wavatar&r=x'
                  }
                  alt={user.name}
                />
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src={
                    user.avatar_url ||
                    'https://gravatar.com/avatar/1d0df06e255a4ab0702a05a5608eacd3?s=400&d=wavatar&r=x'
                  }
                  alt={user.name}
                />
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>

            <Appointment>
              <span>
                <FiClock />
                08:00
              </span>

              <div>
                <img
                  src={
                    user.avatar_url ||
                    'https://gravatar.com/avatar/1d0df06e255a4ab0702a05a5608eacd3?s=400&d=wavatar&r=x'
                  }
                  alt={user.name}
                />
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar />
      </Content>
    </Container>
  );
};

export default Dashboard;
