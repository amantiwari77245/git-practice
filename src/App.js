import React from 'react';
import Profile from "./profile"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name: "Aman",
      email: "at77245@gmail.com",
      add: "surbhi vihar bhopal"
    }

  }
  render(){
    return(

      
      
      <div>
        
        <Profile />
        <h1>hello{this.state.name}</h1>

        <h1>id{this.state.email}</h1>
        
        <h1>my{this.state.add}</h1>
      
      
      </div>
    )
  }
   

}
  
  

export default App;
