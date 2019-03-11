import React, { Component } from 'react';
import { Alert, AsyncStorage, StatusBar, Image,BackHandler } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Thumbnail,View, Left, Right, Button,Icon, Text, Picker,  } from 'native-base';
import { connect } from 'react-redux';

import { addPokemon, getCategories, getTypes, getPokemons } from '../publics/redux/actions/pokemon';


class InputPoke extends Component {

	static navigationOptions = ({ navigation }) => ({
		header: null,
	})

	constructor(props) {
		super(props);
		
		this.state = {
			category : '',
			name : '',
			image_url : '',
			latitude : '',
			longitude : '',
			type1 : '',
			type2 : '',
			type3 : '',
		};
	}

	onCategories(value: number) {
        this.setState({
          category: value
        })
    }

    onType1(value: number) {
        this.setState({
          type1: value
        })
    }

    onType2(value: number) {
        this.setState({
          type2: value
        })
    }

    onType3(value: number) {
        this.setState({
          type3: value
        })
    }

    async componentWillMount(){
    	await this.props.dispatch(getCategories())
    	await this.props.dispatch(getTypes())
    }

	render() {
		return (
			<Container>
			<StatusBar backgroundColor="#303030"/>
			<Header searchBar rounded style={{backgroundColor: '#F5F5F5'}} androidStatusBarColor='#303030'>        
	            <View style={{flex : 1,paddingTop: 14}}><Icon name="chevron-left" type="MaterialIcons" style={{color: '#303030', paddingLeft: 3}} onPress={()=> this.props.navigation.navigate('home')}/></View>
          
		          <View style={{flex : 6, paddingTop: 17, alignItems: 'center'}}>
		                <Text style={{color: '#303030', fontSize: 18, fontWeight:'600'}}>Poke Baru</Text>
		          </View>
		          
		          <View style={{flex : 1}}></View>
       		</Header>
				<Content style={{backgroundColor: '#EEEEEE'}}>

					<Form>
						<Item stackedLabel>
							<Label style={{color: '#424242'}}>Nama Pokemon</Label>
							<Input 
							onChangeText={(name) => this.setState({name})} 
							placeholder="Silahkan masukkan Nama Pokemon" 
							style={{fontSize: 13, color: '#424242'}} 
							placeholderTextColor="#969696" 
							/>
						</Item>
						<Item stackedLabel>
							<Label style={{color: '#424242'}}>URL Gambar</Label>
							<Input 
							onChangeText={(image_url) => this.setState({image_url})} 
							style={{fontSize: 13, color: '#424242'}} 
							placeholder="Silahkan masukan url gambar pokemon" 
							placeholderTextColor="#969696"/>
						</Item>

						<Item stackedLabel>
							<Label style={{color: '#424242'}}>Latitude</Label>
							<Input 
							onChangeText={(latitude) => this.setState({latitude})} 
							style={{fontSize: 13, color: '#424242'}} 
							placeholder="Silahkan masukan latitude" 
							placeholderTextColor="#969696"/>
						</Item>
						<Item stackedLabel>
							<Label style={{color: '#424242'}}>Longitude</Label>
							<Input 
							onChangeText={(longitude) => this.setState({longitude})} 
							style={{fontSize: 13, color: '#424242'}} 
							placeholder="Silahkan masukan longitude" 
							placeholderTextColor="#969696"/>
						</Item>

						<Item picker style={{paddingLeft: 10, paddingTop: 5}}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined, color: '#424242' }}
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.category}
                                onValueChange={this.onCategories.bind(this)}
                            >
                                <Picker.Item label="Pilih Kategori" value="" disabled/>
                            	{this.props.pokemon.categories.map((item,index) => 
	                                <Picker.Item key={index} label={item.name} value={item.id} />
                            	)}
                            </Picker>
                        </Item>

                        <Item picker style={{paddingLeft: 10, paddingTop: 5}}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined, color: '#424242' }}
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.type1}
                                onValueChange={this.onType1.bind(this)}
                            >
                                <Picker.Item label="Pilih Tipe Pokemon" value="" disabled/>
                            	{this.props.pokemon.types.map((item,index) => 
	                                <Picker.Item key={index} label={item.name} value={item.id} />
                            	)}
                            </Picker>
                        </Item>
                        {(this.state.type1 != '') &&
                        <Item picker style={{paddingLeft: 10, paddingTop: 5}}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined, color: '#424242' }}
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.type2}
                                onValueChange={this.onType2.bind(this)}
                            >
                                <Picker.Item label="Pilih Tipe Pokemon" value="" disabled/>
                            	{this.props.pokemon.types.map((item,index) => 
	                                <Picker.Item key={index} label={item.name} value={item.id} />
                            	)}
                            </Picker>
                        </Item>
                    	}
                    	{(this.state.type1 != '' && this.state.type2 != '') &&
                        <Item picker style={{paddingLeft: 10, paddingTop: 5}}>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined, color: '#424242' }}
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={this.state.type3}
                                onValueChange={this.onType3.bind(this)}
                            >
                                <Picker.Item label="Pilih Tipe Pokemon" value="" disabled/>
                            	{this.props.pokemon.types.map((item,index) => 
	                                <Picker.Item key={index} label={item.name} value={item.id} />
                            	)}
                            </Picker>
                        </Item>
                    	}
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
					<Text style={{color: '#f0f0f0'}}>Tambah</Text>
				</Button>
			)
		}else{
			return(
				<Button style={{borderRadius: 25, backgroundColor: '#26A69A'}} block onPress={() => this.handleSubmit()}>
					<Text style={{color: '#f0f0f0'}}>Tambah</Text>
				</Button>
			)
		}
	}

	async handleSubmit(){
		const pokeAdd = {
			category_id : this.state.category,
			type_ids : [this.state.type1, this.state.type2, this.state.type3],
			name : this.state.name,
			image_url : this.state.image_url,
			latitude : this.state.latitude,
			longitude : this.state.longitude,
		}

		try{
		await this.props.dispatch(addPokemon(pokeAdd));
		await this.props.dispatch(getPokemons())
		this.props.navigation.navigate('home')
		}catch(e){
		await this.props.dispatch(getPokemons())

			this.props.navigation.navigate('home')
			Alert.alert("Error", "Terjadi suatu kesalahan, harap coba lagi nanti.")
		}
	}
	
}


const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		pokemon: state.pokemon
	}
}

export default connect(mapStateToProps)(InputPoke)