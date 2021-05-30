import React from "react";

class Profile extends React.Component{
    constructor()
    {
        super();
        this.state={
            show: true
        }
    }
    render(){
        return(
            <div>
                {
                    this.state.show ?
                    <h1>hide and show</h1>
                    :null
                }
                <h1>
                    <button onClick={()=>{this.setState({show: !this.state.show})}}>click me</button>
                </h1>
            </div>
        )
    }
}
export default Profile