import { useState, useRef } from "react";
import { View, StyleSheet, Text, Image, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { getMediaLibraryPermissionsAsync } from "expo-image-picker";


export default function Camera() {
    const [permissao, pedirPermissao] = useCameraPermissions()
    const [foto, setFoto] = useState(null)
    const cameraRef = useRef(null)
    const [ladoCamera, setLadoCamera] = useState ('back')
    const[permissaoSalvar, pedirPermissaoSalvar] = MediaLibrary.usePermissions()


    if (!permissao) {
        return <View></View>
    }

    if (!permissao.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.permissao}>Voce precisa dar permissão para utilizar a camera</Text>
                <Button
                    title="pedir permissão"
                    onPress={pedirPermissao}
                />
            </View>

        )
    }

   
    const tirarFoto = async () => {
        const foto = await cameraRef.current?.takePictureAsync({
            quality: 0.5,
            base64: true
        })
         setFoto(foto)
         console.log(foto)
    }

    const inverterLadoCamera = () => {
        setLadoCamera(ladoCamera == 'back' ? 'front' : 'back')
    }

    const salvarFoto = async () => {
        console.log(permissaoSalvar)
        if(!permissaoSalvar.status == 'granted'){
            await pedirPermissaoSalvar()
        }
        MediaLibrary.saveToLibraryAsync(foto.uri)
        setFoto(null)
    }

    return (
        <View style={styles.container}>
        {
            foto?
            <View>
            <Image style={styles.image} source={{uri: foto.uri}}/>
            <Button
            title='descartar imagem' onPress={() => setFoto(null)}/>
            <Button title='salvar foto' onPress={salvarFoto} />
            </View>
            :
        <CameraView style={styles.camera} facing={ladoCamera} ref={cameraRef}>
          <View style={styles.botaosalvar}>
            <Button
             title="tirar foto" onPress={tirarFoto}
            />
            <Button
            title="troca lado"
            onPress={inverterLadoCamera}
            />
          </View>

        </CameraView>
}
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    permissao: {
        textAlign: 'center',
    },
    camera: {
        flex: 1
    },
    image:{
    width:'100%',
    height:'100%'
    }

})