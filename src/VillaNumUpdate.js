import React, { useState, useEffect, Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function VillaNumUpdate(){
   
const [show, setShow] = useState(false);
const [data, setData] = useState([]);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const navigate = useNavigate();


const handleSubmit = (e) =>
{
        e.preventDefault();
}





useEffect(()=> {
    getData();
},[])

const getData = () =>{
    axios.get('http://localhost:5085/api/VillaNum')
    .then((result)=>{
        setData(result.data)
    })
    .catch((error)=>{
        console.log(error)
    })
}


const [villaName, setVillaName] = useState('')
const [villaNumber, setVillaNumber] = useState('')
const [specialDetails, setSpecialDetails] = useState('')


const[editvillaName, setEditVillaName] = useState('')
const[editvillaNumber, setEditVillaNumber] = useState('')
const[editspecialDetails, setEditSpecialDetails] = useState('')
const[editid, setEditId] = useState('');

const clear = () => {
    setVillaName('');
    setVillaNumber('');
    setSpecialDetails('');

}


const handleEdit =(id) =>{
    //alert(id);
    handleShow();
    axios.get(`http://localhost:5085/api/VillaNum/${id}`)
    .then((result) => {
        setEditVillaName(result.data.villaName);
        setEditVillaNumber(result.data.villaNumber);
        setEditSpecialDetails(result.data.specialDetails);
      
        setEditId(id);
    })
    .catch((error) => {
    console.log(error)
    })
}

const handleUpdate =() =>{
    const url = `http://localhost:5085/api/VillaNum/${editid}`;
    const data = {
       "id": editid,
       "villaName": editvillaName,
       "villaNumber": editvillaNumber,
       "specialDetails": editspecialDetails
     
    }
    axios.put(url, data)
    .then((result) => {
       handleClose();
       getData();
       clear();
       navigate('/VillaNumberCrud');
       toast.success('VillaNumber has been updated successfully');
    }).catch((error)=>{
       toast.error(error);
    })
   }

  
            
 return(           

<div class="w-100 card border-0 p-4">
    <div class="card-header bg-success bg-gradient ml-0 py-3">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white py-2">Update Villa Number</h2>
            </div>

        </div>

    </div>
    <div class="card-body border p-4">
        <form method="post" class="row" novalidate="novalidate" onSubmit={handleSubmit}>

            <div class="p-3">
                <div class="form-floating py-1 col-12">
                    <select className="form-control"  value={editvillaName} onChange={(e)=> setEditVillaName(e.target.value)} >
                    <option disabled="" selected="">--Select Villa--</option>

                    <option selected="selected" value="1">Royal Villa</option>
                    <option>Premium Pool Villa</option>
                    <option>Luxury Pool Villa</option>
                     </select>
                    <label class="ms-2" for="VillaId">VillaId</label>
              
                </div>



                <div class="form-floating py-1 col-12">
                    
                <input type="text" className="form-control" value={editvillaNumber} onChange={(e)=> setEditVillaNumber(e.target.value)} />
                <label class="ms-2" for="VillaNumber">VillaNumber</label>

                </div>
                


                <div class="form-floating py-1 col-12">
                <input type="text" className="form-control"  value={editspecialDetails} onChange={(e)=> setEditSpecialDetails(e.target.value)} />  
                <label class="ms-2" for="SpecialDetails">SpecialDetails</label>
                </div>





                <div class="row pt-2">
                    <div class="col-6 col-md-3">
                        <button type="submit" class="btn btn-success w-100" onClick={() => handleUpdate()}>
                            <i class="bi bi-check-circle"></i> Update
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

export default VillaNumUpdate;
