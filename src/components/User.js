import React from 'react'
import { Text } from 'react-native';

export const User = ({item}) => {
  const {name, email, phone, date, comments} = item;
    return (
        <Text>{name}</Text>
    )
}
