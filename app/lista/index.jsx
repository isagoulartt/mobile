import React from "react"
import { View, Text, StyleSheet, FlatList} from "react-native";


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    }
})

export default listaTarefas = () => {
    const musicas = [
        {id:1, titulo:'chop suey!'},
        {id:2, titulo:'luz que me traz paz'},
        {id:3, titulo:'anos luz'},
        {id:4, titulo:'bebe vem me procurar'}
    ]
    return <View style ={styles.container}>
    
        <FlatList
        data={musicas}
        renderItem={({item})=> <Text>{item.titulo}</Text>}
        />
    </View>
}

