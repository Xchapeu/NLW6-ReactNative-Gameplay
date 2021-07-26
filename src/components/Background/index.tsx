import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

type GradientProps = {
  children: ReactNode;
}

export function Background({ children }: GradientProps) {

  const { secondary80, secondary100 } = theme.colors;

  return (
    <LinearGradient 
      style={styles.container}
      colors={[secondary80, secondary100]}
    >
      {children}
    </LinearGradient>
  );
}