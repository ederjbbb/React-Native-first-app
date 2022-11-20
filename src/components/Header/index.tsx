import { Container } from "./styles";
import { Logo} from './styles'
import  logo from '../../assets/logo.png'
import { BackIcon, BackButton} from './styles'


type Props = {
    showBackButton?: boolean;
}
export function Header({showBackButton = false} :Props){
    return(
        <Container>
            {   showBackButton && <BackButton>
                <BackIcon />
                </BackButton>
            }
            
            <Logo source={logo}/>
        </Container>
    )
        
    }   