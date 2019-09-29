import {Modal,View,StyleSheet,Text} from 'react-native';
import React, {Component} from 'react';
// import * as Progress from 'react-native-progress';
var Progress = require('react-native-progress');

export default class LoadingPage extends Component {
    /**初始化数据*/
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            indeterminate: true,
        };
    }

    /**初始*/
    componentDidMount() {
        this.animate();
    }
    animate(){
        var progress = 0;
        this.setState({ progress });
        setTimeout(() => {
            this.setState({ indeterminate: false });
            setInterval(() => {
                progress += Math.random()/7;
                if(progress > 0.98) {
                    progress = 0.99;
                }
                this.setState({ progress });
            }, 1000);
        }, 1500);
    }
    /**结束*/
    // componentWillUnmount() {
    // }

    render() {
        return <View style={styles.base_view}>
            
            <Text style={styles.welcome}>Progress Example</Text>
            <Progress.Bar
                style={styles.progress}
                progress={this.state.progress}
                indeterminate={this.state.indeterminate}
            />
            <View style={styles.circles}>
                <Progress.Circle
                    style={styles.progress}
                    progress={this.state.progress}
                    size={100} // 圆的直径
                    unfilledColor="rgba(255,255,255,0.5)" // 剩余进度的颜色
                    color={"#008aff"} // 颜色
                    thickness={6} // 内圆厚度
                    showsText={true}//显示进度比文字
                    textStyle={{fontSize:14,color:'red'}}//设置文字样式
                    // indeterminate={this.state.indeterminate}
                />
                <Progress.Pie
                    style={styles.progress}
                    progress={this.state.progress}
                    indeterminate={this.state.indeterminate}
                />
                <Progress.Circle
                    style={styles.progress}
                    progress={this.state.progress}
                    // indeterminate={this.state.indeterminate}
                    direction="counter-clockwise"
                />
            </View>
            <View style={styles.circles}>
                <Progress.CircleSnail
                    style={styles.progress}
                    animating={this.state.indeterminate}//设置动画
                    hidesWhenStopped={true}//设置当停止动画时移除
                />
                <Progress.CircleSnail
                    style={styles.progress}
                    color={[
                        '#F44336',
                        '#2196F3',
                        '#009688',
                    ]}
                />
            </View>

        </View>;
    }
}

var styles = StyleSheet.create({
    base_view: {},
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    circles: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    progress: {
        margin:10,
    }

});