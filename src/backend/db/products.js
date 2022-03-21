import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Beautiful Minds",
    author: "Saksham",
    price: 899,
    categoryName: "Best Sellers",
    imgSrc: "../../images/layer2.png",
    type: "LAYERING ART"
  },
  {
    _id: uuid(),
    title: "Sweet Rocket Bouquet",
    author: "Saksham",
    price: 1299,
    categoryName: "Best Sellers",
    imgSrc: "../../images/quill2.jpg",
    type: "QUILLING"
  },
  {
    _id: uuid(),
    title: "God's Eye",
    author: "Saksham",
    price: 2999,
    categoryName: "Best Sellers",
    imgSrc: "../../images/layer1.jpg",
    type: "LAYERING ART"
  },
  {
    _id: uuid(),
    title: "The Forest Dear",
    author: "Saksham",
    price: 399,
    categoryName: "Best Sellers",
    imgSrc: "../../images/sh2.jpg",
    type: "SHADOW BOX"
  },

  //Collectionws

  {
    _id: uuid(),
    title: "The BlueBerry Bouquet",
    author: "Saksham",
    price: 2999,
    categoryName: "Our Collections",
    imgSrc: "../../images/quill2.jpg",
    type: "QUILLING"
  },
  {
    _id: uuid(),
    title: "Couple Swans",
    author: "Saksham",
    price: 2599,
    categoryName: "Our Collections",
    imgSrc: "../../images/3dswan.jpg",
    type: "3D ORIGAMI"
  },
  {
    _id: uuid(),
    title: "Forest Deer",
    author: "Saksham",
    price: 2999,
    categoryName: "Our Collections",
    imgSrc: "../../images/sh1.jpg",
    type: "SHADOW BOX"
  },
  {
    _id: uuid(),
    title: "The Red Forest",
    author: "Saksham",
    price: 699,
    categoryName: "Our Collections",
    imgSrc: "../../images/quill1.jpg",
    type: "QUILLING"
  },  
  {
    _id: uuid(),
    title: "Forest Rabbit",
    author: "Saksham",
    price: 499,
    categoryName: "Our Collections",
    imgSrc: "../../images/rabb.jpg",
    type: "PAPER CUTTING"
  },
  {
    _id: uuid(),
    title: "The Cunning Fox",
    author: "Saksham",
    price: 299,
    categoryName: "Our Collections",
    imgSrc: "../../images/fox.jpg",
    type: "ORIGAMI"
  },
  {
    _id: uuid(),
    title: "Royal Peacock",
    author: "Saksham",
    price: 1299,
    categoryName: "Our Collections",
    imgSrc: "../../images/quill3.jpg",
    type: "QUILLING"
  },

  //ProductCart

  {
    _id: uuid(),
    title: "Beautiful Minds",
    author: "Saksham",
    price: 899,
    categoryName: "Product Cart",
    imgSrc: "../../images/layer2.png",
    type: "LAYERING ART",
    inStock: false,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "God's Eye",
    author: "Saksham",
    price: 2999,
    categoryName: "Product Cart",
    imgSrc: "../../images/layer1.jpg",
    type: "LAYERING ART",
    inStock: true,
    fastDelivery: true,
    onSale: false
  },
  {
    _id: uuid(),
    title: "The Forest Dear",
    author: "Saksham",
    price: 399,
    categoryName: "Product Cart",
    imgSrc: "../../images/sh2.jpg",
    type: "SHADOW BOX",
    inStock: true,
    fastDelivery: false,
    onSale: true
  },
  {
    _id: uuid(),
    title: "The BlueBerry Bouquet",
    author: "Saksham",
    price: 2999,
    categoryName: "Product Cart",
    imgSrc: "../../images/quill2.jpg",
    type: "QUILLING",
    inStock: true,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "Couple Swans",
    author: "Saksham",
    price: 2599,
    categoryName: "Product Cart",
    imgSrc: "../../images/3dswan.jpg",
    type: "3D ORIGAMI",
    inStock: true,
    fastDelivery: true,
    onSale: false
  },
  {
    _id: uuid(),
    title: "Forest Deer",
    author: "Saksham",
    price: 2999,
    categoryName: "Product Cart",
    imgSrc: "../../images/sh1.jpg",
    type: "SHADOW BOX",
    inStock: true,
    fastDelivery: false,
    onSale: true
  },
  {
    _id: uuid(),
    title: "The Red Forest",
    author: "Saksham",
    price: 699,
    categoryName: "Product Cart",
    imgSrc: "../../images/quill1.jpg",
    type: "QUILLING",
    inStock: true,
    fastDelivery: false,
    onSale: false
  },  
  {
    _id: uuid(),
    title: "Forest Rabbit",
    author: "Saksham",
    price: 499,
    categoryName: "Product Cart",
    imgSrc: "../../images/rabb.jpg",
    type: "PAPER CUTTING",
    inStock: true,
    fastDelivery: true,
    onSale: false
  },
  {
    _id: uuid(),
    title: "The Cunning Fox",
    author: "Saksham",
    price: 299,
    categoryName: "Product Cart",
    imgSrc: "../../images/fox1.jpg",
    type: "ORIGAMI",
    inStock: true,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "Royal Peacock",
    author: "Saksham",
    price: 1299,
    categoryName: "Product Cart",
    imgSrc: "../../images/quill301.jpg",
    type: "QUILLING",
    inStock: false,
    fastDelivery: false,
    onSale: true
  },
  {
    _id: uuid(),
    title: "Beautiful Minds",
    author: "Saksham",
    price: 899,
    categoryName: "Product Cart",
    imgSrc: "../../images/layer2.png",
    type: "LAYERING ART",
    inStock: true,
    fastDelivery: true,
    onSale: false
  },
  {
    _id: uuid(),
    title: "God's Eye",
    author: "Saksham",
    price: 2999,
    categoryName: "Product Cart",
    imgSrc: "../../images/layer1.jpg",
    type: "LAYERING ART",
    inStock: true,
    fastDelivery: false,
    onSale: true
  },
  {
    _id: uuid(),
    title: "The Forest Dear",
    author: "Saksham",
    price: 399,
    categoryName: "Product Cart",
    imgSrc: "../../images/sh2.jpg",
    type: "SHADOW BOX",
    inStock: true,
    fastDelivery: false,
    onSale: true
  },
  {
    _id: uuid(),
    title: "The BlueBerry Bouquet",
    author: "Saksham",
    price: 2999,
    categoryName: "Product Cart",
    imgSrc: "../../images/quill2.jpg",
    type: "QUILLING",
    inStock: true,
    fastDelivery: true,
    onSale: true
  },
  {
    _id: uuid(),
    title: "Couple Swans",
    author: "Saksham",
    price: 2599,
    categoryName: "Product Cart",
    imgSrc: "../../images/3dswan.jpg",
    type: "3D ORIGAMI",
    inStock: true,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "Forest Deer",
    author: "Saksham",
    price: 2999,
    categoryName: "Product Cart",
    imgSrc: "../../images/sh1.jpg",
    type: "SHADOW BOX",
    inStock: true,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "The Red Forest",
    author: "Saksham",
    price: 699,
    categoryName: "Product Cart",
    imgSrc: "../../images/quill1.jpg",
    type: "QUILLING",
    inStock: false,
    fastDelivery: false,
    onSale: false
  },  
  {
    _id: uuid(),
    title: "Forest Rabbit",
    author: "Saksham",
    price: 499,
    categoryName: "Product Cart",
    imgSrc: "../../images/rabb.jpg",
    type: "PAPER CUTTING",
    inStock: true,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "The Cunning Fox",
    author: "Saksham",
    price: 299,
    categoryName: "Product Cart",
    imgSrc: "../../images/fox1.jpg",
    type: "ORIGAMI",
    inStock: true,
    fastDelivery: true,
    onSale: false
  },
  {
    _id: uuid(),
    title: "Royal Peacock",
    author: "Saksham",
    price: 1299,
    categoryName: "Product Cart",
    imgSrc: "../../images/quill301.jpg",
    type: "QUILLING",
    inStock: true,
    fastDelivery: false,
    onSale: true
  },
  {
    _id: uuid(),
    title: "Beautiful Minds",
    author: "Saksham",
    price: 899,
    categoryName: "Product Cart",
    imgSrc: "../../images/layer2.png",
    type: "LAYERING ART",
    inStock: false,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "God's Eye",
    author: "Saksham",
    price: 2999,
    categoryName: "Product Cart",
    imgSrc: "../../images/layer1.jpg",
    type: "LAYERING ART",
    inStock: true,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "The Forest Dear",
    author: "Saksham",
    price: 399,
    categoryName: "Product Cart",
    imgSrc: "../../images/sh2.jpg",
    type: "SHADOW BOX",
    inStock: true,
    fastDelivery: true,
    onSale: false
  },
  {
    _id: uuid(),
    title: "The BlueBerry Bouquet",
    author: "Saksham",
    price: 2999,
    categoryName: "Product Cart",
    imgSrc: "../../images/quill2.jpg",
    type: "QUILLING",
    inStock: false,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "Couple Swans",
    author: "Saksham",
    price: 2599,
    categoryName: "Product Cart",
    imgSrc: "../../images/3dswan.jpg",
    type: "3D ORIGAMI",
    inStock: true,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "Forest Deer",
    author: "Saksham",
    price: 2999,
    categoryName: "Product Cart",
    imgSrc: "../../images/sh1.jpg",
    type: "SHADOW BOX",
    inStock: true,
    fastDelivery: true,
    onSale: false
  },
  {
    _id: uuid(),
    title: "The Red Forest",
    author: "Saksham",
    price: 699,
    categoryName: "Product Cart",
    imgSrc: "../../images/quill1.jpg",
    type: "QUILLING",
    inStock: false,
    fastDelivery: true,
    onSale: false
  },  
  {
    _id: uuid(),
    title: "Forest Rabbit",
    author: "Saksham",
    price: 499,
    categoryName: "Product Cart",
    imgSrc: "../../images/rabb.jpg",
    type: "PAPER CUTTING",
    inStock: true,
    fastDelivery: false,
    onSale: false
  },
  {
    _id: uuid(),
    title: "The Cunning Fox",
    author: "Saksham",
    price: 299,
    categoryName: "Product Cart",
    imgSrc: "../../images/fox1.jpg",
    type: "ORIGAMI",
    inStock: false,
    fastDelivery: true,
    onSale: false
  },
  {
    _id: uuid(),
    title: "Royal Peacock",
    author: "Saksham",
    price: 1299,
    categoryName: "Product Cart",
    imgSrc: "../../images/quill301.jpg",
    type: "QUILLING",
    inStock: true,
    fastDelivery: false,
    onSale: false
  },
];

