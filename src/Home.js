
import React, { useState } from 'react';

 
const Home = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [nights, setNights] = useState(1);
  const [villasList, setVillasList] = useState([]);
 
  const handleCheckAvailability = () => {
    // Your AJAX request logic here, updating villasList state
    // Example: fetch data from API using fetch or axios
    // Update setVillasList(data) inside the success callback
  };
 
  return (
    <div>
      {/* Carousel Component */}
      <div id="carouselExampleIndicators" class="carousel slide">
    <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img src="~/images/slide2.jpg" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
        <img src="~/images/slide1.jpg" class="d-block w-100" alt="..."/>
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
      {/* ... */}
 
      {/* Form Component */}
      <form
        method="post"
        style={{ backgroundColor: 'black' }}
        onSubmit={(e) => {
          e.preventDefault();
          handleCheckAvailability();
        }}
      >
        <div className="row p-0 mx-0 py-4">
          <div className="col-12 col-md-5 offset-md-1 pl-2 pr-2 pr-md-0">
            <div className="form-group">
              <label>Check In Date</label>
              <input
                type="date"
                className="form-control"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
              />
            </div>
          </div>
          <div className="col-8 col-md-3 pl-2 pr-2">
            <div className="form-group">
              <label>No. of nights</label>
              <select
                className="form-select"
                value={nights}
                onChange={(e) => setNights(e.target.value)}
              >
                {[...Array(10).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-4 col-md-2 pt-4 pr-2">
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-success btn-block"
              >
                <i className="bi bi-search"></i> &nbsp; Check Availability
              </button>
            </div>
          </div>
        </div>
      </form>
 
      {/* VillaList Component */}
      {/* You need to create a component for displaying villa list */}
      {/* ...
 
      {/* Scripts */}
      <script>
        {/* Your AJAX script can be replaced with a fetch or axios request */}
        {/* Make sure to handle asynchronous requests properly */}
        {/* ... */}
      </script>
    </div>
  );
};
 
export default Home;