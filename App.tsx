
import { Groups } from './src/screens/Groups';
import  { ThemeProvider} from 'styled-components'
import  defaut from './src/themes/defaultTheme'
import { ActivityIndicator, StatusBar } from 'react-native';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { isLoading } from 'expo-font';
import { Loader } from './src/components/Loader';
import { NewGroup } from './src/screens/NewGroup';
import { Players } from './src/screens/Players';

export default function App() {

  const [fontsLoaded]= useFonts({ Roboto_700Bold, Roboto_400Regular})
  return (
    <ThemeProvider theme={defaut}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        
      />
  {fontsLoaded ? <Players/> : <Loader/>}
    </ThemeProvider>
  );
}
