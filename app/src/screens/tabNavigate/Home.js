import React, { Component } from 'react'
import { Image, View, TouchableNativeFeedback, FlatList, StatusBar, AsyncStorage } from 'react-native'
import { Container, Header, Title, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Icon, Button, Fab, Badge, Input } from 'native-base'
import { connect } from 'react-redux';
import { createFilter } from 'react-native-search-filter';

const KEYS_TO_FILTERS = ['name','categories.name','types.name'];


import { getPokemons } from '../../publics/redux/actions/pokemon';
import { checkLogin } from '../../publics/redux/actions/auth';


class Home extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

   constructor(props) {
    super(props);
  
    this.state = {
      searchTerm: ''
    };
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

	renderItem = ({ item, index }) => (
    <ListItem noBorder key={index} thumbnail 
      onPress={()=> this.props.navigation.navigate('detail', {pushData : item})} 
    >
            <Left>
                <Image source={{uri : item.image_url }} style={{width:100,  height: 100}}/>
            </Left>
            <Body>
                <Text style={{fontSize: 14, color: '#1b1b1b'}}>{item.name}</Text>
                <Text style={{fontSize: 13, color: '#969696'}}>{item.categories.name}</Text>
                <View style={{flexDirection: 'row', paddingTop: 5}}>
                {item.types.map((type, index) =>(
                  <Text style={{fontSize: 12, color: '#969696', borderWidth: 0.3, borderColor: '#969696', borderRadius: 20, paddingHorizontal: 5, paddingVertical: 2}} key={index}>{`${type.name}`}</Text>
                ))}
                </View>
            </Body>
            <Right>
            </Right>
        </ListItem>
  )

  _keyExtractor = (item, index) => index.toString();

  render() {
    const filteredPoke = this.props.pokemon.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <Container>
      <StatusBar hidden={false} barStyle="light-contents"/>

        <Header searchBar rounded style={{backgroundColor: '#F5F5F5'}} androidStatusBarColor='#303030'>        
            <Icon name="search" style={{color: '#969696', marginTop: 14, marginLeft: 12}}/>
            <Input placeholder="Cari Pokemon mu" placeholderTextColor="#969696" style={{marginTop: 2, paddingLeft: 10, color: '#303030'}} onChangeText={(term) => { this.searchUpdated(term) }}/>
        </Header>
        <Content style={{backgroundColor: '#EEEEEE'}}>
              <View style={{paddingTop: 20, paddingLeft: 15}}>
                <Text style={{fontSize: 17, fontWeight: '500', paddingBottom: 10, color: '#424242'}}>Daftar Pokemon</Text>
            </View>
            <List>
              <FlatList
                data={(this.state.searchTerm) ? filteredPoke : this.props.pokemon.data}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItem}
              />
            </List>
        </Content>
        <Fab
            containerStyle={{ }}
            style={{ backgroundColor: '#303030' }}
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
	  		this.props.navigation.navigate(path)
	  	}
	  	catch(e){
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