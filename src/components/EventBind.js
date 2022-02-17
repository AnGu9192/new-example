import React, {Component} from 'react'

class EventBind extends Component{
    constructor(){
        super()
        this.state={
           message:'hello'
        }
       /*  this.clickHandler =this.clickHandler.bind(this) */
    }
/*     clickHandler(){
        this.setState({
            message: 'good by'
        })
    } */
    clickHandler = () =>{
        this.setState({
            message: 'good'
        })

    }
    render(){
        return(
            <div>
                <div>{this.state.message}</div>
{/*                 <button onClick={this.clickHandler.bind(this)}>Click Me!</button>*/} 
<button onClick={ this.clickHandler}>Click Me!</button>  
         </div>
            )
    }
}
export default EventBind