import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Title, Content, Badge, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, H3, Card, CardItem } from 'native-base';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';

import { getPokemons, delPoke } from '../publics/redux/actions/pokemon';


type Props = {};
class PokeDetail extends Component<Props> {

	static navigationOptions = ({ navigation }) => ({
		header: (
            <Header searchBar rounded style={{backgroundColor: '#F5F5F5'}} androidStatusBarColor='#303030'>        
	            <View style={{flex : 1,paddingTop: 14}}>
                    <Icon 
                        name="chevron-left" 
                        type="MaterialIcons" 
                        style={{color: '#303030', paddingLeft: 3}} 
                        onPress={()=> navigation.goBack()}
                    />
                </View>
          
                <View style={{flex : 6, paddingTop: 17, alignItems: 'center'}}>
		                <Text style={{color: '#303030', fontSize: 18, fontWeight:'600'}}>Poke Detail</Text>
		          </View>
		          
		          <View style={{flex : 1}}/>
       		</Header>
        ),
	})

	render() {
        const poke = this.props.navigation.state.params.pushData

        return (
            <Container>
                <Content>
                	<View style={{flexDirection: 'row' }}>
                		<View>
                			<Image source={{uri : poke.image_url}} style={{width: 150, height: 150}}/>
                		</View>

                		<View style={{paddingTop: 40, paddingLeft: 10}}>
                			<View>
                				<Text style={{color: '#3b3b3b'}}>Name : <Text style={{fontWeight:'bold', color: '#3b3b3b'}}>{poke.name}</Text></Text>
                				<Text style={{fontSize: 13, color: '#6d6d6d', paddingTop: 5}}>Poke Category : <Text style={{fontWeight:'bold', fontSize: 13, color: '#6d6d6d'}}>{poke.categories.name}</Text></Text>
                				<View style={{flexDirection: 'row', paddingTop: 5}}>
                				<Text style={{fontSize: 13, color: '#969696'}}>Poke Types : </Text>
                					{poke.types.map((type, index) => (
                						<Text key={index}  style={{fontSize: 12, color: '#969696', borderWidth: 0.3, borderColor: '#969696', borderRadius: 5, paddingHorizontal: 5, paddingVertical: 2}}>{type.name}</Text>
                					))}
                				</View>
                			</View>

                			<View/>
                		</View>

                	</View>
                	<View>
                		<MapView style={{width: '100%', height: 500}}
					        initialRegion={{
				                latitude: Number(poke.latitude),
				                longitude: Number(poke.longitude),
				                latitudeDelta: 0.00922,
				                longitudeDelta: 0.00421,
					        }}
					    >
					        <Marker coordinate={{latitude : Number(poke.latitude), longitude : Number(poke.longitude) }}>
                                <Image source={{uri : poke.image_url}} style={{width: 80, height: 80}}/>
					        </Marker>
					      					      
					    </MapView>
                	</View>
                </Content>
                <Footer>
                	<FooterTab style={{backgroundColor: '#303030'}}>
                		<Button onPress={() => this.props.navigation.navigate('update', {pushData : poke})}>
                            <Icon name="create" style={{color: '#b2b2b2'}}/>
                		</Button>

                		<Button onPress={() => this.delPoke(poke)}>
                            <Icon name="trash" style={{color: '#b2b2b2'}}/>
                		</Button>
                	</FooterTab>
                </Footer>
            </Container>
        )
    }

    async delPoke(poke){
    	Alert.alert(
            'Hapus',
            `Apa anda yakin ingin menghapus ${poke.name} ?`,
            [
                {text: 'Tidak'},
                {text: 'Ya', onPress: async () => {
                    await this.props.dispatch(delPoke(poke.id))
                    await this.props.dispatch(getPokemons())
                    this.props.navigation.navigate('home')
                }
                },
            ]
        )
    }
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth,
		pokemon: state.pokemon
	}
}

export default connect(mapStateToProps)(PokeDetail)
