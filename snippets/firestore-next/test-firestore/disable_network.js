// This snippet file was generated by processing the source file:
// ./firestore-next/test.firestore.js
//
// To make edits to the snippets in this file, please edit the source

// [START modular_disable_network]
import { disableNetwork } from "firebase/firestore"; 

await disableNetwork(db);
console.log("Network disabled!");
// Do offline actions
// [START_EXCLUDE]
console.log("Network disabled!");
// [END_EXCLUDE]
// [END modular_disable_network]