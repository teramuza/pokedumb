import React, { Component } from 'react';
import { ScrollView, Platform, StyleSheet, FlatList, Image, TouchableWithoutFeedback, Dimensions, StatusBar, AsyncStorage, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Left, Body, Right, Card,View, CardItem, Text, Fab, Icon, Badge, Header,Button, Title, Item, Input, List, ListItem, Thumbnail } from 'native-base';

import { logout } from '../../publics/redux/actions/auth'

type Props = {};
class Setting extends Component<Props> {

  static navigationOptions = ({ navigation }) => ({
    header: null,
  })
  constructor(props) {
    super(props);
  
    this.state = {
        email : '',
        token : '',
        refToken : ''
    };
  }

  async getToken(){
    const refToken = await AsyncStorage.getItem('refToken')
    const token = await AsyncStorage.getItem('token')

    this.setState({token, refToken})
  }

  async componentDidMount(){
    const email = await AsyncStorage.getItem('email')
    this.setState({email})
  }
  
  render() {
    
    return (
      <Container>
      <StatusBar hidden={false}/>

        <Header searchBar rounded style={{backgroundColor: '#303030'}} androidStatusBarColor='#212121'>
            <View style={{paddingTop: 17}}>
                <Text style={{color: '#f0f0f0', fontSize: 18, fontWeight:'600'}}>Pengaturan</Text>
            </View>
        </Header>
        <Content style={{backgroundColor: '#212121'}}>
            <List style={{paddingTop: 20}}>

              {(this.state.token != '') &&
              	<ListItem noBorder style={{paddingVertical: 5}}>
                  <View style={{}}>
                    <Text style={{fontSize: 14, color: '#f0f0f0'}}>Akun</Text>
                    <Text style={{fontSize: 13, color: '#969696'}}>{this.state.email}</Text>
                  </View>
              </ListItem>
              }
              <ListItem noBorder style={{paddingVertical: 5}}>
                  <View>
                      <Text style={{fontSize: 14, color: '#f0f0f0'}}>Tentang</Text>
                      <Text style={{fontSize: 13, color: '#969696'}}>Versi P O K E DUMB 0.0.1-5_dev</Text>
                  </View>
                  
              </ListItem>
              <View style={{borderBottomWidth: 1, borderBottomColor: '#303030', margin: 15}}/>
              <ListItem noBorder style={{paddingVertical: 10}}>
                    <View style={{flexDirection: 'row'}} >
                      <Icon name="thumbs-up" style={{color: '#c0c0c0'}}/>
                      <Text style={{fontSize: 14, color: '#c0c0c0', paddingTop: 7, paddingLeft: 12}}>Beri Masukan</Text>
                    </View>
              </ListItem>
              <ListItem noBorder style={{paddingVertical: 10}}>
                    <View style={{flexDirection: 'row'}} >
                      <Icon name="people" style={{color: '#c0c0c0'}}/>
                      <Text style={{fontSize: 14, color: '#c0c0c0', paddingTop: 7, paddingLeft: 12}}>Bergabung Dengan Komunitas</Text>
                    </View>
              </ListItem>
              <ListItem noBorder style={{paddingVertical: 10}}>
                    <View style={{flexDirection: 'row'}} >
                      <Icon name="appstore" style={{color: '#c0c0c0'}}/>
                      <Text style={{fontSize: 14, color: '#c0c0c0', paddingTop: 7, paddingLeft: 12}}>Ulas Kami di PlayStore</Text>
                    </View>
              </ListItem>
              <ListItem noBorder style={{paddingVertical: 10}}>
                    <View style={{flexDirection: 'row'}} >
                      <Icon name="globe" style={{color: '#c0c0c0'}}/>
                      <Text style={{fontSize: 14, color: '#c0c0c0', paddingTop: 7, paddingLeft: 12}}>Buka pokedumb.teramuza.xyz</Text>
                    </View>
              </ListItem>
              {(this.state.token != '') &&
              <ListItem noBorder style={{paddingVertical: 10}} onPress={()=> this.confirmLogout()}>
                    <View style={{flexDirection: 'row'}} >
                      <Icon name="power" style={{color: '#c0c0c0'}}/>
                      <Text style={{fontSize: 14, color: '#c0c0c0', paddingTop: 7, paddingLeft: 12}}>Keluar</Text>
                    </View>
              </ListItem>
          }
            </List>
        </Content>
      </Container>
    );
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
                    await this.props.dispatch(logout(this.state.token, this.state.refToken))
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


export default connect()(Setting)