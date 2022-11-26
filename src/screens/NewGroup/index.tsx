import React from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlights } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, Content ,Icon } from "./styles";
import { useTheme } from "styled-components/native";



export function NewGroup() {

    const theme = useTheme();
    return (
        <Container>
            <Header showBackButton/>
            <Content>
                <Icon/>
                <Highlights title="Nova turma" subtitle="Crie turma par novas pessoas "/>
                <Input placeholder="Nome da turma" 
                placeholderTextColor= {theme.COLORS.GRAY_300}
                />
                <Button title='Criar' style={{ marginTop : 20}}/>
            </Content>
        </Container>
    )
}