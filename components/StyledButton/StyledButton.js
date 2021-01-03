import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

export default function StyledButton(props) {

    const { type, content, onPress } = props;

    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const color = type === 'primary' ? 'white' : '#171A20'

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor }]}
                onPress={onPress}>
                <Text style={[styles.text, { color }]}>{content}</Text>
            </Pressable>
        </View>
    )
}
