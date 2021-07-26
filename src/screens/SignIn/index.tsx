import React  from 'react';
import { View, Text, Image, Alert, ActivityIndicator } from 'react-native';
import { ButtonIcon } from '../../components/ButtonIcon';
import fighterImg from '../../assets/illustration.png';
import { styles } from './styles';
import { Background } from '../../components/Background';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';


export function SignIn() {

  const { user, loading, signIn } = useAuth();

  async function handleSignIn() {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  }

  return (
    <Background>
      <View style={styles.container}>
        
        <Image 
          source={fighterImg}
          style={styles.image}
          resizeMode="stretch"
        />
        <View style={styles.content}>
          <Text style={styles.title}>
            Conecte se {`\n`}
            e organize suas {`\n`}
            jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {`\n`}
            favoritos com seus amigos
          </Text>

          {
            loading 
              ? <ActivityIndicator color={theme.colors.primary}/>
              : <ButtonIcon onPress={handleSignIn}>
                  Entrar com Discord
                </ButtonIcon>
          }
        </View>
        
      </View>
    </Background>
  );
}