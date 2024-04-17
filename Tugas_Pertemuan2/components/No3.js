import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

class No3 extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "space-around", marginTop : 180}}>
                <Splash />
                <Loading />
            </View>
        );
    }
}

const Splash = () => {

    return (
        <View>
            <Image source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/6/6c/LOGO_IBIK.png"
            }}
                style={{
                    width: 80,
                    height: 80,
                    marginLeft : 15,
                }} />
        </View>
    )
}

const Loading = () => {
    return (
        <View>
            <Text style={styles.bawah}>Loading ...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    bawah: {
        fontSize: 12,
        color: "white",
        textAlign : "center",
    }
})

export default No3;
