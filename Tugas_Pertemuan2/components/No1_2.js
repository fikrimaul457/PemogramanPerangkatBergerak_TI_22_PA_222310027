import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

class No1_2 extends Component {
    render() {
        return (
            <View>
                <HistoryOfBicycle />
                <Gambar />
            </View>
        );
    }
}

const HistoryOfBicycle = () => {
    return (
        <View>
            <Text style={{
                fontSize: 20,
                fontWeight: "bold",
                backgroundColor: "brown",
                color: "#fff",
                textAlign: "center",
                textDecorationLine: "underline",
                padding: 10,
                width: 200
            }}>
                History Of Bicycle
            </Text>
            <Text style={styles.paragrapf}>A bicycle, also called a pedal cycle, bike, push-bike or cycle, is a human-powered or motor-powered assisted, pedal-driven, single-track vehicle, having two wheels attached to a frame, one behind the other, A bicycle rider is called a cyclist, or bicyclist. </Text>
        </View>
    )
}

const Gambar = () => {
    return (
        <View>
            <Image source={{
                uri: "https://img.freepik.com/free-vector/business-avatar-template_23-2147502917.jpg?t=st=1711635081~exp=1711638681~hmac=25b8c3481bd4157d9987276052629e45eb4b7214d44c71018ca51c66794d8b28&w=740"
            }}
                style={{ width: 120, height: 120, marginLeft: 40 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    paragrapf: {
        fontSize: 18,
        textAlign: "justify",
        borderWidth: 2,
        borderColor: "red",
        width: 200,
        color: "black",
        backgroundColor: "white"
    }
})

export default No1_2;
