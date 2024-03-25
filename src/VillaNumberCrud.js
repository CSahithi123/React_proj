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
 
const VillaNumberCrud = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const[villaName, setVillaName] = useState('')
    const[villaNo, setVillaNo] = useState('')
    const[specialDetails, setSpecialDetails] = useState('')
  
    

   
    const[editvillaName, setEditVillaName] = useState('')
    const[editvillaNo, setEditVillaNo] = useState('')
    const[editspecialDetails, setEditSpecialDetails] = useState('')
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
        axios.get('http://localhost:5085/api/VillaNumber')
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
        axios.get(`http://localhost:5085/api/VillaNumber/${id}`)
        .then((result) => {
            setEditVillaName(result.data.villaName);
            setEditVillaNo(result.data.villaNo);
            setEditSpecialDetails(result.data.specialDetails);
          
            setEditId(id);
        })
        .catch((error) => {
        console.log(error)
        })
    }

    const handleDelete = (id) =>{
        if(window.confirm("Are you sure to delete this villa") == true)
        {
           axios.delete(`http://localhost:5085/api/VillaNumber/${id}`)
           .then((result)=>{
            if(result.status === 200)
            {
                toast.success('VillaNumber has been deleted successfully');
                getData();
            }
           })
           .catch((error)=>{
            toast.error(error);
           })
        }
    }

    const handleUpdate =() =>{
     const url = `http://localhost:5085/api/VillaNumber/${editid}`;
     const data = {
        "id": editid,
        "villaName": editvillaName,
        "villaNo": editvillaNo,
        "specialDetails": editspecialDetails
      
     }
     axios.put(url, data)
     .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success('VillaNumber has been updated successfully');
     }).catch((error)=>{
        toast.error(error);
     })
    }

    const handleSave =() =>{
        const url = 'http://localhost:5085/api/VillaNumber';
        const data = {
            
        "villaName": villaName,
        "villaNo": villaNo,
        "specialDetails": specialDetails
        }
        axios.post(url, data)
        .then((result) => {
            getData();
            clear();
            toast.success('VillaNumber has been added successfully');
        }).catch((error)=>{
            toast.error(error);
        })

    }

    const clear = () =>{
        setVillaName('');
        setVillaNo('');
        setSpecialDetails('');
        
        setEditVillaName('');
        setEditVillaNo('');
        setEditSpecialDetails('');
       
        setEditId('');
    }

    return(
        <div className="w-100 card border-0 p-4">
          <Header />
    <div className="card-header bg-success bg-gradient ml-0 py-3">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="text-white py-2">Villa Number List</h2>
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
        
        <Col><input type="text" className="form-control" placeholder="Enter Villa Name" value={villaName} onChange={(e)=> setVillaName(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Villa Number" value={villaNo} onChange={(e)=> setVillaNo(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Special Details" value={specialDetails} onChange={(e)=> setSpecialDetails(e.target.value)} /></Col>
      
        <Col><button className="btn btn-success"  onClick={()=> handleSave()}>Create</button></Col>
      </Row>
    </Container>
    <br></br>
            
        <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Villa Name</th>
          <th>Villa Number</th>
          <th>Special Details</th>
         
          <th></th>
        </tr>
      </thead>
      <tbody>

        {
            data && data.length>0 ?
            data.map((item,index)=>{
                return(
          <tr key={index}>
          
          
          <td>{item.villaName}</td>
          <td>{item.villaNo}</td>
          <td>{item.specialDetails}</td>
          
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
          <Modal.Title>Modify / Update Villa Number</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>

        <Row>
        
        <Col><input type="text" className="form-control" placeholder="Enter Villa Name" value={editvillaName} onChange={(e)=> setEditVillaName(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Villa Number" value={editvillaNo} onChange={(e)=> setEditVillaNo(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Special Details" value={editspecialDetails} onChange={(e)=> setEditSpecialDetails(e.target.value)} /></Col>
        
        
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
 
export default VillaNumberCrud;
