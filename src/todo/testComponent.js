import React from 'react'
const test = (props) => {
    let {name, age, update, flag, set, new_Name } = props
   return (<div>
        <p>Hello, I am {name}, my age is {age}.<button onClick={() => {
            new_Name()
            if(flag){
                update(++age)
                if(age === 27)
                    set(false)
            }
            else {
                update(--age)
                if(age === 0)
                    set(true)
            }
        }}>increment</button></p>
    </div>)
}

export default test