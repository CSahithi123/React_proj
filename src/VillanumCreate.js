import React, { useState, useEffect, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function VillanumCreate() {
    const handleSubmit = (e) =>
    {
        e.preventDefault();
    }

    const [villaName, setVillaName] = useState('')
    const [villaNumber, setVillaNumber] = useState('')
    const [specialDetails, setSpecialDetails] = useState('')

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:5085/api/VillaNum')
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleSave = () => {
        const url = 'http://localhost:5085/api/VillaNum';
        const data = {

            "villaName": villaName,
            "villaNumber": villaNumber,
            "specialDetails": specialDetails

        }

        axios.post(url, data)
            .then((result) => {
                getData();
                clear();
                navigate('/VillaNumberCrud');
                toast.success('VillaNumber has been added successfully');
            }).catch((error) => {
                toast.error(error);
            })

    }
    const clear = () => {
        setVillaName('');
        setVillaNumber('');
        setSpecialDetails('');

    }

    return (


        <div class="w-100 card border-0 p-4">
            <div class="card-header bg-success bg-gradient ml-0 py-3">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="text-white py-2">Create Villa Number</h2>
                    </div>

                </div>

            </div>
            <div class="card-body border p-4">
                <form method="post" class="row" novalidate="novalidate" onSubmit={handleSubmit}> 
                    <div class="p-3">

                    <div class="form-floating py-1 col-12"> 
                    <select className="form-control" value={villaName} onChange={(e)=> setVillaName(e.target.value)}>
                    <option>--Select Villa--</option>

                    <option>Royal Villa</option>
                    <option>Premium Pool Villa</option>
                    <option>Luxury Pool Villa</option>
                     </select>
                     <label for="VillaId" class="ms-2">VillaId</label>
                     </div> 
                      

                        <div class="form-floating py-1 col-12">
                        <input type="text" className="form-control" value={villaNumber} onChange={(e)=> setVillaNumber(e.target.value)} />  
                        <label for="VillaNumber" class="ms-2">VillaNumber</label>
                        </div>

                        <div class="form-floating py-1 col-12">
                        <input type="text" className="form-control" value={specialDetails} onChange={(e)=> setSpecialDetails(e.target.value)} />
                        <label for="SpecialDetails" class="ms-2">SpecialDetails</label>
                        </div>

                        <div class="row pt-2">
                            <div class="col-6 col-md-3">
                                <button type="submit" class="btn btn-success w-100" onClick={() => handleSave()}>
                                    <i class="bi bi-check-circle"></i> Create
                                </button>
                            </div>
                            <div class="col-6 col-md-3">
                                <a class="btn btn-secondary w-100" href="/VillaNumberCrud">
                                    <i class="bi bi-check-circle"></i> Cancel
                                </a>
                            </div>
                        </div>


                    </div>


                </form>
            </div>
        </div>

    );
};

export default VillanumCreate;

