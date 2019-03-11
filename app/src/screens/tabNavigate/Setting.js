import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions, StatusBar, AsyncStorage, Alert, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Left, Body, Right, Card,View, CardItem, Text, Fab, Icon, Badge, Header,Button, Title, Item, Input, List, ListItem, Thumbnail } from 'native-base';

import { logout } from '../../publics/redux/actions/auth'

type Props = {};
class Setting extends Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    header: null,
  })
  
  
  render() {
    const auth = this.props.auth.data
    return (
      <Container>
      <StatusBar hidden={false}/>

        <Header searchBar rounded style={{backgroundColor: '#F5F5F5'}} androidStatusBarColor='#303030'>
            <View style={{paddingTop: 17}}>
                <Text style={{color: '#303030', fontSize: 18, fontWeight:'600'}}>Pengaturan</Text>
            </View>
        </Header>
        <Content style={{backgroundColor: '#EEEEEE'}}>
            <List style={{paddingTop: 20}}>

              {(auth.token != null) &&
              	<ListItem noBorder style={{paddingVertical: 5}}>
                  <View style={{}}>
                    <Text style={{fontSize: 14, color: '#424242'}}>Akun</Text>
                    <Text style={{fontSize: 13, color: '#757575'}}>{auth.email}</Text>
                  </View>
              </ListItem>
              }
              {(auth.token === null) &&
              <ListItem noBorder style={{paddingVertical: 5}} onPress={() => this.checkLoginStatus('home')}>
                  <View>
                      <Text style={{fontSize: 14, color: '#424242'}}>Akun</Text>
                      <Text style={{fontSize: 13, color: '#757575'}}>Anda belum login, ketuk untuk login</Text>
                  </View>
              </ListItem>
              }
              <ListItem noBorder style={{paddingVertical: 5}} onPress={() => Linking.openURL('mailto:dev@teramuza.xyz?subject=Laporkan Masalah PokeDumb') }>
                  <View>
                      <Text style={{fontSize: 14, color: '#424242'}}>Laporkan Masalah</Text>
                      <Text style={{fontSize: 13, color: '#757575'}}>dev@pokedumb.teramuza.xyz</Text>
                  </View>
              </ListItem>
              <ListItem noBorder style={{paddingVertical: 5}}>
                  <View>
                      <Text style={{fontSize: 14, color: '#424242'}}>Tentang</Text>
                      <Text style={{fontSize: 13, color: '#757575'}}>Versi P O K E DUMB 0.0.1-5_dev</Text>
                  </View>
              </ListItem>
              <View style={{borderBottomWidth: 1, borderBottomColor: '#E0E0E0', margin: 15}}/>
              <ListItem noBorder style={{paddingVertical: 10}}>
                    <View style={{flexDirection: 'row'}} >
                      <Icon name="thumbs-up" style={{color: '#616161'}}/>
                      <Text style={{fontSize: 14, color: '#616161', paddingTop: 7, paddingLeft: 12}}>Beri Masukan</Text>
                    </View>
              </ListItem>
              <ListItem noBorder style={{paddingVertical: 10}}>
                    <View style={{flexDirection: 'row'}} >
                      <Icon name="people" style={{color: '#616161'}}/>
                      <Text style={{fontSize: 14, color: '#616161', paddingTop: 7, paddingLeft: 12}}>Bergabung Dengan Komunitas</Text>
                    </View>
              </ListItem>
              <ListItem noBorder style={{paddingVertical: 10}}>
                    <View style={{flexDirection: 'row'}} >
                      <Icon name="appstore" style={{color: '#616161'}}/>
                      <Text style={{fontSize: 14, color: '#616161', paddingTop: 7, paddingLeft: 12}}>Ulas Kami di PlayStore</Text>
                    </View>
              </ListItem>
              <ListItem noBorder style={{paddingVertical: 10}} onPress={() => Linking.openURL('http://teramuza.xyz') } >
                    <View style={{flexDirection: 'row'}} >
                      <Icon name="globe" style={{color: '#616161'}}/>
                      <Text style={{fontSize: 14, color: '#616161', paddingTop: 7, paddingLeft: 12}}>Buka pokedumb.teramuza.xyz</Text>
                    </View>
              </ListItem>
              {(auth.token != null) &&
              <ListItem noBorder style={{paddingVertical: 10}} onPress={()=> this.confirmLogout()}>
                    <View style={{flexDirection: 'row'}} >
                      <Icon name="power" style={{color: '#616161'}}/>
                      <Text style={{fontSize: 14, color: '#616161', paddingTop: 7, paddingLeft: 12}}>Keluar</Text>
                    </View>
              </ListItem>
          }
            </List>
        </Content>
      </Container>
    );
  }

  async checkLoginStatus(path){
      try { 
        const token = this.auth.data.token
        await this.props.dispatch(checkLogin(token))
        this.props.navigation.navigate(path)
      }
      catch(e){
        this.props.navigation.navigate('login', {path})
      }

  }

  confirmLogout(){
    Alert.alert(
            'Keluar',
            'Apa anda yakin ingin Keluar?',
            [
                {text: 'Tidak'},
                {text: 'Ya', onPress: async () => {
                    
                    await AsyncStorage.removeItem('token')
                    await AsyncStorage.removeItem('userId')
                    await AsyncStorage.removeItem('refToken')
                    await AsyncStorage.clear()
                    try {
                    await this.props.dispatch(logout(this.auth.data.token, this.auth.data.refToken))
                	}catch(e){
                		console.log(e)
                	}
                    this.props.navigation.navigate('splash')
                }
                },
            ]
        )
  }


}
const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Setting)