import React,{ useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Modal, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-web';
import * as Animatable from 'react-native-animatable';


import brigChoco from '../brigChoco';

const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity);

export default function Loja( { navigation, route } ) {

  const [open, setOpen] = useState(false);

  
 
  return(
        
    
    <SafeAreaView>
            <Text style={styles.title}>  cliente: {route.params.nome}</Text>

              <TouchableOpacity onPress={() => navigation.navigate('brigChoco')}> 
                <Image source={require('../Home/brigchoco.png')} style={styles.imgBox} />
              </TouchableOpacity>
            
            

            <TouchableOpacity>
                <Image source={require('../Home/brigcasad.png')} style={styles.imgBox}/>
            </TouchableOpacity>
        

        
            <TouchableOpacity>
                <Image source={require('../Home/brigamen.png')} style={styles.imgBox}/>
            </TouchableOpacity>



            <Modal animationType="slide" transparent={false} visible={open}>
              <SafeAreaView style={styles.modal}>
                <View style={styles.modalHeader}>
                  <TouchableOpacity onPress={ () => setOpen(false) }>
                      <Ionicons style={{marginLeft: 5, marginRight: 5}}name="md-arrow-back" size={40} color="#FFF" />
                  </TouchableOpacity>
                  <Text style={styles.modalTitle}> PRODUTOS ESCOLHIDOS </Text>
                </View>

                <Animatable.View style={styles.modalBody} animation="fadeInUp" useNativeDriver>
                  <Text>{route.params.brig}</Text>
                </Animatable.View>
                </SafeAreaView>
            </Modal>

          <AnimatedBtn style={styles.fab} useNativeDriver animation="bounceInUp" duration={1500} onPress={ () => setOpen(true) }>
              <Ionicons name="ios-list" size={35} color="#FFF" />
          </AnimatedBtn>

    </SafeAreaView>    


  )
}



const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: "#ffffff"
    },
    fab:{
      position: 'absolute',
      width: 60,
      height: 60,
      backgroundColor: '#0094FF',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 30,
      right: 25,
      bottom: 25,
      elevation: 2,
      zIndex: 9,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset:{
        width: 1,
        height: 3,
      }
    },
    title:{
      paddingBottom: 10,
      fontSize: 25,
      textAlign: 'center',
      color: '#fff',
      backgroundColor: '#0094FF'
    },
    imgBox:{
        marginTop: 50,
        height: 150,
        width: 150,
        marginLeft: 50
    },
    modal:{
      flex:1,
      backgroundColor: '#FFF'
    },
    modalHeader:{
      marginLeft:10,
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#0070c0'
    },
    modalTitle:{
      marginLeft:15,
      fontSize:23,
      color: '#fff'
    },
    modalBody:{
      marginTop: 15,
      backgroundColor:'#FFF'
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