import React from 'react'

/* function Great (){
    return <h1>Hello Max</h1>
}*/
const Great = (props) => {
return (
    <div>
        <h1>Hello {props.name}</h1>
{props.children}
    </div>

)
}
export default Great;
