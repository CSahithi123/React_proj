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
import Header from './Header';
 
const AmenityCrud = () => {
 
 
    const [show, setShow] = useState(false);
 
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
 
    const[id, setId] = useState('')
    const[name, setName] = useState('')
    const[villaName, setVillaName] = useState('')
    const[description, setDescription] = useState('')
   
   
 
    const[editid, setEditId] = useState('');
    const[editname, setEditName] = useState('')
    const[editvillaName, setEditVillaName] = useState('')
    const[editdescription, setEditDescription] = useState('')
   
    const amenitydata = [
        {
            id:1,
            name: 'pool Villa',
            villaName: 'Royal Villa'
        },
        {
            id:2,
            name: 'poo Villa',
            villaName: 'Roya Villa'
        },
        {
            id:3,
            name: 'po Villa',
            villaName: 'Roy Villa'
        }
    ]
 
    const [data, setData] = useState([]);
 
    useEffect(()=> {
        getData();
    },[])
 
    const getData = () =>{
        axios.get('http://localhost:5085/api/Amenity')
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
        axios.get(`http://localhost:5085/api/Amenity/${id}`)
        .then((result) => {
            setEditName(result.data.name);
            setEditVillaName(result.data.villaName);
            setEditDescription(result.data.description);
            setEditId(id);
        })
        .catch((error) => {
        console.log(error)
        })
    }
 
    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this villa") == true)
        {
           axios.delete(`http://localhost:5085/api/Amenity/${id}`)
           .then((result)=>{
            if(result.status === 200)
            {
                toast.success('Amenity has been deleted successfully');
                getData();
            }
           })
           .catch((error)=>{
            toast.error(error);
           })
        }
    }
 
    const handleUpdate =() =>{
     const url = `http://localhost:5085/api/Amenity/${editid}`;
     const data = {
        "id":editid,
        "name": editname,
        "villaName":editvillaName,
        "description":editdescription
     }
     axios.put(url, data)
     .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success('Amenity has been updated successfully');
     }).catch((error)=>{
        toast.error(error);
     })
    }
 
    const handleSave =() =>{
        const url = `http://localhost:5085/api/Amenity`;
        const data = {
           
       
        "name": name,
        "villaName": villaName,
        "description": description
       
        }
 
        axios.post(url, data)
        .then((result) => {
            getData();
            clear();
            toast.success('Amenity has been added successfully');
        }).catch((error)=>{
            toast.error(error);
        })
 
    }
 
    const clear = () =>{
 
        setId('');
        setName('');
        setVillaName('');
        setDescription('');
       
        setEditId('');
        setEditName('');
        setEditVillaName('');
        setEditDescription('');
       
    }
 
    return(
        <div className="w-100 card border-0 p-4">
          <Header/>
    <div className="card-header bg-success bg-gradient ml-0 py-3">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="text-white py-2">Amenity List</h2>
        </div>
      </div>
    </div>
    <div className="card-body border p-4">
      <div className="row pb-3">
        <div className="col-6 offset-6 text-end">
         
        </div>
      </div>
      <ToastContainer />
      <Container>
       
      <Row>
       
        <Col><input type="text" className="form-control" placeholder="Enter Id" value={id} onChange={(e)=> setId(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e)=> setName(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Villa Name" value={villaName} onChange={(e)=> setVillaName(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter description" value={description} onChange={(e)=> setDescription(e.target.value)} /></Col>
     
        <Col><button className="btn btn-success" onClick={()=> handleSave()}>Create</button></Col>
      </Row>
    </Container>
    <br></br>
           
        <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Id</th>
          <th>Name</th>
          <th>Villa Name</th>
          <th>Description</th>
         
          <th></th>
        </tr>
      </thead>
      <tbody>
 
        {
            data && data.length>0 ?
            data.map((item,index)=>{
                return(
          <tr key={index}>
         
         
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.villaName}</td>
          <td>{item.description}</td>
         
          <td>
                <div className="w-75 btn-group" role="group">
               
                    <button className="btn btn-success" onClick={()=> handleEdit(item.id)}>Edit</button> &emsp;
                 
                 
                  <button className="btn btn-danger" onClick={()=> handleDelete(item.id)}>Delete</button>
                 
                </div>
              </td>
        </tr>
 
                )
            })
            :
            'Loading...'
        }
       
       
      </tbody>
    </Table>
 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Update Amenity</Modal.Title>
         
        </Modal.Header>
        <Modal.Body>
 
        <Row>
       
        <Col><input type="text" className="form-control" placeholder="Enter Id" value={editid} onChange={(e)=> setEditId(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Name" value={editname} onChange={(e)=> setEditName(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Sqft" value={editvillaName} onChange={(e)=> setEditVillaName(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Description" value={editdescription} onChange={(e)=> setEditDescription(e.target.value)} /></Col>
   
       
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
    </div>
    </div>
    )
}
 
export default AmenityCrud;
 