import { View, StyleSheet, Image } from 'react-native';

export default function App() {

const logoSpotify =

'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px- Spotify_logo_without_text.svg.png';

return (

<View style={styles.container}>

<Image

style={styles.logo}

source={{

uri: logoSpotify,

}}

/>

</View>

);

}

const styles = StyleSheet.create({

    container: {
    
    flex: 1,
    
    alignItems: 'center',
    
    justifyContent: 'center',
    
    backgroundColor: '#191414',
    
    },
    
    logo: {
    
    width: 100,
    
    height: 100,
    
    },
    
    });