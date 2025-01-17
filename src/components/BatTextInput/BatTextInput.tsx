import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInpytStyles';

interface BatTextInputProps {
    pass:string
}

export function BatTextInput(props: BatTextInputProps) {
  return (
        <TextInput
            style={styles.inputer}
            placeholder='pass'
            value={props.pass}
        />
  );
}