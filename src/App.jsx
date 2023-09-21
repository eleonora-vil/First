import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Item from "./components/Item";
function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Body />
      <Item />
      <Item />
      <Footer />
    </div>
  );
}

export default App;
