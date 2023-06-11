import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import { Link } from 'react-router-dom'

export default function Coins(props) {
  return (
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

            {props.coins.map((coin)=>{
                return  <Link to={"/coin/"+coin.id} key={coin.id}>
                     <CoinItem coins={coin} key={coin.id}></CoinItem>
                  </Link> 
            })}

        </div>
    </div>
  )
}
