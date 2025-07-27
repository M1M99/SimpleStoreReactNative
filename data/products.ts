export type Product = {
    id: string,
    name: string,
    description: string,
    price: number,
    imageUrl: string
}

//imageler mockdatadir real olaraq add edildiyinde telefonun storagede saxlanilir . AddPoductscreene bax yeniki telefonumdaki file adresine access olmaz burdan sadece add prod etdiyinde file a access ala biliersen ios icaze vemez bura path verib oxuyum
export const initialProducts: Product[] = [
    {
        id: '1',
        name: 'Laptop',
        description: 'Gamer Laptop',
        imageUrl: 'https://m.media-amazon.com/images/I/71sgAr9atBS.jpg',
        price: 2190
    },
    {
        id: '2',
        name: 'Mouse',
        description: 'Wireless Mouse',
        // imageUrl: 'file:///path/to/mousewireless.jpg', // yeniki bele birseye icaze yoxdu yanliz ca add edtikde olar
        imageUrl: 'https://kontakt.az/media/catalog/product/cache/a404967cc40694dc557cd869288440a4/t/m/tm-dg-acs-1109-mo-0040.png',
        price: 45.99
    },
    {
        id: '3',
        name: 'Earbuds',
        description: 'Quality Earbuds',
        imageUrl: 'https://havitstore.pk/cdn/shop/products/TW947_1.jpg?v=1697194877',
        price: 79.99
    },
    {
        id: '4',
        name: 'Shoe',
        description: 'Classic Shoe',
        // imageUrl: 'file:///path/to/classicshoe.jpg',
        imageUrl: 'https://i5.walmartimages.com/asr/0255a903-9ded-42b2-89b4-8503290fc5c1.3c89cba4b595affb3aee98246c580a08.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
        price: 100
    },

]