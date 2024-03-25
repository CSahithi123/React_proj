import React from "react"
            
function VillanumDelete(){           
 
return(

<div class="w-100 card border-0 p-4">
    <div class="card-header bg-success bg-gradient ml-0 py-3">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white py-2">Delete Villa Number</h2>
            </div>

        </div>

    </div>
    <div class="card-body border p-4">
        <form method="post" class="row" novalidate="novalidate">
            
            <input name="__Invariant" type="hidden" value="VillaNumber.Villa_Number"/> 
            <div class="p-3">
                <div class="form-floating py-1 col-12">
                    <select disabled class="form-select border shadow" data-val="true" data-val-required="The VillaId field is required." id="VillaNumber_VillaId" name="VillaNumber.VillaId">
                        <option disabled="" selected="">--Select Villa--</option>

                    <option selected="selected" value="1">Royal Villa</option>
<option value="2">Premium Pool Villa</option>
<option value="3">Luxury Pool Villa</option>
</select>
                    <label class="ms-2" for="VillaNumber_VillaId">VillaId</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="VillaNumber.VillaId" data-valmsg-replace="true"></span>
                </div>



                <div class="form-floating py-1 col-12">
                    <input disabled class="form-control border shadow" type="number" id="VillaNumber_Villa_Number" name="VillaNumber.Villa_Number" value="101"/><input name="__Invariant" type="hidden" value="VillaNumber.Villa_Number"/>
                    <label class="ms-2" for="VillaNumber_Villa_Number">VillaNumber</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="VillaNumber.Villa_Number" data-valmsg-replace="true"></span>

                </div>



                <div class="form-floating py-1 col-12">
                    <input disabled class="form-control border shadow" type="text" id="VillaNumber_SpecialDetails" name="VillaNumber.SpecialDetails" value="" />
                    <label class="ms-2" for="VillaNumber_SpecialDetails">SpecialDetails</label>
                    <span class="text-danger field-validation-valid" data-valmsg-for="VillaNumber.SpecialDetails" data-valmsg-replace="true"></span>

                </div>





                <div class="row pt-2">
                    <div class="col-6 col-md-3">
                        <button type="submit" class="btn btn-danger w-100">
                            <i class="bi bi-check-circle"></i> Delete
                        </button>
                    </div>
                    <div class="col-6 col-md-3">
                        <a class="btn btn-secondary w-100" href="/VillaNumberList">
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
export default VillanumDelete;
