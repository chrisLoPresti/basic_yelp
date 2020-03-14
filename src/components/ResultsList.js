import React from 'react';
import { withNavigation } from 'react-navigation';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({ results, title, navigation: { navigate } }) => {
  return (
    results.length > 0 && (
      <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={results}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigate('Results', { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);
