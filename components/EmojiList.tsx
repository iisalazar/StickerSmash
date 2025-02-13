import { type ImageSource, Image } from 'expo-image'
import React from 'react'
import { Platform, FlatList, StyleSheet, Pressable } from 'react-native'

type Props = {
  onSelect: (image: ImageSource) => void;
  onCloseModal: () => void;
}

const emojis = [
  require("../assets/images/icon.png"),
  require("../assets/images/react-logo.png"),
]

function EmojiList(props: Props) {
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emojis}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable onPress={() => {
          props.onSelect(item);
          props.onCloseModal();
        }}>
          <Image source={item} key={index} style={styles.image} />
        </Pressable>
      )}
    />
  )
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20
  }
})

export default EmojiList