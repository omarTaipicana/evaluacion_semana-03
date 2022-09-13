import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Residents = ({ resident }) => {
    const [listResident, setListResident] = useState({})
    useEffect(() => {
        axios.get(resident)
            .then(res => setListResident(res.data))
    }, [])
    const colorCircle = () => {
        if (listResident.status === "Alive") {
            return "green"
        } else {
            if (listResident.status === "Dead") {
                return "red"
            } else {
                return "black"
            }
        }
    }
    console.log(colorCircle())
    // console.log(listResident.status)

    return (
        <li className='card'>
            <img className='card-img' src={listResident.image} alt="" />
            <div>
                <h3>{listResident.name}</h3>
                <h4>{listResident.status}{" "}<i className="fa fa-circle" style={{ color: colorCircle() }}></i>  </h4>
                <p className='info-resident'>origen</p>
                <h4>{listResident.origin?.name}</h4>
                <p className='info-resident'>episodes where appear</p>
                <h4>{listResident.episode?.length}</h4>
            </div>
        </li>
    );
};

export default Residents;