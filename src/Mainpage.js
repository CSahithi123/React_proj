import React, {useState, useEffect, Fragment, Link} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
 
const VillaCrud = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[price, setPrice] = useState('')
    const[sqft, setSqft] = useState('')
    const[occupancy, setOccupancy] = useState('')
    const[imageUrl, setImageUrl] = useState('')

    const[editname, setEditName] = useState('')
    const[editdescription, setEditDescription] = useState('')
    const[editprice, setEditPrice] = useState('')
    const[editsqft, setEditSqft] = useState('')
    const[editoccupancy, setEditOccupancy] = useState('')
    const[editimageUrl, setEditImageUrl] = useState('')

   
    
    const[editid, setEditId] = useState('');

    const villanumberdata = [
        {
            id:1,
            villaName: 'Royal Villa',
            villa_Number: 107,
            specialDetails:"ghjhg"
        },
        {
            id:2,
            villaName: 'Premium Pool Villa',
            
            villa_Number: 108,
            specialDetails:"ghjhg"
        },
        {
            id:3,
            villaName: 'Pool Villa',
            villa_Number: 109,
            specialDetails:"ghjhg"
            
        }
    ]

    const [data, setData] = useState([]);

    useEffect(()=> {
        getData();
    },[])

    const getData = () =>{
        axios.get('http://localhost:5085/api/Villa')
        .then((result)=>{
            setData(result.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const handleEdit =(id) =>{
        //alert(id);
        handleShow();
        axios.get(`http://localhost:5085/api/Villa/${id}`)
        .then((result) => {
           
          setEditName(result.data.name);
          setEditDescription(result.data.description);
          setEditPrice(result.data.price);
          setEditSqft(result.data.sqft);
          setEditOccupancy(result.data.occupancy);
          setEditImageUrl(result.data.imageUrl);


          setEditId(id);
        })
        .catch((error) => {
        console.log(error)
        })
    }

    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this villa") == true)
        {
           axios.delete(`http://localhost:5085/api/Villa/${id}`)
           .then((result)=>{
            if(result.status === 200)
            {
                toast.success('Villa has been deleted successfully');
                getData();
            }
           })
           .catch((error)=>{
            toast.error(error);
           })
        }
    }

    const handleUpdate =() =>{
     const url = `http://localhost:5085/api/Villa/${editid}`;
     const data = {
        "id": editid,
        "name": editname,
        "description": editdescription,
        "price": editprice,
        "sqft": editsqft,
        "occupancy": editoccupancy,
        "imageUrl": editimageUrl

     }
     axios.put(url, data)
     .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success('Villa has been updated successfully');
     }).catch((error)=>{
        toast.error(error);
     })
    }

    const handleSave =() =>{
        const url = 'http://localhost:5085/api/Villa';
        const data = {

        "name": name,
        "description": description,
        "price": price,
        "sqft": sqft,
        "occupancy": occupancy,
        "imageUrl": imageUrl
        
        }
        axios.post(url, data)
        .then((result) => {
            getData();
            clear();
            toast.success('Villa has been added successfully');
        }).catch((error)=>{
            toast.error(error);
        })

    }

    const clear = () =>{

       setName('');
       setDescription('');
       setPrice('');
       setSqft('');
       setOccupancy('');
       setImageUrl(''); 

       setEditName('');
       setEditDescription('');
       setEditPrice('');
       setEditSqft('');
       setEditOccupancy('');
       setEditImageUrl('');

        setEditId('');
    }

    return(
        <Fragment>
            <div class="row pb-3 m-4">
                {
                    data && data.length > 0 ?
                        data.map((item, index) => {
                            return (
                                <div class="col-lg-3 col-sm-6">
                                    <div class="row p-2">
                                        <div class="col-12 p-1">
                                            <div class="card border-0 p-3 shadow  border-top border-5 rounded">
                                                {/* @if(product.ProductImages!=null && product.ProductImages.Count()) */}
                                               
                                                <img src={(item.imageUrl.split("fakepath"))[1]} class="card-img-top rounded" />
 
                                                {/*<img src={item.imageUrl} class="card-img-top rounded" /> */}
 
                                                {/* else {
                                                <img src="https://placehold.co/500x600/png" class="card-img-top rounded" />
                                            } */}
 
                                                <div class="card-body pb-0">
                                                    <div class="pl-1">
                                                        <p class="card-title h5 text-dark opacity-75 text-uppercase text-center">{item.name}</p>
                                                        <p class="card-title text-warning text-center">by <b>{item.description}</b></p>
                                                    </div>
                                                    <div class="pl-1">
                                                        <p class="text-dark text-opacity-75 text-center mb-0">
                                                            List Price:
                                                            <span class="text-decoration-line-through">
                                                                <i class="fa fa-inr"></i> {item.price}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div class="pl-1">
                                                        <p class="text-dark text-opacity-75 text-center">As low as :
                                                            <span>
                                                                <i class="fa fa-inr"></i> {item.sqft}
                                                            </span>
                                                        </p>
                                                    </div>
                                                    <div class="pl-1">
                                                        <p class="text-dark text-opacity-75 text-center">As low as :
                                                            <span>
                                                                <i class="fa fa-inr"></i> {item.occupancy}
                                                            </span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <div>
                                                <Link to={`/home/details/${item.id}`} class="btn btn-primary bg-gradient border-0 form-control" >Details</Link>
                                                    {/* <a href="/home/details"
                                                        class="btn btn-primary bg-gradient border-0 form-control">
                                                        Details
                                                    </a> */}
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        :
                            "loading..."
                    }
            </div>




            

            
        </Fragment>
    )
}
 
export default VillaCrud;
