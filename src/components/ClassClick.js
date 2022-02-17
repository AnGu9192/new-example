import React, {Component} from 'react'

class ClasClick extends Component{
    clickHandler(){
        console.log('cliked the button')
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}>Click Me!</button>
            </div>
            )
    }
}
export default ClasClick