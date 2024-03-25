import React from "react"
function AmenityUpdate(){
            
return(         
            

<div class="w-100 card border-0 p-4">
    <div class="card-header bg-success bg-gradient ml-0 py-3">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white py-2">Update Amenity</h2>
            </div>

        </div>

    </div>
    <div class="card-body border p-4">
        <form method="post" class="row" novalidate="novalidate">
           
                <input name="__Invariant" type="hidden" value="Amenity.Id"/>
            <div class="p-3">
                <div class="form-floating py-1 col-12">
                    <select class="form-select border shadow" data-val="true" data-val-required="The VillaId field is required." id="Amenity_VillaId" name="Amenity.VillaId">
                        <option disabled="" selected="">--Select Villa--</option>

                    <option selected="selected" value="1">Royal Villa</option>
<option value="2">Premium Pool Villa</option>
<option value="3">Luxury Pool Villa</option>
</select>
                    <label class="ms-2" for="Amenity_VillaId">VillaId</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="Amenity.VillaId" data-valmsg-replace="true"></span>
                </div>



                <div class="form-floating py-1 col-12">
                    <input class="form-control border shadow" type="text" data-val="true" data-val-required="The Name field is required." id="Amenity_Name" name="Amenity.Name" value="Private Pool"/>
                    <label class="ms-2" for="Amenity_Name">Name</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="Amenity.Name" data-valmsg-replace="true"></span>

                </div>

                <div class="form-floating py-1 col-12">
                    <input class="form-control border shadow" type="text" id="Amenity_Description" name="Amenity.Description" value=""/>
                    <label class="ms-2" for="Amenity_Description">Description</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="Amenity.Description" data-valmsg-replace="true"></span>

                </div>









                <div class="row pt-2">
                    <div class="col-6 col-md-3">
                        <button type="submit" class="btn btn-success w-100">
                            <i class="bi bi-check-circle"></i> Update
                        </button>
                    </div>
                    <div class="col-6 col-md-3">
                        <a class="btn btn-secondary w-100" href="/AmenityLis">
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
export default AmenityUpdate;