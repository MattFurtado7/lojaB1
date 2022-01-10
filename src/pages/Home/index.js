import React,{ useState } from 'react';
import {Text, StyleSheet, SafeAreaView, 
  TouchableOpacity, TextInput } from 'react-native';




export default function Home( { navigation } ) {

  const [nome, setNome] = useState([]);
  const [input, setInput] = useState('');

  function handleAdd(){
    if (input === '') return;

    const data = {
      key: input,
      nome: input
    };
    
    setNome([...nome, data]);
    setInput('');
    navigation.navigate('Loja', { nome: input})
  }

 return(

   <SafeAreaView style={styles.container}>

     <TextInput 
      multiline={true}
      placeholderTextColor='#747474'
      autoCorrect={false}
      placeholder="Nome do Cliente"
      style={styles.input}
      value={input}
      onChangeText={ (texto) => setInput(texto) }
     />
     

     <TouchableOpacity style={styles.handleAdd} onPress={handleAdd}>
        <Text style={styles.handleAddText}>Entrar</Text> 
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