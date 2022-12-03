import { Container, Content, Icon } from "./styles";
import React, { useState } from "react";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlights } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

export function NewGroup() {
    const [group, setGroup] = useState('')

const navigation = useNavigation()
    function handleNew () {
        navigation.navigate('players', {group})
    }

    const theme = useTheme();
    return (
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>
                
                <Highlights title="Nova turma" subtitle="Crie turma par novas pessoas "/>

                <Input placeholder="Nome da turma" 
                placeholderTextColor= {theme.COLORS.GRAY_300}
                onChangeText={setGroup}
                value={group}
                />

                
                <Button title='Criar' style={{ marginTop : 20}}
                    onPress={handleNew} 
                />
            </Content>
        </Container>
    )
}