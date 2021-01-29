import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultDetails from './ResultDetails'
import { withNavigation } from "react-navigation";
const ResultList = ({ results, title, navigation }) => {
    if (!results.length) {
        return null
    }
    return <View>
        <Text style={Style.titleStyle}> {title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
                        <ResultDetails result={item} />
                    </TouchableOpacity>
                )
            }}
        />
    </View>
}
const Style = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
    },
});

export default withNavigation(ResultList);