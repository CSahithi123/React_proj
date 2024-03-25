import React, { useState } from "react";
 
function VillaCreate() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [sqft, setSqft] = useState("");
  const [occupancy, setOccupancy] = useState("");
  const [image, setImage] = useState(null);
 
  const [nameError, setNameError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [sqftError, setSqftError] = useState("");
  const [occupancyError, setOccupancyError] = useState("");
  const [imageError, setImageError] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    // Validation logic
    if (!name) {
      setNameError("Name is required");
      
    } else {
      setNameError("");
    }
 
    if (!description) {
      setDescriptionError("Description is required");
     
    } else {
      setDescriptionError("");
    }
 
    if (!price || isNaN(price) || price < 10 || price > 10000) {
      setPriceError("Price Per Night must be a number between 10 and 10000");
      
    } else {
      setPriceError("");
    }
 
    if (!sqft || isNaN(sqft)) {
      setSqftError("Sqft must be a number");
      
    } else {
      setSqftError("");
    }
 
    if (!occupancy || isNaN(occupancy) || occupancy < 1 || occupancy > 10) {
      setOccupancyError("Occupancy must be a number between 1 and 10");
      
    } else {
      setOccupancyError("");
    }
 
    
    setName("");
    setDescription("");
    setPrice("");
    setSqft("");
    setOccupancy("");
    setImage(null);
  };
 
  return (
    <div class="w-100 card border-0 p-4">
    <div class="card-header bg-success bg-gradient ml-0 py-3">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white py-2">Create Villa</h2>
            </div>
 
        </div>
 
    </div>
 
    <div class="card-body border p-4">
    <form onSubmit={handleSubmit} className="row" encType="multipart/form-data" noValidate="novalidate">
        <div class="p-3"></div>
        <div className="form-floating py-1 col-12">
          <input
            className={`form-control border shadow ${nameError ? "is-invalid" : ""}`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="Name"
            name="Name"
          />
          <label className="ms-2" htmlFor="Name">
            Name
          </label>
          <span className="text-danger field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true">
            {nameError}
          </span>
        </div>
 
        <div className="form-floating py-1 col-12">
          <input
            className={`form-control border shadow ${descriptionError ? "is-invalid" : ""}`}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="Description"
            name="Description"
          />
          <label className="ms-2" htmlFor="Description">
            Description
          </label>
          <span className="text-danger field-validation-valid" data-valmsg-for="Description" data-valmsg-replace="true">
            {descriptionError}
          </span>
        </div>
 
        <div className="form-floating py-1 col-12">
          <input
            className={`form-control border shadow ${priceError ? "is-invalid" : ""}`}
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="Price"
            name="Price"
          />
          <label className="ms-2" htmlFor="Price">
            Price Per Night
          </label>
          <span className="text-danger field-validation-valid" data-valmsg-for="Price" data-valmsg-replace="true">
            {priceError}
          </span>
        </div>
 
        <div className="form-floating py-1 col-12">
          <input
            className={`form-control border shadow ${sqftError ? "is-invalid" : ""}`}
            type="text"
            value={sqft}
            onChange={(e) => setSqft(e.target.value)}
            id="Sqft"
            name="Sqft"
          />
          <label className="ms-2" htmlFor="Sqft">
            Sqft
          </label>
          <span className="text-danger field-validation-valid" data-valmsg-for="Sqft" data-valmsg-replace="true">
            {sqftError}
          </span>
        </div>
 
        <div className="form-floating py-1 col-12">
          <input
            className={`form-control border shadow ${occupancyError ? "is-invalid" : ""}`}
            type="text"
            value={occupancy}
            onChange={(e) => setOccupancy(e.target.value)}
            id="Occupancy"
            name="Occupancy"
          />
          <label className="ms-2" htmlFor="Occupancy">
            Occupancy
          </label>
          <span className="text-danger field-validation-valid" data-valmsg-for="Occupancy" data-valmsg-replace="true">
            {occupancyError}
          </span>
        </div>
 
        <div className="form-floating py-1 col-12">
          <input
            className={`form-control border shadow ${imageError ? "is-invalid" : ""}`}
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            id="Image"
            name="Image"
          />
          <label className="ms-2" htmlFor="Image">
            Image
          </label>
          <span className="text-danger field-validation-valid" data-valmsg-for="Image" data-valmsg-replace="true">
            {imageError}
          </span>
        </div>
 
        <div className="col-6 col-md-3">
          <button type="submit" className="btn btn-success w-100">
            <i className="bi bi-check-circle"></i> Create
          </button>
        </div>
        <div className="col-6 col-md-3">
          <a className="btn btn-secondary w-100" href="/VillaList">
            <i className="bi bi-check-circle"></i> Cancel
          </a>
        </div>
       
      </form>
    </div>
</div>
 
  );
}
 
export default VillaCreate;



