import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Voice from '@react-native-voice/voice';

const ChatbotScreen = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    // Clean up Voice listeners when component unmounts
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
        params: {
          query: query,
          apiKey: '51f59e3dbc904dc09112d1af65ba22fa', // Replace with your API key
          number: 1,
          instructionsRequired: true,
          addRecipeInformation: true,
        },
      });
      setRecipes(response.data.results);
      await AsyncStorage.setItem('recentRecipes', JSON.stringify(response.data.results));
    } catch (error) {
      console.error(error);
    }
  };

  const handleVoiceInput = () => {
    Voice.start('en-US');
    setIsListening(true);
  };

  const handleStopVoiceInput = () => {
    Voice.stop();
    setIsListening(false);
  };

  const handleClearSearch = () => {
    setQuery('');
    setRecipes([]);
  };

  Voice.onSpeechResults = (e) => {
    setQuery(e.value[0]);
  };

  Voice.onSpeechEnd = () => {
    setIsListening(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Ask for a recipe..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.searchButton]} onPress={fetchRecipes}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.voiceButton]} onPress={handleVoiceInput}>
          <Text style={styles.buttonText}>Voice Input</Text>
        </TouchableOpacity>
        {isListening && (
          <TouchableOpacity style={[styles.button, styles.stopButton]} onPress={handleStopVoiceInput}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={[styles.button, styles.clearButton]} onPress={handleClearSearch}>
          <Text style={styles.buttonText}>Clear Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item?.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.recipeCard}>
            <Text style={styles.recipeTitle}>{item?.title}</Text>
            <Text style={styles.sectionTitle}>Ingredients:</Text>
            {item?.analyzedInstructions[0]?.steps.flatMap(step => step.ingredients.map(ingredient => ingredient.name)).map((ingredient, index) => (
              <Text key={index} style={styles.ingredientText}>{ingredient}</Text>
            ))}
            <Text style={styles.sectionTitle}>Please Follow Below Recipe:</Text>
            {item?.analyzedInstructions[0]?.steps.map((step, index) => (
              <View key={index} style={styles.stepContainer}>
                <Text style={styles.stepTitle}>Step {step.number}:</Text>
                <Text style={styles.stepText}>{step.step}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchButton: {
    backgroundColor: '#6200EE',
    marginRight: 10,
  },
  voiceButton: {
    backgroundColor: '#03DAC6',
  },
  stopButton: {
    backgroundColor: '#FF3B30',
    marginLeft: 10,
  },
  clearButton: {
    backgroundColor: '#9E9E9E',
    marginLeft: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  recipeCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  ingredientText: {
    fontSize: 14,
    marginLeft: 10,
    marginBottom: 3,
  },
  stepContainer: {
    marginTop: 10,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stepText: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 5,
  },
});

export default ChatbotScreen;
