import React from "react";
import "./AllAdsList.css";

const AllAdsList = (props) => (

  <div className="row">
    <div className="col-2"></div>
    <div className="col-6">

      <div className="alladslist-title text-center">Update or Delete Company</div>

      <div className="alladslist-form">

        <ul>
          {props.allAds.map(company => (
            <li className="alladslist-li" key={company.company}>
              <div className="row">

                <div className="col-3">
                  <span className="alladslist-co">{company.company}</span>
                </div>

                <div className="col-3">
                  <button className="alladslist-btn update btn btn-info" onClick={() => { props.modifyAd(company.company) }}>Update</button>
                </div>

                <div className="col-3">
                  <button className="alladslist-btn btn delete btn-danger" onClick={() => { props.removeAd(company.company) }}>Delete</button>
                </div>

              </div>
            </li>
          ))}
        </ul>

      </div>


    </div>
  </div>



);

export default AllAdsList;

