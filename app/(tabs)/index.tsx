import { StyleSheet, Platform, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import useImagePicker from '@/hooks/useImagePicker';
import { useState } from 'react';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function HomeScreen() {
  const {
    image,
    pickImageAsync
  } = useImagePicker();

  const [showAppOptions, setShowAppOptions] = useState(false);


  async function handleImagePicker() {
    const result = await pickImageAsync();
    if (result !== null) {
      setShowAppOptions(true);
    }
  }

  function onReset() {
    setShowAppOptions(false);
  }

  function onAddSticker() {

  }

  async function onSaveImageAsync() {

  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={image ?? PlaceholderImage} />
      </View>
      {
        showAppOptions ? (
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <IconButton icon="refresh" label="Reset" onPress={onReset} />
              <CircleButton onPress={onAddSticker} />
              <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
            </View>
          </View>
        ) : (
          <View style={styles.footerContainer}>
            <Button theme="primary" label='Choose a photo' onPress={handleImagePicker} />
            <Button label='Use this photo' onPress={() => setShowAppOptions(true)} />
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252923',
    alignItems: 'center'
  },
  imageContainer: {
    flex: 1
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center'
  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row'
  }
  // titleContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   gap: 8,
  // },
  // stepContainer: {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  // reactLogo: {
  //   height: 178,
  //   width: 290,
  //   bottom: 0,
  //   left: 0,
  //   position: 'absolute',
  // },
  // button: {
  //   fontSize: 20,
  //   textDecorationLine: 'underline',
  //   color: '#fff'
  // }
});
