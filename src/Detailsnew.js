import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
 
const VillaCrudDetails = () => {

    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[price, setPrice] = useState('')
    const[sqft, setSqft] = useState('')
    const[occupancy, setOccupancy] = useState('')
    const[imageUrl, setImageUrl] = useState('')

    const [data, setData] = useState([]);

    const {id} = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
    };


    useEffect(()=> {
        getData();
    },[id])

    const getData = () =>{
        axios.get(`http://localhost:5085/api/Villa/${id}`)
        .then((result)=>{
            setData(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    return (
        <Fragment>
            <Header/>
            <form onSubmit={handleSubmit}>
                {
                    data &&
                        [data].map((item, index) => {
                            return (
                                <>    
                                    <div className="card shadow border-0 mt-4 mb-4" style={{ width: "80%", left: "10%" }}>
                                    <div className="card-header bg-secondary bg-gradient text-light py-4">
                                        <div className="row">
                                            <div className="col-12 text-center">
                                                <h3 className="text-white text-uppercase">{item.name}</h3>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="py-3">
                                            <div className="row">
                                                <div className="col-6 col-md-2 offset-lg-1 pb-1">
                                                <Link to={`/front`} className="btn btn-outline-success bg-gradient mb-3 fw-semibold btn-sm text-uppercase" ><small>Back to home</small></Link>
 
                                                    {/* <button type="button" className="btn btn-outline-primary bg-gradient mb-5 fw-semibold btn-sm text-uppercase">
                                                        <a href="/home"><small>Back to home</small></a>
                                                    </button> */}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12 col-lg-3 offset-lg-1 text-center mb-3">
                                                    <img src={item.imageUrl && item.imageUrl.split("fakepath")[1]} width="100%" className="rounded" />
 
                                                </div>
                                                <div className="col-12 col-lg-6 offset-lg-1">
                                                  
                                                    <div className="row pl-2 my-3">Description :
                                                        <p className="text-secondary lh-sm">{item.description}</p>
                                                    </div>
                                                    
                                                    <div className="row ps-0">
                                                        <h6 className="text-dark ">Occupancy: {item.occupancy}</h6>
                                                    </div>
                                                    <div className="row ps-0">
                                                        <h6 className="text-dark ">Price: {item.price}</h6>
                                                    </div>
                                                    <div className="row ps-0">
                                                        <h6 className="text-dark ">Sqft : {item.sqft}</h6>
                                                    </div>
                                                    
                                                    
                                                    <div className="row">
                                                        <div className="col-12 col-md-6 pb-1">
                                                            <button type="submit" className="btn btn-success bg-gradient w-100 py-2 text-uppercase fw-semibold">
                                                               <a>Book Villa</a>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                }
 
            </form >
 
        </Fragment>
 
    );
};
 
export default VillaCrudDetails;