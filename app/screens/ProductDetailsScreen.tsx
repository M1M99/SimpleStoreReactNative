import { useState } from "react";
import {
    Button,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from "react-native";

function ProductDetailsScreen({ route, navigation }: any) {
    const { product, onUpdate } = route.params;
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(String(product.price));
    const [description, setDescription] = useState(product.description);

    const handleSave = () => {
        const updatedProduct = {
            ...product,
            name,
            price: parseFloat(price),
            description,
        };
        onUpdate(updatedProduct);
        navigation.goBack();
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            style={{ flex: 1 }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
                    <ScrollView contentContainerStyle={{ padding: 20 }} keyboardShouldPersistTaps="handled">
                        <Image style={styles.image} source={{ uri: product.imageUrl }} />
                        <View style={styles.containerText}>
                            <Text style={styles.title}>Title : {product.name}</Text>
                            <Text style={styles.text}>{product.description}</Text>
                            <Text style={styles.text}>{product.price}$</Text>
                        </View>

                        <TextInput
                            placeholder="Name"
                            value={name}
                            onChangeText={setName}
                            style={styles.input}
                            placeholderTextColor="gray"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Price"
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                            placeholderTextColor="gray"
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Description"
                            value={description}
                            onChangeText={setDescription}
                            multiline
                            placeholderTextColor="gray"
                        />
                        <Button title="Save" onPress={handleSave} />
                    </ScrollView>
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 260,
        borderRadius: 5,
    },
    containerText: {
        alignItems: "center",
        borderLeftWidth: 2,
        borderColor: "red",
        marginTop: 12,
    },
    title: {
        fontSize: 23,
        fontWeight: "600",
        color: "#fff",
    },
    text: {
        fontSize: 20,
        color: "deepskyblue",
    },
    input: {
        color: "red",
        padding: 10,
        borderColor: "gray",
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 3,
        marginHorizontal: 0,
    },
});
