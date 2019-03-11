import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';

class MapPoints extends Component<Props> {
  constructor(props) {
    super(props);
    const {region} = this.getInitialState()
    this.state = {region};
  }

  getInitialState() {
  return {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };
}

onRegionChange(region) {
  this.setState({ region });
}

render() {
  const pokemons = this.props.pokemon.data
  return (
    <View>
      <MapView style={{width: '100%', height: '110%'}}
        initialRegion={{
          latitude: -6.3019001,
          longitude: 106.7328594,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        }}
      >
      {pokemons.map((item, index) => (
        <Marker onPress={()=> this.props.navigation.navigate('detail', {pushData : item})} key={index} coordinate={{latitude : Number(item.latitude), longitude : Number(item.longitude) }}>
          <Image source={{uri : item.image_url}} style={{width: 80, height: 50}}/>
        </Marker>
      ))}
      
      </MapView>
    </View>
  );
}
}


const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon  
  }
}

export default connect(mapStateToProps)(MapPoints)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
