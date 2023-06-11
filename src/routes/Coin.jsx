import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DOMpurify from "isomorphic-dompurify"
import './Coin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'



export default function Coin() {
    const [coin, setCoin] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()
    const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(url)
                setCoin(response.data)
                setLoading(false)
            }
            catch (err) {
                console.log(err)
            }
        }
        getData()
    },[])
    return (
        <div>
            <div className="coin-container">
                {loading ? (
                    <h1>Loading...</h1>

                ) : (<>

                    <div className="content">
                        <div className="heading-items">
                            <Link to={"/"}><button className='backbtn'>Back</button></Link>
                            <h1>{coin.id.toUpperCase()}</h1>
                        </div>   
                    </div>
                    <div className="content">
                        <div className="rank">
                            <span className="rank-btn">Rank #{coin.market_cap_rank}</span>
                        </div>
                        <div className="info">
                            <div className="coin-heading">
                                {/* {coin.image ? <img src={coin.image.small} alt="not asdfasdf" /> : null } */}
                                <img src={coin.image.small} alt="not asdfasdf" />
                                <p>{coin.name}</p>
                                <p>{coin.symbol}</p>
                            </div>
                            <div className="coin-price">
                                <h1>₹{coin.market_data.current_price.inr.toLocaleString()}</h1>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                <table>
                    <thead>
                        <tr>
                            <th>1h</th>
                            <th>24hr</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>30d</th>
                            <th>1yr</th>
                        </tr>
                    </thead>

                    <tbody> 
                        <tr>
                            <td>{coin.market_data.price_change_percentage_1h_in_currency.inr.toFixed(2)}%</td>
                            <td>{coin.market_data.price_change_percentage_24h_in_currency.inr.toFixed(2)}% </td>
                            <td>{coin.market_data.price_change_percentage_7d_in_currency.inr.toFixed(2)}%</td>
                            <td>{coin.market_data.price_change_percentage_14d_in_currency.inr.toFixed(2)}% </td>
                            <td>{coin.market_data.price_change_percentage_30d_in_currency.inr.toFixed(2)}% </td>
                            <td>{coin.market_data.price_change_percentage_1y_in_currency.inr.toFixed(2)}%</td>
                        </tr>
                    </tbody> 
                </table>
            </div> 
            <div className="content">
                <div className="stats">
                    <div className="left">
                        <div className="row">
                            <h4>24 Hour Low</h4>
                            <p>{coin.market_data.low_24h.inr}</p>
                        </div>
                        <div className="row">
                            <h4>24 Hour High</h4>
                            <p>{coin.market_data.high_24h.inr}</p>
                        </div>

                    </div>
                    <div className="right">
                        <div className="row">
                            <h4>Market Cap</h4>
                            <p>{coin.market_data.market_cap.inr}</p>
                        </div>
                        <div className="row">
                            <h4>Circulating Supply</h4>
                            <p>{coin.market_data.circulating_supply}</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="content">
                <div className="about">
                    <h3>About</h3>
                    <p dangerouslySetInnerHTML={{__html:DOMpurify.sanitize(coin.description.en)}}></p>
                </div>
            </div>
            




                </>
                )
                }


            </div>
        </div>
    )
}
