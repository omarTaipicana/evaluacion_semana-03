import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Residentes from './Residents';
import image from "../assets/images/header2.jfif"
// import "bootstrap/dist/css/bootstrap.min.css"
// import Autosuggest from "react-autosuggest"

const Entregable = () => {
    const [url, setUrl] = useState({})
    const [input, setInput] = useState("")

    useEffect(() => {
        const randomId = Math.floor(Math.random() * 126)
        axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
            .then(res => setUrl(res.data))
    }, [])

    const searchId = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${input}`)
            .then(res => setUrl(res.data))
    }

    console.log(url)
    return (
        <div>
            <img className='header-img' src={image} alt="" />
            <div className='info'>
                <h1>{url.name}</h1>
                <div className='divInfo'>
                    <p className='list-info'><b>type:</b>{" "}{url.type}</p>
                    <p className='list-info'><b>dimension:</b>{" "}{url.dimension}</p>
                    <p className='list-info'><b>population:</b>{" "}{url.residents?.length}</p>
                </div>
            </div>
            <div className='search'>
                <input type="text"
                    placeholder="Write the name of the location"
                    value={input}
                    onChange={e => setInput(e.target.value)} />
                <button
                    onClick={searchId} >
                    search
                </button>
            </div>
            <h2>Residents</h2>
            <div>
                <div className='content-card'>
                    {
                        url.residents?.map(resident => (
                            <Residentes resident={resident} key={resident} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Entregable;