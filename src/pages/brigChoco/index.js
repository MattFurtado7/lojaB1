import React,{ useState, useCallback, useEffect } from 'react';
import { Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';




export default function brigChoco( {navigation} ) {

  const [item, setItem] = useState([]);

  function handleAdd(){
    
    const data = {
      key: 'brigChoco',
      item: 'Brigadeiro Chocolate'
    };
    
    setItem([...item, data]);
    navigation.navigate('brigChoco', { brig: 'item'})  

  } 

  

  return(

    <SafeAreaView style={styles.container}>
        
    
                <Image source={require('../Home/brigchoco.png')} style={styles.imgBox}/>

                <Text> Brigadeiro de Chocolate </Text>
                <Text> Preço: R$ 2, 00 </Text>
           
            <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
                <Text style={styles.handleAddText}>Comprar</Text>            
            </TouchableOpacity>

    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#ffffff"
    },
    title:{
      paddingBottom: 10,
      fontSize: 25,
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#0070c0'
    },
    imgBox:{
        marginTop: 50,
        height: 150,
        width: 150,
        marginLeft: 50
    },
    modal:{
      flex:1,
      backgroundColor: '#171d31'
    },
    modalHeader:{
      marginLeft:10,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    modalTitle:{
      marginLeft:15,
      fontSize:23,
      color: '#FFF'
    },
    modalBody:{
      marginTop: 15,
    },
    input:{
      fontSize:15,
      marginLeft:10,
      marginRight:10,
      marginTop:30,
      backgroundColor:'#FFF',
      padding:9,
      height: 85,
      textAlignVertical: 'top',
      color: '#000',
      borderRadius: 5,
    },
    handleAdd:{
      backgroundColor: '#0070c0',
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 10,
      height: 40,
      borderRadius: 5
    },
    handleAddText:{
      fontSize: 20,
      color: '#fff'
    },
  });