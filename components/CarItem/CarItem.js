import React from 'react'
import { View, Text, ImageBackground } from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton/StyledButton'

export const CarItem = (props) => {

    const { name, tagline, image } = props.car;

    return (
        <View style={styles.carContainer}>

            <ImageBackground source={image} style={styles.image} />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{tagline}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton type="primary" content="custom order" onPress={() => console.warn("Custom Order was Pressed")} />
                <StyledButton type="secondary" content="existing inventory" onPress={() => console.warn("Existing Inventory was Pressed")} />
            </View>
        </View>
    )
}
