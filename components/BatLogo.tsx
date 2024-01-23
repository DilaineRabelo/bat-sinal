import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../assets/bat-logo.png';



export function BatLogo() {
  return (
    <>
        <Image
            style={{...styles.logo, display:'flex'}}
            
            source={batLogo}
        />
    </>
  );
}

export default BatLogo;