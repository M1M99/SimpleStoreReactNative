import { useRoute } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

function ProductDetailsScreen() {
    const route = useRoute();
    const { products }: any = route.params;
    return (
        <View style={{ backgroundColor: '#000', flex: 1 }}>
            <Image style={styles.image} source={{ uri: products.imageUrl }}></Image>
            <View style={styles.containerText}>
                <Text style={styles.title}>Title : {products.name}</Text>
                <Text style={styles.text}>{products.description}</Text>
                <Text style={styles.text}>{products.price}$</Text>
            </View>
        </View>
    )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 260,
        padding: 15,
        borderRadius: 5
    },
    containerText: {
        alignItems:'center',
        borderLeftWidth: 2,
        borderColor: 'red',
        borderStyle: 'solid',
        marginTop:12,
    },
    title: {
        fontSize: 23,
        fontWeight: 600,
        color: '#fff',
    },
    text: {
        fontSize: 20,
        color: 'deepskyblue',
    }
})
