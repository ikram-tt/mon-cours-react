import React from "react";
import './App.css';
import Header from "./Composant/header";
import Footer from "./Composant/footer";
import DashedList from "./Composant/DashedList";
import TableList from "./Composant/TableList";
import ListLivre from "./Composant/ListLivre";
function App() {
  return (
    <div className="App">
      <Header />  
      <DashedList />
      <TableList /> 
      <br></br>
      <br></br>
      <ListLivre />
      <Footer /> 
    </div>
  );
}

export default App;
