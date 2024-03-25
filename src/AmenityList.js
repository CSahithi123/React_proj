
import React from 'react';
 
function AmenityList() {
return (
  <div>
    <nav class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light border-bottom box-shadow mb-3">
      <div class="container-fluid">
        <a class="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index"><img src="~/images/resort.jpg" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
          <ul class="navbar-nav flex-grow-1">
            <li class="nav-item">
              <a class="nav-link" asp-area="" asp-controller="Home" asp-action="Index">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" asp-area="" asp-controller="Home" asp-action="Privacy">Privacy</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Content Management
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" asp-controller="Villa" asp-action="Index">Villa</a></li>



                <li><a class="dropdown-item" asp-controller="VillaNumber" asp-action="Index">VillaNumber</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" asp-controller="Amenity" asp-action="Index">Amenity</a></li>
                <li><a class="dropdown-item" asp-controller="Booking" asp-action="Index" asp-route-status="@SD.StatusApproved">Booking</a></li>

              </ul>
            </li>

          </ul>
          <partial name="_LoginPartial" />
        </div>
      </div>
    </nav>

    
    
  </div>

);

}
 
export default AmenityList;