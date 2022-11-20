import { Container } from "./styles";
import { ActivityIndicator } from "react-native";


export function Loader (){
    return(<Container>
        <ActivityIndicator color='green'  size={'large'} />
    </Container>)
}