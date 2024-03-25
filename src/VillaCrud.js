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
        <div className="w-100 card border-0 p-4">
          <Header/>
    <div className="card-header bg-success bg-gradient ml-0 py-3">
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="text-white py-2">Villa List</h2>
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
        
        <Col><input type="text" className="form-control" placeholder="Enter Villa Name" value={name} onChange={(e)=> setName(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Description" value={description} onChange={(e)=> setDescription(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Price" value={price} onChange={(e)=> setPrice(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Sqft" value={sqft} onChange={(e)=> setSqft(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Occupancy" value={occupancy} onChange={(e)=> setOccupancy(e.target.value)} /></Col>
        <Col><input type="file" className="form-control" placeholder="Enter image url" value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} /></Col>
       
      
        <Col><button className="btn btn-success"  onClick={()=> handleSave()}>Create</button></Col>
      </Row>
    </Container>
    <br></br>
            
        <Table striped bordered hover>
      <thead>
        <tr>
         
          <th>Villa Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Sqft</th>
          <th>Occupancy</th>
          <th>ImageUrl</th>
         
          <th></th>
        </tr>
      </thead>
      <tbody>

        {
            data && data.length>0 ?
            data.map((item,index)=>{
                return(
          <tr key={index}>
          
          
          <td>{item.name}</td>
          <td>{item.description}</td>
          <td>{item.price}</td>
          <td>{item.sqft}</td>
          <td>{item.occupancy}</td>
          <td>{item.imageUrl.split("fakepath")[1] }</td>
          
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
          <Modal.Title>Modify / Update Villa</Modal.Title>
          
        </Modal.Header>
        <Modal.Body>

        <Row>
        
        <Col><input type="text" className="form-control" placeholder="Enter Villa Name" value={editname} onChange={(e)=> setEditName(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Description" value={editdescription} onChange={(e)=> setEditDescription(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Price" value={editprice} onChange={(e)=> setEditPrice(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Sqft" value={editsqft} onChange={(e)=> setEditSqft(e.target.value)} /></Col>
        <Col><input type="text" className="form-control" placeholder="Enter Occupancy" value={editoccupancy} onChange={(e)=> setEditOccupancy(e.target.value)} /></Col>
        <Col><input type="file" className="form-control" placeholder="Enter image url"  onChange={(e)=> setEditImageUrl(e.target.value)} /></Col>
        
        
      </Row>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </div>
    )
}
 
export default VillaCrud;
