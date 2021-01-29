import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermsubmit }) => {
    return <View style={Style.background}>
        <Feather style={Style.iconStyle} name="search" size={30} />
        <TextInput
            style={Style.textStyle}
            placeholder="Search"
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            onEndEditing={onTermsubmit()}
            autoCapitalize='none'
            autoCorrect={false}
        />
    </View>
};

const Style = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom:10
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        marginHorizontal: 10,
        alignSelf: 'center',
    },
});

export default SearchBar;