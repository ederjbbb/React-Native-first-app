import { BackButton, BackIcon } from './styles'
import { Container, Logo } from "./styles";

import  logo from '../../assets/logo.png'
import { useNavigation } from "@react-navigation/native";

type Props = {
    showBackButton?: boolean;
}
export function Header({showBackButton = false} :Props){

    const navigation  = useNavigation()
    function handleGoBack () {
        navigation.navigate('groups')
    }
    return(
        <Container>
            {   showBackButton && <BackButton onPress={handleGoBack}>
                <BackIcon  />
                </BackButton>
            }
            
            <Logo source={logo}/>
        </Container>
    )
        
    }   