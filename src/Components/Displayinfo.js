import React from "react";

class Displayinfo extends React.Component{
    render(){
        const {name , age} = this.props;
        console.log(this.props)
        return(
            <div>
                <div>My name is {name}</div>
                <div>My age is {age}</div>

            </div>
        )
    }
}
export default Displayinfo