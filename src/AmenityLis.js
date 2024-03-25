import React from "react"
function AmenityLis(){
return(

<body>

            
            
            
<div class="w-100 card border-0 p-4">
    <div class="card-header bg-success bg-gradient ml-0 py-3">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white py-2">Amenity List</h2>
            </div>

        </div>

    </div>

    <div class="card-body border p-4">
        <div class="row pb-3">

            <div class="col-6 offset-6 text-end">
                <a class="btn btn-secondary" href="/Amenity/Create">
                    <i class="bi bi-plus-circle"></i> Create New Amenity
                </a>
            </div>
        </div>

        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>
                        Id
                    </th>
                    <th>Name</th>
                    <th>Villa Name</th>

                    <th></th>
                </tr>
            </thead>
            <tbody>
                    <tr>
                        <td>1</td>
                        <td>Private Pool</td>
                        <td>Royal Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/AmenityUpdate">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=1">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>


                            </div>
                        </td>
                    </tr>
                {/*  <tr>
                        <td>2</td>
                        <td>Microwave</td>
                        <td>Royal Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/Amenity/Update?amenityId=2">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=2">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>


                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Private Balcony</td>
                        <td>Royal Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/Amenity/Update?amenityId=3">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=3">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>


                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>1 king bed and 1 sofa</td>
                        <td>Royal Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/Amenity/Update?amenityId=4">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=4">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>


                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Private Plunge Pool</td>
                        <td>Premium Pool Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/Amenity/Update?amenityId=5">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=5">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>


                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Microwave ans Mini Refrigerator</td>
                        <td>Premium Pool Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/Amenity/Update?amenityId=6">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=6">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>


                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Private Balcony</td>
                        <td>Premium Pool Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/Amenity/Update?amenityId=7">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=7">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>


                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>king Bed or 2 double beds</td>
                        <td>Premium Pool Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/Amenity/Update?amenityId=8">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=8">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>


                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Private Pool</td>
                        <td>Luxury Pool Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/Amenity/Update?amenityId=9">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=9">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>


                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Jacuzzi</td>
                        <td>Luxury Pool Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/Amenity/Update?amenityId=10">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=10">
                                    <i class="bi bi-trash-fill"></i> Delete
                                </a>


                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Private Balcony</td>
                        <td>Luxury Pool Villa</td>

                        <td>
                            <div class="w-75 btn-group" role="group">
                                <a class="btn btn-success mx-2" href="/Amenity/Update?amenityId=11">
                                    <i class="bi bi-pencil-square"></i> Edit
                                </a>

                                <a class="btn btn-danger mx-2" href="/Amenity/Delete?amenityId=11">
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
export default AmenityLis;