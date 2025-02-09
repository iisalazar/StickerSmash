import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function useImagePicker() {
  const [image, setImage] = useState<string | null>(null);

  /**
   * 
   * @returns {Promise<string | null>} Returns the uri of the image selected by the use  or null if no image was selected
   */
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1
    });

    if (result.canceled) {
      alert('You did not select any image');
      return null;
    }
    console.log(result);
    setImage(result.assets[0].uri);
    return result.assets[0].uri;
  }

  return {
    image,
    pickImageAsync
  }
}