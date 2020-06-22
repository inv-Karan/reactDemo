import React from 'react'

const Display1 = (props) => {
    return(
        <>
            <p>School {props.n} 
            is being run by {props.t}.</p>
            <p>Address is {props.a}
            and having staff of {props.t1} in total.</p>
            {props.t1>=500 ? 
            <p>This is small school.</p> :
            <p>This is big school.</p>
            }
        </>
    )
}

export default Display1