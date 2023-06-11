import React, { useState } from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import { Link } from 'react-router-dom'

export default function Coins(props) {
 
  const [query, setQuery]=useState('') 

  function onSearch(e){
    setQuery(e.target.value)
  }
  function getFilteredCoins(query,allcoins){
    if(!query){
      return allcoins
    }
    return allcoins.filter((singlecoin)=>{
      return singlecoin.id.includes(query)
    })
  }
  const filteredCoins= getFilteredCoins(query,props.coins)
  console.log(filteredCoins)
  return ( <>
  <div className="container">
    <div className="search">
      <input 
      className='searchbar' 
      type="text" 
      value={query}
      placeholder='Search here...'
      onChange={onSearch}
      />
    </div>
  </div>
   <div className='container'>
        <div>
            <div className="heading">
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Mkt Cap</p>
            </div>

            {filteredCoins.map((coin)=>{
                return  <Link to={"/coin/"+coin.id} key={coin.id}>
                     <CoinItem coins={coin} key={coin.id}></CoinItem>
                  </Link> 
            })}

        </div>
    </div>
  </>
   
  )
}
