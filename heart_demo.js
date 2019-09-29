import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ToastAndroid,
  ScrollView

} from 'react-native';
import Video from 'react-native-video';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const videoName = {
  heart: require('./Video/heart.mp4'),
  big_heart: require('./Video/big_heart.mp4'),
  namaste: require('./Video/namaste.mp4'),
  // on: require('./img/flash_on.png'),
  // auto: require('./img/flash_auto.png'),

}

export default class Heart_Demo extends Component {
  state = {
    name: false,
    pose:'',
    // videoName:'./Video/'+this.state.pose+'.mp4',
  }


  

  componentDidMount() {
    this.setState({
      pose: this.props.navigation.state.params.pose
    });
    ToastAndroid.show('Loading...', ToastAndroid.SHORT);
    this.showName();
	}

  showName() {
    setTimeout(() => {
      this.setState({
        name: true,
      })
    }, 4000);

  }

  render() {

    
    // {this.showName()}

    // { this.showName() }

    return (
      <View style={styles.container}>
        <View style={{
          // borderColor:'red',borderWidth:1,borderStyle:'solid',
        }}>
          {this.state.name &&
            <View style={{
              position: 'absolute',
              backgroundColor: 'rgba(0,0,0,0.5)',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 20,
              color: 'width',
              zIndex: 200,
              margin: 15,
              left: 0,
              bottom: 0,
              // borderColor:'blue',borderWidth:1,borderStyle:'solid',
            }}>
              <Text style={{
                color: 'white'
              }}>{this.state.pose}</Text>
            </View>
          }


          



          {/* <View style={{justifyContent:'center',alignContent:'center'}}> */}
          <Video
            // source={require('./Video/heart.mp4')}
            source={videoName[this.state.pose]}
            autoplay
            repeat={true}
            rate={1.0}
            volume={1.0}
            muted={true}
            resizeMode="cover"
            automaticallyWaitsToMinimizeStalling={false}
            // bufferConfig={{
            //   minBufferMs: 15000,
            //   maxBufferMs: 50000,
            //   bufferForPlaybackMs: 2500,
            //   bufferForPlaybackAfterRebufferMs: 5000
            // }}
            style={{
              width: width,
              height: width / 16 * 9,
              // borderColor:'red',borderWidth:1,borderStyle:'solid',
              // position: 'absolute',
            }}
          />
        </View>
      </View>
      // </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },


});