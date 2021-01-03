import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native';
import cars from './cars';
import { CarItem } from '../CarItem/CarItem';
import styles from './styles'

export default function CarsList() {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'normal'}
                snapToInterval={Dimensions.get('window').height}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}
