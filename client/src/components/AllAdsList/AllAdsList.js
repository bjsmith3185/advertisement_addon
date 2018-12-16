import React from "react";
import "./AllAdsList.css";

const AllAdsList = (props) => (

  <div className="row">
    <div className="col-2"></div>
    <div className="col-6">

      <div className="alladslist-title text-center">Update or Delete Company</div>

      <form class="alladslist-form">
        <ul>
          {props.allAds.map(company => (
            <li className="alladslist-li" key={company.company}>

              <div >
                <span className="alladslist-co">{company.company}</span>
                <button className="alladslist-btn update btn btn-info" onClick={() => { props.modifyAd(company.company) }}>Update</button>
                <button className="alladslist-btn btn delete btn-danger" onClick={() => { props.removeAd(company.company) }}>Delete</button>
              </div>
           
            </li>
          ))}
        </ul>
      </form>


    </div>
  </div>



);

export default AllAdsList;

