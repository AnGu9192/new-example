import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state={
            message:'Hello Mari'
        }
    }
    cahngeMessage (){
        this.setState({
            message:'Thank you'
        })
    }
    render(){
        return     (
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.cahngeMessage()}>Subscribe</button>

            </div>
        ) 
    }
}
export default Message