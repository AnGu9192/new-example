import React, {Component} from 'react'

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count: 0
        }
    }
    increment(){
       /*  this.state({
            count: this.state.count +1
        })
    }*/ 
    this.setState(prevState =>({
        count:prevState.count +1
    }))
}
    render(){
        return (
            <div>
           <div> Count -{this.state.count}</div>
           <button onClick={() => this.increment}>Increment</button>
            </div>
        )
    }
}
export default Counter