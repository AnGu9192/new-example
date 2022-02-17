import React from 'react'
import Person from './Person'
function NameList(){
    const names= ['Ann','Mari','Mana']
 /* const persons=[
         {
             id:1,
             name: 'Mari',
             age:30,
             skill: 'react'
        },
        {
            id:2,
            name: 'Nara',
            age:25,
            skill: 'vue'
       },
        {
        id:3,
        name: 'mika',
        age:35,
        skill: 'java'
   }

 ] */
/*  const personList =persons.map(person => <Person key={person.id} person={person}/>) */  
const nameList = names.map((name,index )=> <h2 key={index}>{index}{name}</h2>)
 return(
        <div>
          {nameList}
        </div>
    )                  
}

export default NameList