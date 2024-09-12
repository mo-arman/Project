import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    //   count: 0,
    //   count2:1,
    userInfo:{
        name:"Dummy",
        location:"default",
        avtar_url:"https://dummy.com",
    }
    };
    console.log(this.props.name+"child constructor");
  }

 async componentDidMount(){
    // console.log(this.props.name+"child compo did mount");

    // APi calls 

    const data = await fetch("https://api.github.com/users/mo-arman");

    const json = await data.json();

    this.setState({
        userInfo:json,
    });
    console.log(json);
  }
  render() {
    // console.log(this.props.name+"child render");
    // const { name, location } = this.props;
    // const { count} = this.state;
    const {name,location,avtar_url,bio,company} = this.state.userInfo;
       
    return (
         
      <div className="user-card">
        {/* <h1>Count = {count}</h1>
        <h1>Count = {count2}</h1> */}
        {/* <button
          onClick={() => {
            //never update state variable directly
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avtar_url}/>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>bio:{bio}</h3>
        <h3>company:{company}</h3>
        <h4>Contact: @arman</h4>
      </div>
    );
  }
}
export default UserClass;
