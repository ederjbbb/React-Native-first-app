import { Container, Form, HeaderList, PlayerCounter } from './styles';

import { Button } from '../../components/Button';
import { ButtonIcon } from '../../components/ButtonIcon';
import { Filter } from '../../components/Filter'
import { FlatList } from 'react-native';
import { Header } from '../../components/Header';
import { Highlights } from '../../components/Highlight';
import { Input } from '../../components/Input'
import { ListEmpty } from '../../components/ListEmpty';
import { PlayerCard } from '../../components/PlayerCard'
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';

type RouteParams = {
    group: string
}
export function Players(){

    const [team, setTeam] = useState('Time A')
    const [players, setPLayers] = useState(['Eder', 'Juliana', 'Mariana'])

    const route = useRoute()
    const { group } = route.params as RouteParams;
    return(
        <Container>
            <Header showBackButton/>
            <Highlights title={group} subtitle='Adicione a turma e separe os times' />
            <Form>
            <Input 
            placeholder='Nome da turma'
            autoCorrect={false}
            />
            <ButtonIcon icon={'add'}/>
            </Form>
            <HeaderList>
            <FlatList
            data={['Time A', 'Time B']}
            keyExtractor ={(item) => item}
            renderItem= {({item}) => (
                <Filter title={item} isActive = {item === team} 
                    onPress={( )=> setTeam(item)}
                />
            )}
                horizontal
            />
            <PlayerCounter>{players.length}</PlayerCounter>
            </HeaderList>
           <FlatList
            data={players}
            keyExtractor={item => item}
            renderItem ={({item}) => (
                <PlayerCard name={item} onRemove={() => {}}
                />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={[
                {paddingBottom: 100},
                players.length === 0 && {flex: 1}
            ]}
                ListEmptyComponent = {() => (
                    <ListEmpty 
                        message='Cadastre um player'
                        />
                )}

           />
           <Button title='Remover turma' type='SECONDARY'/>
           
        </Container>
    )
}
