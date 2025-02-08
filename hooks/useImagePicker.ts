import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function useImagePicker() {
  const [image, setImage] = useState<string | null>(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    if (result.canceled) {
      alert('You did not select any image');
      return;
    }
    console.log(result);
    setImage(result.assets[0].uri);
  }

  return {
    image,
    pickImageAsync
  }
}