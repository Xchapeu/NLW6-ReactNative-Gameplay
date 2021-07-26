import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useAuth } from '../../hooks/auth';
import { RectButton } from 'react-native-gesture-handler'

import { Avatar } from '../Avatar';

import { styles } from './styles';
import { ModalLogout } from '../ModalLogout';

export function Profile() {
  const { user, signOut } = useAuth();
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  function handleOpenLogoutModal() {
    setOpenLogoutModal(true);
  }

  function handleCloseLogoutModal() {
    setOpenLogoutModal(false);
  }

  function handleSignOut() {

    // Alert.alert('Logout', 'Você se desconectou do gameplay.', [
    Alert.alert('Logout', 'Desconectar do Gameplay?', [  
      {
        text: 'não',
        style: 'cancel'
      },
      {
        text: 'sim',
        onPress: () => signOut()
      }
      // {
      //   text: 'ok',
      //   onPress: () => signOut()
      // }
    ])
  }

  return (
    <View style={styles.container}>
      
      <RectButton onPress={handleSignOut}>
        <Avatar urlImage={user.avatar}/>
      </RectButton>
      
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá, 
          </Text>
          <Text style={styles.username}>
            { user.firstName }
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória!!!
        </Text>
      </View>

      <ModalLogout  
        visible={openLogoutModal} 
        closeModal={handleCloseLogoutModal}
      >
        <View style={styles.logoutContainer}>
          <View>
            <Text style={styles.title}>Deseja sair do GamePlay?</Text>
          </View>
          <View style={styles.buttonContainer}>
              <RectButton
                onPress={handleCloseLogoutModal}
                style={styles.buttonNo}
              >
                <Text style={styles.greeting}>Não</Text>
              </RectButton>
              <RectButton
                onPress={handleSignOut}
                style={styles.buttonYes}
              >
                <Text style={styles.greeting}>Sim</Text>
              </RectButton>
          </View>
        </View>
      </ModalLogout>

    </View>
  );
}