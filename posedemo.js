import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	ToastAndroid,
	ScrollView,
	Image,
	ActivityIndicator

} from 'react-native';
import Video from 'react-native-video';


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const videoName = {
	heart: require('./Video/heart.mp4'),
	big_heart: require('./Video/big_heart.mp4'),
	namaste: require('./Video/namaste.mp4'),
	surfing: require('./Video/surfing.mp4'),
	muscleman: require('./Video/muscle_man.mp4'),
	singlemuscle: require('./Video/肌肉男單手demo.mp4'),
	ballet: require('./Video/ballet.mp4'),
	shoulder: require('./Video/shoulder.mp4'),
	crossleg: require('./Video/crossleg.mp4'),
	superman: require('./Video/superman.mp4'),
	armwave: require('./Video/波浪手.mp4'),

	// on: require('./img/flash_on.png'),
	// auto: require('./img/flash_auto.png'),

}

export default class PoseDemo extends Component {

	renderCard(pose, title) {
		var pose = pose;
		return (
			<TouchableOpacity onPress={() => this.props.navigation.navigate('heartdemo', { pose: pose })}
				style={{
					flexDirection: 'row',
					justifyContet: 'space-between',
					alignItems: 'flex-start'
				}}>
				<View style={[styles.buttonstyle]}>


					<ActivityIndicator style={{
						position: 'absolute',
					}} size="large" color="#999" />
					<Video
						// source={require('./Video/heart.mp4')}
						source={videoName[pose]}
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
							width: '102%',
							height: width / 16 * 9,
							// borderRadius: 20,
							// borderTopLeftRadius: 0,
							// borderTopRightRadius: 0,
							borderColor: '#000',
							borderWidth: 0,
							borderTopWidth: 1,
							borderStyle: 'solid',
							// position: 'absolute',
						}}
					/>
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
					}}>
						<Text style={{
							fontSize: 12,
							fontWeight: 'bold',
							color: 'white',
							// marginBottom: 10,
						}}>{title}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}

	render() {

		return (
			<View style={styles.container}>

				<View style={{ justifyContent: 'center', alignItems: 'center', margin: 15 }}>
					<Text style={{ fontSize: 22, fontWeight: 'bold', color: '#fff' }}>
						Pose Demo

					</Text>
					<Text></Text>
					
				</View>

				<ScrollView>
					{/* <TouchableOpacity onPress={() => this.props.navigation.navigate('heartdemo', { pose: 'heart' })}

						style={{
							flexDirection: 'row',
							justifyContet: 'space-between',
							alignItems: 'flex-start'
						}}>
						<View style={[styles.buttonstyle]}>
							<Text style={{
								fontSize: 15,
								fontWeight: 'bold',
								color: '#000',
								marginBottom: 10,
							}}>Heart</Text>

							<Video
								// source={require('./Video/heart.mp4')}
								source={require('./Video/heart.mp4')}
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
									width: '100%',
									height: width * 0.9 / 16 * 9,
									// borderRadius: 20,
									// borderTopLeftRadius: 0,
									// borderTopRightRadius: 0,
									// borderColor:'red',borderWidth:1,borderStyle:'solid',
									// position: 'absolute',
								}}
							/>
						</View>
					</TouchableOpacity> */}
					{this.renderCard('heart', 'Heart')}
					{this.renderCard('big_heart', 'Big Heart')}
					{this.renderCard('namaste', 'namaste 印度手')}
					{this.renderCard('muscleman', 'muscle man 雙手')}
					{this.renderCard('singlemuscle', 'muscle man 單手')}
					{this.renderCard('surfing', 'surfing 手平舉')}
					{this.renderCard('ballet', 'ballet hands 芭蕾手')}
					{this.renderCard('shoulder', 'touch your shoulder')}
					{this.renderCard('crossleg', 'cross your leg')}
					{this.renderCard('superman', 'superman')}
					{this.renderCard('armwave', '波浪手')}

					
					
					{/* <TouchableOpacity onPress={() => this.props.navigation.navigate('bigheartdemo')}
						style={{
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'flex-start'
						}}>
						<View style={[styles.buttonstyle]}>
							<Text style={{
								fontSize: 15,
								fontWeight: 'bold',
								color: '#999',
								marginBottom: 10,
							}}>波浪手</Text>
						</View>
					</TouchableOpacity> */}
				</ScrollView>
				{/* <Text style={{fontSize: 22,fontWeight: 'bold',color: '#999'}}>heart</Text> */}



			</View>

		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#02141c',
		padding: 10,
	},
	buttonstyle: {
		// flexDirection: 'row',
		flexDirection: 'row',
		justifyContent: 'center',
		// borderColor: '#5c82cf',
		borderColor: 'transparent',
		alignItems: 'center',
		// backgroundColor: '#F5FCFF',transparent
		backgroundColor: '#000',
		borderWidth: 1,
		borderRadius: 20,
		// padding: 10,
		// paddingTop: 10,
		// paddingHorizontal: 20,
		// paddingVertical: 20,
		marginBottom: 12,
		width: '100%',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		// margin: 30,
		overflow: 'hidden',

		// width: 150
	},

});