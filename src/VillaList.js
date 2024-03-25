import React from "react"
function VillaList(){
return(

<body>

            
                
    <div class="w-100 card border-0 p-4">
        <div class="card-header bg-success bg-gradient ml-0 py-3">
            <div class="row">
                <div class="col-12 text-center">
                    <h2 class="text-white py-2">Villa List</h2>
                </div>

            </div>
            
        </div>
   
    <div class="card-body border p-4">
        <div class="row pb-3">

            <div class="col-6 offset-6 text-end">
                <a class="btn btn-secondary" href="/VillaCreate">
                    <i class="bi bi-plus-circle"></i> Create New Villa
                </a>
            </div>
        </div>

    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>Price</th>
                <th>Sqft</th>
                <th>Occupancy</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
                <tr>
                    <td>Royal Villa</td>
                    <td>200</td>
                    <td>550</td>
                    <td>6</td>
                    <td>
                        <div class="w-75 btn-group" role="group">
                            <a class="btn btn-success mx-2" href="/VillaUpdate">
                                    <i class="bi bi-pencil-square"></i> Edit
                        </a>

                                <a class="btn btn-danger mx-2" href="/VillaDelete">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               

                        </div>
                    </td>
                </tr>
        {/*        <tr>
                    <td>Premium Pool Villa</td>
                    <td>300</td>
                    <td>550</td>
                    <td>4</td>
                    <td>
                        <div class="w-75 btn-group" role="group">
                            <a class="btn btn-success mx-2" href="/VillaUpdate">
                                    <i class="bi bi-pencil-square"></i> Edit
                        </a>

                                <a class="btn btn-danger mx-2" href="/VillaDelete">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>
                               

                        </div>
                    </td>
                </tr>
                <tr>
                    <td>Luxury Pool Villa</td>
                    <td>400</td>
                    <td>750</td>
                    <td>4</td>
                    <td>
                        <div class="w-75 btn-group" role="group">
                            <a class="btn btn-success mx-2" href="/VillaUpdate">
                                    <i class="bi bi-pencil-square"></i> Edit
                        </a>

                                <a class="btn btn-danger mx-2" href="/VillaDelete">
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
export default VillaList;