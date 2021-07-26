import React, { ReactNode } from 'react';
import { Text, Image, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import discordImg from '../../assets/discord.png';
import { styles } from './styles';

type ButtonIconProps = RectButtonProps & {
  children: ReactNode;
}

export function ButtonIcon({ children, ...rest }: ButtonIconProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon}/>
      </View>
      <Text style={styles.title}>{children}</Text>
    </RectButton>
  );
}