import { useState } from "react";
import { Button, Image, View, StyleSheet } from "react-native";


export default function pickerGaleria(){
    const [image, setImage] = useState('');

    const pickImage = async () => {
        let result = await ImagePicker.launchLibraryasync({
            mediaTypes: ImagePicker.mediaTypeOpitions.All,
            allowsEditing: true,
            aspect:[4,3],
            quality:1,
        });

        console.log(result);

        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };
    
      return (
        <View style={styles.container}>
          <Button title="Selecione uma foto" onPress={pickImage} />
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 200,
        height: 200,
      },
    });