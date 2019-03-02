import React, { Component } from 'react';
import { Alert, AsyncStorage, StatusBar, Image,BackHandler } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail,View, Left, Right, Button,Icon, Text } from 'native-base';
import { connect } from 'react-redux';

import { addPokemon } from '../publics/redux/actions/pokemon';


class InputPoke extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	constructor(props) {
		super(props);
		
		this.state = {
			category_id : '',
			name : '',
			image_url : '',
			latitude : '',
			longitude : '',
		};
	}

	render() {
		return (
			<Container>
			<StatusBar backgroundColor="#282828"/>
			<Header searchBar rounded style={{backgroundColor: '#303030'}} androidStatusBarColor='#212121'>        
	            <View style={{flex : 1,paddingTop: 14}}><Icon name="chevron-left" type="MaterialIcons" style={{color: '#f0f0f0', paddingLeft: 3}} onPress={()=> this.props.navigation.navigate('home')}/></View>
          
		          <View style={{flex : 6, paddingTop: 17, alignItems: 'center'}}>
		                <Text style={{color: '#f0f0f0', fontSize: 18, fontWeight:'600'}}>Poke Baru</Text>
		          </View>
		          
		          <View style={{flex : 1}}></View>
       		</Header>
				<Content style={{backgroundColor: '#282828'}}>

					<Form>
						<Item stackedLabel>
							<Label style={{color: '#f0f0f0'}}>Kategori</Label>
							<Input 
							onChangeText={(category_id) => this.setState({category_id})} 
							placeholder="Silahkan masukkan id kategori" 
							style={{fontSize: 13, color: '#f0f0f0'}} 
							placeholderTextColor="#969696" 
							autoFocus={true}/>
						</Item>
						<Item stackedLabel>
							<Label style={{color: '#f0f0f0'}}>Nama Pokemon</Label>
							<Input 
							onChangeText={(name) => this.setState({name})} 
							placeholder="Silahkan masukkan Nama Pokemon" 
							style={{fontSize: 13, color: '#f0f0f0'}} 
							placeholderTextColor="#969696" 
							/>
						</Item>
						<Item stackedLabel>
							<Label style={{color: '#f0f0f0'}}>URL Gambar</Label>
							<Input 
							onChangeText={(image_url) => this.setState({image_url})} 
							style={{fontSize: 13, color: '#f0f0f0'}} 
							placeholder="Silahkan masukan url gambar pokemon" 
							placeholderTextColor="#969696"/>
						</Item>

						<Item stackedLabel>
							<Label style={{color: '#f0f0f0'}}>Latitude</Label>
							<Input 
							onChangeText={(latitude) => this.setState({latitude})} 
							style={{fontSize: 13, color: '#f0f0f0'}} 
							placeholder="Silahkan masukan latitude" 
							placeholderTextColor="#969696"/>
						</Item>
						<Item stackedLabel>
							<Label style={{color: '#f0f0f0'}}>Longitude</Label>
							<Input 
							onChangeText={(longitude) => this.setState({longitude})} 
							style={{fontSize: 13, color: '#f0f0f0'}} 
							placeholder="Silahkan masukan longitude" 
							placeholderTextColor="#969696"/>
						</Item>
					</Form>
					<View style={{paddingHorizontal: 20, paddingTop: 30}}>
						{this.buttonInput()}
					</View>
				</Content>
			</Container>
		);
	}

	buttonInput() {
		if(this.state.emailInput === '' || this.state.passwordInput === ''){
			return(	
				<Button disabled style={{borderRadius: 25, backgroundColor: '#609691'}} block>
					<Text style={{color: '#444'}}>Tambah</Text>
				</Button>
			)
		}else{
			return(
				<Button style={{borderRadius: 25, backgroundColor: '#26A69A'}} block onPress={() => this.handleSubmit()}>
					<Text style={{color: '#282828'}}>Tambah</Text>
				</Button>
			)
		}
	}

	async handleSubmit(){
		try{
		await this.props.dispatch(addPokemon({
			category_id : this.state.category_id,
			name : this.state.name,
			image_url : this.state.image_url,
			latitude : this.state.latitude,
			longitude : this.state.longitude,
		}));
		
		this.props.navigation.navigate('home')
	}catch(e){
			Alert.alert("Error", "Terjadi suatu kesalahan, harap coba lagi nanti.")
		this.props.navigation.navigate('home')
	}
	}
	
}


const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(InputPoke)