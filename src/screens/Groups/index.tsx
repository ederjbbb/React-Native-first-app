import { StyleSheet, Text, View , StatusBar} from 'react-native';
import { Container,Title } from './styles';
import { Header } from '../../components/Header';
import { Highlights } from '../../components/Highlight';
import { GroupCard } from '../../components/GroupCard';

export  function Groups() {
  return (
    <Container >
        <Header/>
        <Highlights title='Turmas' subtitle='Jogue com a sua turma'/>
        <GroupCard title='Galera do Ignite' />
    </Container>
  );
}


