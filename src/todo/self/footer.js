import React from 'react'

const Academic = (props) => {
    return(<p>
                I have completed my {props.std.degree} from {props.std.college} college.
            </p>  
    )
}

export default Academic