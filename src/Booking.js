import React from "react"
import Header from "./Header";
function Booking(){         

return(

<div class="w-100 card border-0 p-4">
    <Header/>
    <div class="card-header bg-success bg-gradient ml-0 py-3">
        <div class="row">
            <div class="col-12 text-center">
                <h2 class="text-white py-2">Booking List</h2>
            </div>
        </div>
    </div>
    <div class="card-body border p-4">
        <div class="d-flex justify-content-end pb-4 pt-2">
            <ul class="list-group list-group-horizontal-sm">
                <a style={{textDecoration:"none"}} href="/Booking?status=Pending">
                    <li class="list-group-item "> Pending </li>
                </a>
                <a style={{textDecoration:"none"}} href="/Booking?status=Approved">
                <li class="list-group-item "> Approved </li>
                </a>
                <a style={{textDecoration:"none"}} href="/Booking?status=CheckedIn">
                <li class="list-group-item "> CheckedIn </li>
                </a>
                <a style={{textDecoration:"none"}} href="/Booking?status=Completed">
                <li class="list-group-item "> Completed </li>
                </a>
                <a style={{textDecoration:"none"}} href="/Booking?status=Cancelled">
                <li class="list-group-item "> Cancelled </li>
                </a>
            </ul>
        </div>
        <div id="tblBookings_wrapper" class="dataTables_wrapper no-footer"><div class="dataTables_length" id="tblBookings_length"><label>Show <select name="tblBookings_length" aria-controls="tblBookings" class=""><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select> entries</label></div> <br></br><div id="tblBookings_filter" class="dataTables_filter"><label>Search:<input type="search" class="" placeholder="" aria-controls="tblBookings" /></label></div><br></br><table id="tblBookings" class="table table-bordered table-striped dataTable no-footer" aria-describedby="tblBookings_info" style={{width: "1220px"}}>
            <thead>
                <tr><th class="sorting sorting_asc" tabindex="0" aria-controls="tblBookings" rowspan="1" colspan="1" aria-label="ID: activate to sort column descending" aria-sort="ascending" style={{width: "23px"}}>ID</th><th class="sorting" tabindex="0" aria-controls="tblBookings" rowspan="1" colspan="1" aria-label="Name: activate to sort column ascending" style={{width: "145px"}}>Name</th><th class="sorting" tabindex="0" aria-controls="tblBookings" rowspan="1" colspan="1" aria-label="Phone: activate to sort column ascending" style={{width: "84px"}}>Phone</th><th class="sorting" tabindex="0" aria-controls="tblBookings" rowspan="1" colspan="1" aria-label="Email: activate to sort column ascending" style={{width: "145px"}}>Email</th><th class="sorting" tabindex="0" aria-controls="tblBookings" rowspan="1" colspan="1" aria-label="Status: activate to sort column ascending" style={{width: "84px"}}>Status</th><th class="sorting" tabindex="0" aria-controls="tblBookings" rowspan="1" colspan="1" aria-label="Check In Date: activate to sort column ascending" style={{width: "84px"}}>Check In Date</th><th class="sorting" tabindex="0" aria-controls="tblBookings" rowspan="1" colspan="1" aria-label="Nights: activate to sort column ascending" style={{width: "84px"}}>Nights</th><th class="sorting" tabindex="0" aria-controls="tblBookings" rowspan="1" colspan="1" aria-label="Total: activate to sort column ascending" style={{width: "84px"}}>Total</th><th class="sorting" tabindex="0" aria-controls="tblBookings" rowspan="1" colspan="1" aria-label=": activate to sort column ascending" style={{width: "145px"}}></th></tr>
            </thead>
          {/*  <tbody>
                
<tr class="odd"><td valign="top" colspan="9" class="dataTables_empty">No data available in table</td></tr></tbody> */}
        </table>
        {/*
        <div class="dataTables_info" id="tblBookings_info" role="status" aria-live="polite">Showing 0 to 0 of 0 entries</div>
        <div class="dataTables_paginate paging_simple_numbers" id="tblBookings_paginate"><a class="paginate_button previous disabled" aria-controls="tblBookings" aria-disabled="true" role="link" data-dt-idx="previous" tabindex="-1" id="tblBookings_previous">Previous</a><span></span><a class="paginate_button next disabled" aria-controls="tblBookings" aria-disabled="true" role="link" data-dt-idx="next" tabindex="-1" id="tblBookings_next">Next</a></div>
*/}
        </div>
    </div>
</div>


);
};
export default Booking;
        
    