import React from "react";
// import { Component } from "react"; same thing and write the anything
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
    constructor(props){
        super(props);
        
        // console.log("parent constructor");
    }
    componentDidMount(){
        // console.log("parent constructor did mount");
    }
render(){
    // console.log("parent render");
    return(
        <div>
        <h1>About class Component</h1>
        <div>
            LoggedIn User
            <UserContext.Consumer>

                {({loggedInUser})=><h3>{loggedInUser}</h3>}
            </UserContext.Consumer>
        </div>
        {/* <User name={"Arman Khan (function)"}/> */}


        <UserClass name={"first(class)"} location={"Sitapur(class)"}/>
        
    </div> 
    )
}
}
// const About  = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             {/* <User name={"Arman Khan (function)"}/> */}


//             <UserClass name={"Arman(class)"} location={"Sitapur(class)"}/>
//         </div>
//     );
// };

/**
 * 
 */

export default About;