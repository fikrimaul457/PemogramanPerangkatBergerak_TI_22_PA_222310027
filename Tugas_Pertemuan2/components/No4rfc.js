import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const No4rfc = () => {
    const [myBio, setMyBio] = useState({
        identity: {
            npm: 222310001,
            fistName: "Fikri",
            lastName: "Maulana",
        },
        educations: [
            { id: 1, school: "SDN Cilendek 1 Kota Bogor" },
            { id: 2, school: "SMP Pesat Kota Bogor" },
            { id: 3, school: "SMK Informatika Pesat Kota Bogor" },
            { id: 4, school: "Institute Bisnis dan Informatika Kesatuan" }
        ],
        mobile_phone: "085695602553",
        email: "222310027@student.ibik.ac.id",
        gender: 'M'
    });

    const instituteSchool = myBio.educations.find(education => education.school === "Institute Bisnis dan Informatika Kesatuan");

    return (
        <View>
            <Text style={{ textAlign: "center", color: "white", fontSize: 20, marginBottom: 30 }}>MyBio RFC</Text>
            <Text style={styles.style}>NPM : {myBio.identity.npm}</Text>
            <Text style={styles.style}>Fullname : {myBio.identity.fistName} {myBio.identity.lastName}</Text>
            <Text style={styles.style}>University :  {instituteSchool ? instituteSchool.school : ''}</Text>
            <Text style={styles.style}>Email : {myBio.email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    style: {
        color: "white",
        textAlign: "justify",
        lineHeight: 30
    }
});

export default No4rfc;
