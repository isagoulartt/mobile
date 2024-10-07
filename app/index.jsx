import { View, StyleSheet, Text} from "react-native";
import {Link} from 'expo-router';

const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    box:{
        shadowOpacity: 1.25,  
        shadowRadius: 10,
        borderRadius: 10, 
       padding: 50
    },

    texto:{
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
        fontFamily:'courier new',
        fontWeight:'800',
    }
   
  });

export default function Page(){
    return(
        <View style={style.container}> 
           <View style={style.box}>
           
                <Text style={style.texto}>Atividades</Text>
            <Link href= "/login">Faça seu login</Link>
            <Link href= "/banco">App do banco</Link>
            <Link href= "/(tabs)\calculadora">Calculadora</Link>
            <Link href= "/spotify">Entre no spotify</Link>
            <Link href= "/lista">Lista de músicas</Link>
            <Link href= "/pokemon">Escolha seu pokemon</Link>
            <Link href= "/sobre-mim">Sobre mim</Link>
            <Link href= "/ifome">Ifome</Link>
            <Link href= "/galeria">Galeria</Link>
            <Link href= "/camera">Camera</Link>
            </View>
    
        </View>
    );
}

