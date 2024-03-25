import React, { useState, useEffect, Fragment, Link } from 'react';
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


    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [sqft, setSqft] = useState('')
    const [occupancy, setOccupancy] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const [editname, setEditName] = useState('')
    const [editdescription, setEditDescription] = useState('')
    const [editprice, setEditPrice] = useState('')
    const [editsqft, setEditSqft] = useState('')
    const [editoccupancy, setEditOccupancy] = useState('')
    const [editimageUrl, setEditImageUrl] = useState('')



    const [editid, setEditId] = useState('');

    const villanumberdata = [
        {
            id: 1,
            villaName: 'Royal Villa',
            villa_Number: 107,
            specialDetails: "ghjhg"
        },
        {
            id: 2,
            villaName: 'Premium Pool Villa',

            villa_Number: 108,
            specialDetails: "ghjhg"
        },
        {
            id: 3,
            villaName: 'Pool Villa',
            villa_Number: 109,
            specialDetails: "ghjhg"

        }
    ]

    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = () => {
        axios.get('http://localhost:5085/api/Villa')
            .then((result) => {
                setData(result.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleEdit = (id) => {
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

    const handleDelete = (id) => {
        if (window.confirm("Are you sure to delete this villa") == true) {
            axios.delete(`http://localhost:5085/api/Villa/${id}`)
                .then((result) => {
                    if (result.status === 200) {
                        toast.success('Villa has been deleted successfully');
                        getData();
                    }
                })
                .catch((error) => {
                    toast.error(error);
                })
        }
    }

    const handleUpdate = () => {
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
            }).catch((error) => {
                toast.error(error);
            })
    }

    const handleSave = () => {
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
            }).catch((error) => {
                toast.error(error);
            })

    }

    const clear = () => {

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




    return (
        <Fragment>
            {
            data && data.length > 0 ?
                data.map((item, index) => {
                    return (

                        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Update Villa</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>

        <Row>
            
        <div class="modal fade" id="exampleModal-1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl" style={{ border: "1px solid #aaa", borderRadius: "7px" }}>
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-3 text-success" id="exampleModalLabel">Villa Details</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body m-0">


                                        <div class="row">
                                            <div class="col-12 col-md-5">
                                                <img src="\images\VillaImage\c1886505-9aef-4e78-95a4-fbbbbd0c0dc4.jpg" style={{ borderRadius: "10px", width: "100%" }} />
                                            </div>
                                            <div class="col-12 col-md-7">
                                                <div class="row p-2">
                                                    <div class="col-12">
                                                        <p class="card-title text-warning" style={{ fontSize: "xx-large" }}>{item.name}</p>
                                                        <p class="card-text" style={{ fontSize: "large" }}>
                                                            {item.description}
                                                        </p>
                                                        <p class="h5 text-white">Villa Amenities</p>
                                                        <ul>
                                                            <li>Private Pool</li>
                                                            <li>Microwave</li>
                                                            <li>Private Balcony</li>
                                                            <li>1 king bed and 1 sofa bed</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="row col-12">
                                                    <span class="text-end p-0 pt-3 m-0">
                                                        <span class="float-right">Max Occupancy : {item.occupancy} adults </span><br></br>
                                                        <span class="float-right pt-1">Villa Size : {item.sqft} sqft</span><br></br>
                                                        <p class="text-warning font-weight-bold pt-1">
                                                            USD
                                                            <span style={"#ff6a00"}>
                                                                ₹ {item.price} / night
                                                            </span>
                                                        </p>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" class="btn btn-outline-warning" formaction="/Home/GeneratePPTExport/1">
                                            <i class="bi bi-file-earmark-ppt"></i> Download Villa PPT
                                        </button>
                                        <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Close</button>
                                    </div>

                                </div>
                            </div>
                        </div>
        
      </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

                        
                )
                

            })
            :
            "Loading.."
        }
        </Fragment>

    )  
        
}
export default VillaCrud;
