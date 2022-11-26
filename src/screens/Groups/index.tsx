import { StyleSheet, Text, View , StatusBar, FlatList} from 'react-native';
import { Container,Title } from './styles';
import { useState} from 'react' 
import { Header } from '../../components/Header';
import { Highlights } from '../../components/Highlight';
import { GroupCard } from '../../components/GroupCard';
import { ListEmpty} from '../../components/ListEmpty/index'
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


export  function Groups() {

  const [groups, setGroups] = useState<string[]>([])
  return (
    <Container >
        <Header/>
        <Highlights title='Turmas' subtitle='Jogue com a sua turma'/>
        <FlatList 
        
        data={groups}
        keyExtractor={item => item}
         renderItem={ item => (
          <GroupCard title={item.item} 

          />
         )}
         contentContainerStyle={groups.length === 0 && {flex: 1}}
         ListEmptyComponent={<ListEmpty message={"Quer cadastrar a primeira turma?"}/>}
         />
         
        <Button title='Criar nova turma'/>
    </Container>
  );
}


