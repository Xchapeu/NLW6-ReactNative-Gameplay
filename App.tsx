import React from 'react';
import { StatusBar, LogBox } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';

import { AuthProvider } from './src/hooks/auth';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

LogBox.ignoreLogs(['You are not currently signed in to Expo on your development machine.',
'Remote debugger is in a background tab which may cause apps to perform slowly.']);

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  });

  //Enquanto as fontes não forem carregadas mantém o app na tela de splash
  if(!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Background>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent//subir conteúdo inclusive na barra de status
      />
      
      <AuthProvider>
        <Routes />
      </AuthProvider>

    </Background>
  );
}