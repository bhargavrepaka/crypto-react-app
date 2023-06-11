import React, {useState,useEffect} from "react";
import axios from "axios";
import { Routes,Route } from "react-router-dom";
import coinDataFile from "./coinDataFile";

import Coins from "./components/Coins";
import Navbar from "./components/Navbar";
import Coin from './routes/Coin'

const url ="https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"

function App() {

  const [coins,setCoins]=useState(["initial"]);

  useEffect(()=>{
    console.log("Mounted")
    const getCoins= async ()=>{
      try {
        const response= await axios.get(url)  //  coinDataFile()
        setCoins(response.data)
        console.log("coins value is ",coins)
    }
      catch(err){
        console.log(err)
      }
    }
    getCoins()
  },[])


  return (
    <>
    <Navbar> </Navbar>
    <Routes>
      <Route path="/" element={<Coins coins={coins}></Coins>}/>
      <Route path="/coin" element={<Coin/>}>
        <Route path=":coinId" element={<Coin data={coins}/>}/>
      </Route>
    </Routes>
    
    </>
  );
}

export default App;
