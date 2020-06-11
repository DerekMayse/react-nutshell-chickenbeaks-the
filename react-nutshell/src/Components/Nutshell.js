import React, {Component, Fragment} from 'react'
import NavBar from './nav/NavBar'
import ApplicationViews from './ApplicationViews'


class Nutshell extends Component {
    state = {
        heading: true,
      };
    


      
   


    render(){
        return(
            <React.Fragment>
                
                <NavBar />
                <ApplicationViews />
               
            </React.Fragment>
        )
    }
}

export default Nutshell