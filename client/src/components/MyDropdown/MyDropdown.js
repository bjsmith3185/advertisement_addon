import React, { Component } from "react";
import API from "../../utils/API";


class MyDropdown extends React.Component {
  constructor(props) {
    super(props);

  

    this.state = { allAds: props.allAds };


    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>

            {this.state.allAds.map(company => (
              <option key={company.company}
                name={"value"}
                value={company.company}
              >{company.company}</option>
            ))}


            {/* <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option> */}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MyDropdown;





















//(((((((((((((((((((((((((((((())))))))))))))))))))))))))))))


// import React, { Component } from "react";

// const MyDropdown = (props) => (

//   <div>


//     {/* <form onSubmit={props.handleSubmit}> */}
//     <form>
//       <label>
//         Pick Company to Review
//           <select value={props.value} onChange={props.handleChange}>
//                 {props.allAds.map(company => (
//                   <option key={company.company}
//                   name={"value"}
//                     value={company.company}
//                   >{company.company}</option>
//                 ))}

//         </select>
//       </label>
//       {/* <input type="submit" value="Submit" /> */}
//       <button onClick={() => props.handleSubmit(this.value)}>submit</button>
//     </form>


//     {/* <select>
//       {props.allAds.map(company => (
//         <option key={company.company}
//           value={company.company}
//           onClick={props.handleCheck.bind(this)}
//           data-id={company.company}

//         >{company.company}</option>
//       ))}

//     </select> */}

//   </div>
// );

// export default MyDropdown;


