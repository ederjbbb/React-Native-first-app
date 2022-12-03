import { ActivityIndicator, StatusBar } from 'react-native';
import {Roboto_400Regular, Roboto_700Bold, useFonts} from '@expo-google-fonts/roboto'

import { Groups } from './src/screens/Groups';
import { Loader } from './src/components/Loader';
import { NewGroup } from './src/screens/NewGroup';
import { Routes } from './src/routes';
import  { ThemeProvider } from 'styled-components'
import  defaut from './src/themes/defaultTheme'
import { isLoading } from 'expo-font';

export default function App() {

  const [fontsLoaded]= useFonts({ Roboto_700Bold, Roboto_400Regular})
  return (
    
    <ThemeProvider theme={defaut}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        
      />
  {fontsLoaded ? <Routes/> : <Loader/>}
    </ThemeProvider>
  );
}
