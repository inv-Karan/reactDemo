import React from 'react'

const Display = (props) => {
    return(
        <>
            <p>{props.mn}</p>
            { (props.mc && props.mc.length >= 1) &&
            <p>casts are {props.mc}</p> ||
            <p>no cast!!</p>
            }
            <p>rated {props.mr}</p>
        </>
    )
}

export default Display