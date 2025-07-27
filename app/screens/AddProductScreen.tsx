import { initialProducts } from "@/data/products";
import { Ionicons } from '@expo/vector-icons';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

function AddProductScreen({ navigation, route }: any) {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickAndSaveImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      alert("Permission to access photo library is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (!result.canceled) {
      const localUri = result.assets[0].uri;
      const filename = localUri.split('/').pop();

      if (filename) {
        const destPath = FileSystem.documentDirectory + filename;
        try {
          await FileSystem.copyAsync({
            from: localUri,
            to: destPath,
          });
          setImageUri(destPath);
        } catch (error) {
          console.log("File copy error:", error);
        }
      }
    }
  };


  const [products, setProducts] = useState(initialProducts);
  const { onGoBack } = route.params || {};

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = () => {
    if (!name || !description || !price) {
      Alert.alert("All Fields Required!");
      return;
    }

    const newProduct = {
      id: Math.random().toString(),
      name,
      description,
      price: parseFloat(price),
      imageUrl: imageUri,
    };

    if (onGoBack) {
      onGoBack(newProduct);
    }

    navigation.goBack();
  };
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: Platform.OS === 'ios' ? 'deepskyblue' : 'black',
          paddingTop: Platform.OS === 'ios' ? 10 : StatusBar.currentHeight,
        },
      ]}
    >
      <View style={styles.childView}>
        <Text style={styles.title}>Add Product</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Price</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="e.g. 19.99"
          placeholderTextColor="#888"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Product description"
          placeholderTextColor="#888"
        />

        <Button title="Pick Image" onPress={pickAndSaveImage} />
        {imageUri && <View><Image style={styles.image} source={{ uri: imageUri }}></Image><Ionicons name="trash" style={styles.icon} size={25} onPress={() => setImageUri('')}></Ionicons></View>}
        <Text style={styles.preview}>Name Preview: {name}</Text>
        <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

export default AddProductScreen;

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 100,
    marginHorizontal: 'auto'
  },
  container: {
    flex: 1,
  },
  childView: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: 'springgreen',
    borderRadius: 6,
    padding: 10,
    color: '#fff',
  },
  preview: {
    marginTop: 20,
    color: '#fff',
    fontStyle: 'italic',
  },
  btn: {
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    marginVertical: 5
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 500
  },
  icon: {
    textAlign: 'center',
    marginTop: 20
  }
});
