import React from "react"

function AmenityCreate(){
return(

<div class="w-100 card border-0 p-4">
    <div class="card-header bg-success bg-gradient ml-0 py-3">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white py-2">Create Villa</h2>
            </div>

        </div>

    </div>

    <div class="card-body border p-4">
        <form method="post" class="row" enctype="multipart/form-data" novalidate="novalidate">
            <div class="p-3">
                <div class="form-floating py-1 col-12">
                    <input class="form-control border shadow" type="text" data-val="true" data-val-maxlength="The field Name must be a string or array type with a maximum length of '50'." data-val-maxlength-max="50" data-val-required="The Name field is required." id="Name" maxlength="50" name="Name" value=""></input>
                    <label class="ms-2" for="Name">Name</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="Name" data-valmsg-replace="true"></span>
                </div>


               
                <div class="form-floating py-1 col-12">
                    <input class="form-control border shadow" type="text" id="Description" name="Description" value=""></input>
                    <label class="ms-2" for="Description">Description</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="Description" data-valmsg-replace="true"></span>

                </div>
            

            
                <div class="form-floating py-1 col-12">
                    <input class="form-control border shadow" type="text" data-val="true" data-val-number="The field Price Per Night must be a number." data-val-range="The field Price Per Night must be between 10 and 10000." data-val-range-max="10000" data-val-range-min="10" data-val-required="The Price Per Night field is required." id="Price" name="Price" value=""></input>
                    <label class="ms-2" for="Price">Price Per Night</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="Price" data-valmsg-replace="true"></span>

                </div>
           

            
                <div class="form-floating py-1 col-12">
                    <input class="form-control border shadow" type="number" data-val="true" data-val-required="The Sqft field is required." id="Sqft" name="Sqft" value=""></input>
                    <label class="ms-2" for="Sqft">Sqft</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="Sqft" data-valmsg-replace="true"></span>

                </div>
           

           
                <div class="form-floating py-1 col-12">
                    <input class="form-control border shadow" type="number" data-val="true" data-val-range="The field Occupancy must be between 1 and 10." data-val-range-max="10" data-val-range-min="1" data-val-required="The Occupancy field is required." id="Occupancy" name="Occupancy" value=""></input>
                    <label class="ms-2" for="Occupancy">Occupancy</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="Occupancy" data-valmsg-replace="true"></span>

                </div>
           

            
                <div class="form-floating py-1 col-12">
                    <input hidden="" class="form-control border shadow" type="text" id="ImageUrl" name="ImageUrl" value=""></input>
                    <input class="form-control border shadow" type="file" id="Image" name="Image"></input>
                    <label class="ms-2" for="ImageUrl">Image Url</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="ImageUrl" data-valmsg-replace="true"></span>

                </div>

                <div class="row pt-2">
                    <div class="col-6 col-md-3">
                        <button type="submit" class="btn btn-success w-100">
                            <i class="bi bi-check-circle"></i> Create
                        </button>
                    </div>
                    <div class="col-6 col-md-3">
                        <a class="btn btn-secondary w-100" href="/Villa">
                            <i class="bi bi-check-circle"></i> Cancel
                        </a>
                    </div>
                </div>


            </div>

            
        </form>
    </div>
</div>


       

    
);
};
export default AmenityCreate;