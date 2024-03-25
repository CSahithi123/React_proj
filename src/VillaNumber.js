import React from 'react';
 
const VillaNumberList = ({ villaNumbers }) => {
  return (
    <div className="w-100 card border-0 p-4">
      <div className="card-header bg-success bg-gradient ml-0 py-3">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="text-white py-2">Villa Number List</h2>
          </div>
        </div>
      </div>
      <div className="card-body border p-4">
        <div className="row pb-3">
          <div className="col-6 offset-6 text-end">
            <a href="/VillaNumber/Create" className="btn btn-secondary">
              <i className="bi bi-plus-circle"></i> Create New Villa Number
            </a>
          </div>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Villa Name</th>
              <th>Villa Number</th>
              <th>Special Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          @foreach (var obj in Model)
{
    <tr>
        <td>@obj.Villa.Name</td>
        <td>@obj.Villa_Number</td>
        <td>@obj.SpecialDetails</td>
        
        <td>
            <div class="w-75 btn-group" role="group">
                <a asp-controller="VillaNumber" asp-action="Update" asp-route-villaNumberId="@obj.Villa_Number"
                   class="btn btn-success mx-2">
                    <i class="bi bi-pencil-square"></i> Edit
                </a>

                <a asp-controller="VillaNumber" asp-action="Delete" asp-route-villaNumberId="@obj.Villa_Number"
                   class="btn btn-danger mx-2">
                    <i class="bi bi-trash-fill"></i> Delete
                </a>
               
                
            </div>
        </td>
    </tr>
}
          </tbody>
        </table>
      </div>
    </div>
  );
};
 
export default VillaNumberList;