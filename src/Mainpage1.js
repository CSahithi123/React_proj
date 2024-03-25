import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const VillaCrud = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [sqft, setSqft] = useState('');
  const [occupancy, setOccupancy] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const [editname, setEditName] = useState('');
  const [editdescription, setEditDescription] = useState('');
  const [editprice, setEditPrice] = useState('');
  const [editsqft, setEditSqft] = useState('');
  const [editoccupancy, setEditOccupancy] = useState('');
  const [editimageUrl, setEditImageUrl] = useState('');
  const [editid, setEditId] = useState('');

  const villanumberdata = [
    { id: 1, villaName: 'Royal Villa', villa_Number: 107, specialDetails: "ghjhg" },
    { id: 2, villaName: 'Premium Pool Villa', villa_Number: 108, specialDetails: "ghjhg" },
    { id: 3, villaName: 'Pool Villa', villa_Number: 109, specialDetails: "ghjhg" }
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('http://localhost:5085/api/Villa')
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (id) => {
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
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this villa") === true) {
      axios.delete(`http://localhost:5085/api/Villa/${id}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success('Villa has been deleted successfully');
            getData();
          }
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  };

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
    };

    axios.put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success('Villa has been updated successfully');
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleSave = () => {
    const url = 'http://localhost:5085/api/Villa';
    const data = {
      "name": name,
      "description": description,
      "price": price,
      "sqft": sqft,
      "occupancy": occupancy,
      "imageUrl": imageUrl
    };

    axios.post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success('Villa has been added successfully');
      })
      .catch((error) => {
        toast.error(error);
      });
  };

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
  };

  return (
    <Fragment>
      <div id="VillasList">
        <div className="row px-lg-5 m-lg-4 m-sm-0 px-sm-0" style={{ bsGutterX: "0" }}>
          <div className="p-4 col-md-12 col-lg-12">
            {data && data.length > 0 ? data.map((item, index) => (
              <div className="row px-lg-5 m-lg-4 m-sm-0 px-sm-0" style={{ bsGutterX: "0" }}>
                <div className="row" style={{ borderRadius: "5px", border: "1px solid #aaa" }}>
                  <div className="col-4 p-2">
                    <img className="d-block w-100" style={{ borderRadius: "5px" }} src={(item.imageUrl.split("fakepath"))[1]} />
                  </div>
                  <div className="col-8">
                    <div className="d-flex justify-content-between">
                      <p>{item.name}</p>

                      <div className="pt-2">
                        <Link to={`/front/details/${item.id}`} class="btn btn-success bg-gradient border-0 form-control" >Details</Link>
                        {/* <a href="/home/details"
                                                        class="btn btn-primary bg-gradient border-0 form-control">
                                                        Details
                                                    </a> */}
                      </div>
                    </div>
                    <br />
                    <p className="card-text">{item.description}</p>
                  </div>
                  <div className="col-12">
                    <div className="row pb-3 pt-2">
                      <div className="col-4">
                        <a className="btn btn-success form-control btn-block" href="/Booking/FinalizeBooking?villaId=1&amp;checkInDate=18-01-2024&amp;nights=3"> Book </a>
                      </div>
                      <div className="col-4">
                        <span className="">Max Occupancy : {item.occupancy}</span><br />
                        <span className=" pt-1">Villa Size : {item.sqft} sqft</span><br />
                      </div>
                      <div className="col-4">
                        <span className="text-warning float-end font-weight-bold pt-1"
                          style={{ fontSize: "25px" }}> USD
                          <span style={{ borderBottom: "1px solid #ff6a00" }}> ₹ {item.price} </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            )
            )
              :
              "loading..."
            }
          </div>


        </div>
      </div>
    </Fragment>
  )
}

export default VillaCrud;
