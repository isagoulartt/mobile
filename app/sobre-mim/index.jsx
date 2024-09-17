import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";

const style = StyleSheet.create({
    perfil: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center'
    },

    bely: {
       margin:33,
        fontSize: 15,
        textAlign: 'center',
        marginTop:'auto',
        marginEnd:'auto'
    },

    sobre: {

        fontSize: 20,
        textAlign: 'center'

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    box: {
        shadowOpacity: 1.25,
        shadowRadius: 10,
        borderRadius: 10,
        padding: 50,
        margin: 50
    },

    botaotexto:{
        backgroundColor: '#4B8989',
        borderRadius: 1,
        textAlign: 'center',
        padding: 5,
        color: '#FFF', 
        width: 150,
        margin: 10,
        borderRadius: 15,
        alignItems:'center',
        justifyContent:"center"

    }
})

export default function Page() {
    return (
        <View style={style.container}>
            <View style={style.box}>
                <Text style={style.sobre}>Sobre mim</Text>
                <Image
                    style={style.perfil}
                    source={require('./img/bely.png')}
                />
                
                <Text style={style.bely}> Isabely, 18 anos. </Text>
            <Pressable onPress={Page}>
                <Text style={style.botaotexto}>Filmes e séries </Text>
                <Link href= "/sobre-mim/filmesseries"></Link>
            </Pressable>
            <Pressable onPress={Page}>
                <Text style={style.botaotexto}>Hobbys </Text>
                <Link href= "/sobre-mim/hobby"></Link>
            </Pressable>
            </View>

        </View>
    );
}
