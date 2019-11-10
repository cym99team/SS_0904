import React, {
	Component
} from 'react';
import ImagePicker from 'react-native-image-picker';
// import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// var ImagePicker = require('react-native-image-picker');
import RNFetchBlob from 'rn-fetch-blob';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	PixelRatio,
	TouchableOpacity,
	Image,
	Modal,
	Dimensions,
	ToastAndroid,

} from 'react-native';
import * as Progress from 'react-native-progress';
// import Button from 'react-native-share/components/Button';
import Spinkiter from 'react-native-spinkit';
// import NetInfo from "@react-native-community/netinfo";


const visible = null;
const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' +
		'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' +
		'Shake or press menu button for dev menu',
});

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class pick extends React.Component {

	// componentDidMount() {
	// 	setTimeout(() => {
	// 		SplashScreen.hide();
	// 	}, 2000);
	// }
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			text: 'Uploading...',
			progress: 0,
			indeterminate: true,
			
		};
	}


	// state = {
	// 	progress: 0,
	// 	indeterminate: true,
	// };



	//選擇影片
	selectVideoTapped() {

		var state = {
			avatarSource: null,
			video: null,

		};

		const options = {
			title: 'Select a Video to Upload',
			cancelButtonTitle: 'cancel',
			takePhotoButtonTitle: 'Record',
			chooseFromLibraryButtonTitle: 'Choose from CameraRoll',
			mediaType: 'video',
			videoQuality: 'high',
			durationLimit: 15,

			storageOptions: {
				skipBackup: true,
				path: 'images'
			}
		};



		// if(NetInfo.isConnected==false){
		//     ToastAndroid.show('Please check your Internet status', ToastAndroid.SHORT);
		// }
		// else{
		ImagePicker.showImagePicker(options, (response) => {

			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled video picker');
			} else if (response.error) {
				console.log('Error: ', response.error);
			} else {
				// ToastAndroid.show('Upload Success!', ToastAndroid.SHORT);
				this.state.modalVisible = true;
				this.setState({
					video: response
				});



				let video = this.state.video;
				let target_url = 'http://140.115.87.141:9888/';
				let localUri = video.uri;
				let filename = localUri.split('/').pop() + '.mp4';

				console.log('\n\n\n');
				console.log(video);
				console.log('\n\n\n');
				// setInterval(() => {
				// 	this.setState({ text: 'Processing...' });
				//   }, 1000);
				// }


				// let formData = new FormData();

				// formData.append('file', {
				// 	name: filename,
				// 	type: 'video/mp4',
				// 	uri: video.uri,
				// 	// .replace("file://", ""),     
				// });

				RNFetchBlob.fetch('POST', target_url, {
				
					'Content-Type': 'multipart/form-data'
						
				},[
					{ 	
						name: 'file',
						filename: filename,
						type: 'video/mp4',
					 	data: RNFetchBlob.wrap(video.uri) 
					},
					// custom content type
				])

				// fetch(target_url, {
				// 	method: 'POST',
				// 	// body: JSON.stringify(formData),
				// 	body: formData,
				// 	headers: {
				// 		// "Accept": "application/json",    
				// 		'Content-Type': 'multipart/form-data'
				// 	}
				// })
					.then(response => {
						console.log("upload success\n", response);
						ToastAndroid.show('Upload Success!', ToastAndroid.SHORT);
						//alert("Upload success!");
						this.state.modalVisible = false;
						//console.log('888')
						return response.text()
					})
					.catch(error => {
						ToastAndroid.show('Upload Failed!', ToastAndroid.SHORT);
						console.log("\n\n\nupload error\n\n\n", error);
						//ToastAndroid.show('Upload Failed!', ToastAndroid.SHORT);
						this.state.modalVisible = false; //上傳失敗 loading畫面會關掉
						// this.props.navigation.navigate('PickVid');
					})
					.then(textData => {
						this.setState({
							name: textData
						})

						//download.setState({name: textData})
						console.log(textData);
						textname = textData;
						//this.setState({ success:true})
						//console.log(this.state.success);
						//alert("okkkkk");
						this.animate();
						this.props.navigation.navigate('Load')
					})
			}

		});
		// }

	}
	/**初始*/
	// componentDidMount() {
	// 	this.animate();
	// }	
	animate() {
		var progress = 0;
		this.setState({
			progress
		});
		setTimeout(() => {
			this.setState({
				indeterminate: false
			});
			setInterval(() => {
				progress += Math.random() / 10;
				if (progress > 0.99) {
					progress = 0.99;
				}
				this.setState({
					progress
				});
			}, 1500);
		}, 500);
	}
	/**结束*/
	componentWillUnmount() { }


	render() {
		return (

			<View style={styles.container}>

				<Modal visible={this.state.modalVisible}
					animationType="fade"
					transparent={true}>
					<View style={{
						flex: 1,
						backgroundColor: 'black',
						alignItems: 'center',
						justifyContent: 'center'
					}}>
					<Text style={{
							fontSize: 20,
							fontWeight: 'bold',
							color: "white"
					}}> Processing... </Text>
					<Text>  </Text>
					<Spinkiter isVisible={true} size={85} type={'WanderingCubes'} color={"#ffffff"} />
					{/* <Progress.Circle progress={this.state.progress}
							thickness={6}
							//  unfilledColor="rgba(255,255,255,0.5)" // 剩余进度的颜色
							unfilledColor="black"
							color={"#BBFFEE"}
							showsText={true}
							textStyle={{
								fontSize: 14,
								color: 'white'
							}}
							size={100}
					/> */}

					</View>
				</Modal>


				<Image style={{
					width: width * 1.3,
					height: height * 1.3,
					position: 'absolute',
					top: -height * 0.25,
				}}
					source={require('./Image/black.png')}
				/>

				<View style={{
					// flex: 1,
					flexDirection: 'column',
					justifyContent: 'space-around',
					alignItems: 'center',
					// borderColor: '#000',
					// borderWidth: 1,
					marginBottom: height * 0.15,

				}} >
					<Text style={{
						fontSize: 15,
						fontWeight: 'bold',
						color: '#fff',
						marginBottom: 20,
					}}> Welcome to Stunning! </Text>

					<TouchableOpacity onPress={() => this.selectVideoTapped()}
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center'
						}} >
						<View style={[styles.buttonstyle, {
							backgroundColor: '#fff'
						}]} >
							<Image style={{
								height: width * 0.05,
								width: width * 0.05,
								margin: 10,
								opacity: 0.5,
							}}
								source={require('./Image/video-camera_black.png')} />
							<Text style={{
								fontSize: 15,
								fontWeight: 'bold',
								color: '#999'
							}} > Choose a Video </Text>
						</View >
					</TouchableOpacity>

					<TouchableOpacity onPress={() => this.props.navigation.navigate('Demo')}
						style={{
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center'
						}}>
						<View style={
							[styles.buttonstyle]
						}>
							<Image style={{
								height: width * 0.05,
								width: width * 0.05,
								margin: 10
							}}
								source={require('./Image/dance.png')}
							/><Text style={{
								fontSize: 15,
								fontWeight: 'bold',
								color: '#fff'
							}}> Pose Demo </Text>
						</View >
					</TouchableOpacity>
				</View >
			</View>
		);
	}

}



const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		backgroundColor: '#ffffff'
	},

	logo: {
		flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
	},
	// avatarContainer: {
	//     borderColor: '#9B9B9B',
	//     borderWidth: 1 / PixelRatio.get(),
	//     justifyContent: 'center',
	//     alignItems: 'center'
	// },
	// avatar: {
	//     borderRadius: 50,
	//     width: 100,
	//     height: 100
	// },
	buttonstyle: {
		// flexDirection: 'row',
		flexDirection: 'row',
		justifyContent: 'center',
		// borderColor: '#5c82cf',
		borderColor: '#fff',
		alignItems: 'center',
		// backgroundColor: '#F5FCFF',
		backgroundColor: 'transparent',
		borderWidth: 1,
		borderRadius: 999,
		padding: 10,
		paddingHorizontal: 20,
		marginBottom: 12,
		width: '60%',
		// margin: 30,
		// height: 80,
		// width: 150
	}

});