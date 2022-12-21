import React from 'react'

function NameList() {
//     const names = ['shanu','yasiru','gamage']
//     const nameList = names.map(name => <h2>{name}</h2>)
//   return (
//     <div>
//             {nameList}
//     </div>
//   )

    const person = [
        {
            id:1,
            name:'shanu',
            age:21,
            skill: 'React'
        },
        {
            id:2,
            name:'yasi',
            age:30,
            skill: 'Node'
        }
    ]
    const personList = person.map(person => <h2>I am {person.name} ane i'm {person.age} years old and i'm expert in {person.skill}</h2>)

    return <div>{personList}</div>
}

export default NameList