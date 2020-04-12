import React from "react";
import { TabNav } from "./navigations/TabNav";
import { AuthStackNav } from "./navigations/AuthStackNav";
import * as firebase from "firebase";
import firebaseConfig from "./setting/firebase.js";

firebase.initializeApp(firebaseConfig);

export default function App() {
  return <AuthStackNav /> /* <TabNav />*/;
}
