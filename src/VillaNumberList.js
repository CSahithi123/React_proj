import React from "react"

function VillaNumberList(){

return (
            
<body>
    
            
            
            
<div class="w-100 card border-0 p-4">
    <div class="card-header bg-success bg-gradient ml-0 py-3">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white py-2">Villa Number List</h2>
            </div>

        </div>

    </div>

    <div class="card-body border p-4">
        <div class="row pb-3">

            <div class="col-6 offset-6 text-end">
                <a class="btn btn-secondary" href="/VillaNumCreate">
                    <i class="bi bi-plus-circle"></i> Create New Villa Number
                </a>
            </div>
        </div>

        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>
                        Villa Name
                    </th>
                    <th>Villa Number</th>
                    <th>Speical Details</th>
                    
                    <th></th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>Royal Villa</td>
                        <td>101</td>
                        <td></td>
                        
                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/VillaNumUpdate">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/VillanumDelete">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               
                                
                            </div>
                        </td>
                    </tr>
                   {/* <tr>
                        <td>Royal Villa</td>
                        <td>102</td>
                        <td></td>
                        
                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/VillaNumUpdate">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/VillaNumber/Delete?villaNumberId=102">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Royal Villa</td>
                        <td>103</td>
                        <td></td>
                        
                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/VillaNumber/Update?villaNumberId=103">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/VillaNumber/Delete?villaNumberId=103">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Royal Villa</td>
                        <td>104</td>
                        <td></td>
                        
                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/VillaNumber/Update?villaNumberId=104">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/VillaNumber/Delete?villaNumberId=104">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Premium Pool Villa</td>
                        <td>201</td>
                        <td></td>
                        
                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/VillaNumber/Update?villaNumberId=201">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/VillaNumber/Delete?villaNumberId=201">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Premium Pool Villa</td>
                        <td>202</td>
                        <td></td>
                        
                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/VillaNumber/Update?villaNumberId=202">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/VillaNumber/Delete?villaNumberId=202">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Premium Pool Villa</td>
                        <td>203</td>
                        <td></td>
                        
                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/VillaNumber/Update?villaNumberId=203">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/VillaNumber/Delete?villaNumberId=203">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Luxury Pool Villa</td>
                        <td>301</td>
                        <td></td>
                        
                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/VillaNumber/Update?villaNumberId=301">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/VillaNumber/Delete?villaNumberId=301">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               
                                
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Luxury Pool Villa</td>
                        <td>302</td>
                        <td></td>
                        
                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/VillaNumber/Update?villaNumberId=302">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/VillaNumber/Delete?villaNumberId=302">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               
                                
                            </div>
                        </td>
</tr> */}
            </tbody>
        </table>

    </div>
</div>



</body>      
       

);
};

export default VillaNumberList;



       

    
