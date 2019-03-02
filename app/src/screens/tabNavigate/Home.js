import React, { Component } from 'react'
import { Image, View, TouchableNativeFeedback, FlatList, StatusBar, AsyncStorage } from 'react-native'
import { Container, Header, Title, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Icon, Button, Fab, Badge, Input } from 'native-base'
import { connect } from 'react-redux';

import { getPokemons } from '../../publics/redux/actions/pokemon';
import { checkLogin } from '../../publics/redux/actions/auth';


class Home extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: (
			<Header searchBar rounded style={{backgroundColor: '#303030'}} androidStatusBarColor='#212121'>        
                <View style={{paddingTop: 17}}>
                	<Text style={{color: '#f0f0f0', fontSize: 18, fontWeight:'600'}}>Beranda</Text>
                </View>
            </Header>
		)
	})
    componentDidMount() {
		this.getData();
	}

	getData = () => {
		this.props.dispatch(getPokemons());
	}

	renderItem = ({ item, index }) => (

    <ListItem noBorder key={index} thumbnail onPress={()=> this.props.navigation.navigate('listofPlaylist', {pushData : item})}>
            <Left>
                <Image source={{uri : item.image_url }} style={{width:100,  height: 100}}/>
            </Left>
            <Body>
                <Text style={{fontSize: 14, color: '#f0f0f0'}}>{item.name}</Text>
                <Text style={{fontSize: 13, color: '#969696'}}>{item.category}</Text>

            </Body>
            <Right>
            </Right>
        </ListItem>
  )

  _keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <Container>
      <StatusBar hidden={false}/>

        <Header searchBar rounded style={{backgroundColor: '#303030'}} androidStatusBarColor='#212121'>        
            <Icon name="search" style={{color: '#969696', marginTop: 14, marginLeft: 12}}/>
            <Input placeholder="Cari Pokemon mu" placeholderTextColor="#969696" style={{marginTop: 2, paddingLeft: 10, color: '#f0f0f0'}}/>
        </Header>
        <Content style={{backgroundColor: '#212121'}}>
              <View style={{paddingTop: 20, paddingLeft: 15}}>
                <Text style={{fontSize: 17, fontWeight: '500', paddingBottom: 10, color: '#f0f0f0'}}>Generasi I</Text>
            </View>
            <List>
              <FlatList
                data={this.props.pokemon.data}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem}
              />
            </List>
        </Content>
        <Fab
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.checkLoginStatus('inputPoke')}>
            <Icon name="add" />
          </Fab>
      </Container>
    );
  }

  	async checkLoginStatus(path){
	  	try { 
	  		const token = await AsyncStorage.getItem('token')
	  		await this.props.dispatch(checkLogin(token))
	  		console.warn('WOI');
	  		this.props.navigation.navigate(path)
	  	}
	  	catch(e){
	  		console.warn(e);
	  		this.props.navigation.navigate('login', {path})
	  	}

	}
}

const mapStateToProps = (state) => {
	return {
		pokemon: state.pokemon	
	}
}

export default connect(mapStateToProps)(Home)