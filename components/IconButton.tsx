import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
  onPress: () => void;
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
}

function IconButton(props: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={props.onPress}>
      <MaterialIcons name={props.icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{props.label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12
  }
})

export default IconButton