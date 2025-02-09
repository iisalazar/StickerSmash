import React, { PropsWithChildren } from 'react'
import { Modal } from 'react-native'

type Props = PropsWithChildren<{
  isVisible: boolean;
  onClose: () => void;
}>;

function EmojiPicker(props: Props) {
  return (
    <Modal animationType='slide' transparent={true} visible={props.isVisible}>
      <View>
        <
      </View>
    </Modal>
  )
}

export default EmojiPicker