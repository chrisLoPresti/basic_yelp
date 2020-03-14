import React, { useEffect } from 'react';
import { Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import useResult from '../hooks/useResult';

const ResultsDetailScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const [getResult, result, errorMessage] = useResult();

  useEffect(() => {
    getResult(id);
  }, []);

  return (
    result && (
      <ScrollView>
        {errorMessage.length > 0 ? (
          <Text>{errorMessage}</Text>
        ) : (
          <FlatList
            data={result.photos}
            keyExtractor={photo => photo}
            renderItem={({ item }) => (
              <Image style={styles.imageStyle} source={{ uri: item }} />
            )}
          />
        )}
      </ScrollView>
    )
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    alignSelf: 'center',
    marginVertical: 10
  }
});

export default ResultsDetailScreen;
