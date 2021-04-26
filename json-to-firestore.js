import firebase from "firebase/app";
import "firebase/firestore";
import {firebaseConfig} from './src/firebaseConfig';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var items = [
  {
    category: "watches",
    description: "Varius nibh, in auctor metus euismod a.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pictureUrl: "./images/placeholder-images-product-5_large.png",
    price: 53,
    stock: 0,
    title: "Nullam ultricies",
  },
  {
    category: "glasses",
    description: "Donec vel ipsum ac libero rhoncus volutpat.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pictureUrl: "./images/placeholder-images-product-3_large.png",
    price: 59,
    stock: 22,
    title: "Morbi vel",
  },
  {
    category: "shoes",
    description: "Orci vitae sapien dapibus, ut condimentum odio varius.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pictureUrl: "./images/placeholder-images-product-2_large.png",
    price: 41,
    stock: 5,
    title: "Etiam lacinia",
  },
  {
    category: "bags",
    description:
      "Praesent convallis tortor ligula, eget viverra felis dictum quis.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pictureUrl: "./images/placeholder-images-product-1_large.png",
    price: 97,
    stock: 3,
    title: "Morbi tincidunt ",
  },
  {
    category: "bags",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pictureUrl: "./images/placeholder-images-product-1_large.png",
    price: 31,
    stock: 12,
    title: "Lorem ipsum",
  },
  {
    category: "lamps",
    description: "Quis ante fermentum tempus.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pictureUrl: "./images/placeholder-images-product-6_large.png",
    price: 58,
    stock: 1,
    title: "Cras at velit",
  },
  {
    category: "hats",
    description: "Gravida lorem quis aliquet. Nullam ultricies varius nibh.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pictureUrl: "./images/placeholder-images-product-4_large.png",
    price: 26,
    stock: 43,
    title: "Aliquam porta",
  },
  {
    category: "shoes",
    description: "Rhoncus mi a condimentum. Etiam at est dolor.",
    fullDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    pictureUrl: "./images/placeholder-images-product-2_large.png",
    price: 93,
    stock: 200,
    title: "Donec pulvinar tellus",
  },
];

var categories = [
  {
    name: "bags",
    pictureUrl: "./images/placeholder-images-collection-1_large.png",
  },
  {
    name: "glasses",
    pictureUrl: "./images/placeholder-images-collection-3_large.webp",
  },
  {
    name: "hats",
    pictureUrl: "./images/placeholder-images-collection-4_large.webp",
  },
  {
    name: "lamps",
    pictureUrl: "./images/placeholder-images-collection-6_large.webp",
  },
  {
    name: "shoes",
    pictureUrl: "./images/placeholder-images-collection-2_large.png",
  },
  {
    name: "watches",
    pictureUrl: "./images/placeholder-images-collection-5_large.webp",
  },
];

items.forEach(function (obj) {
  db.collection("items")
    .add({
      category: obj.category,
      description: obj.description,
      fullDescription: obj.fullDescription,
      pictureUrl: obj.pictureUrl,
      price: obj.price,
      stock: obj.stock,
      title: obj.title,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});

categories.forEach(function (obj) {
  db.collection("categories")
    .add({
      name: obj.name,
      pictureUrl: obj.pictureUrl,
    })
    .then(function (docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});
