import React, {Component} from 'react'
import Message from './Message';

class UserGreeting extends Component{
    constructor(){
        super()
        this.state={
            isLoggedIn: false
        }
    }
    render(){
        return(
            this.state.isLoggedIn ?
            <div>Hello!</div>:
            <div>Goodby!</div>
        )
        
       /*  let message
        if(this.state.isLoggedIn){
           message= <div>Hello!</div>

        }
        else{
            message=  <div>Goodby!</div>

        }
        return <div>{message}</div> */
        /* if(this.state.isLoggedIn){
            return(
                <div>Hello!</div>

            )
        } else{
            return(
                <div>Goodby!</div>

            )
        }
 */
       /*  return (
        <div>
            <div>Hello!</div>
        <div>Goodby!</div>
        </div>
        

            )*/
    } 
}
export default UserGreeting