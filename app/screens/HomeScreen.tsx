import { initialProducts } from "@/data/products";
import { useState } from "react";
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation, route }: any) {
    const [products, setProducts] = useState(initialProducts);


    const navigationHandler = (item: any) => {
        navigation.navigate('ProductDetails', { products: item });
    };
    const onAddProduct = (newProduct: any) => {
        setProducts(prev => [...prev, newProduct]);
    };

    const goToAddProduct = () => {
        navigation.navigate('AddProduct', { onGoBack: onAddProduct });
    };
    // const [products, setProducts] = useState(initialProducts);
    return <SafeAreaView style={styles.bodyArea}>
        <Text style={styles.headerText}>STORE</Text>
        <FlatList data={products} keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
                <SafeAreaView style={styles.mainContainer}>
                    <TouchableOpacity style={styles.container} onPress={() => navigationHandler(item)}>
                        <View style={styles.productView}>
                            <Image style={styles.image} source={{ uri: item.imageUrl }}></Image>
                            <Text style={[styles.textTitle]}>
                                {item.name}
                            </Text>
                            <Text>
                                {item.price}$
                            </Text>
                        </View>
                    </TouchableOpacity>
                </SafeAreaView>
            }
            numColumns={2}
        />
        {/* <Add /> */}
        <TouchableOpacity style={styles.btn} onPress={() => goToAddProduct()}>
            <Text style={styles.btnText}>Add New Product</Text>
        </TouchableOpacity>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bodyArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 30,
        marginVertical: 10,
        paddingVertical: 10,
        height: 160,
        borderWidth: 1.5,
        borderColor: 'deepskyblue',
        borderStyle: 'solid',
        borderRadius: 6,
        marginHorizontal: 10,
        alignItems: 'center',
        gap: 5
    },
    productView: {
        alignItems: 'center',
        fontSize: 16,
        marginBottom: 4,
    },
    textTitle: {
        fontWeight: 600,
    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 10,
        alignSelf: 'center',
        color: 'deepskyblue',
    },
    btn: {
        padding: 10,
        backgroundColor: 'springgreen',
        width: '50%',
        borderRadius: 5,
        marginHorizontal: 'auto',
        marginVertical: 20
    },
    btnText: {
        textAlign: 'center',
        color: '#000',
        fontWeight: 500
    },
    image: {
        width: 120,
        height: 90,
        borderRadius: 8,
        marginBottom: 10,
    },
})