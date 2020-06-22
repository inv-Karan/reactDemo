import React from 'react'

const Details = (props) => {
    return (
        <div>
            <p>
                I live in {props.locality.city}.
            </p>
            <p>
                soc: {props.locality.soc}
            </p>
            <p>
                area: {props.locality.area}
            </p>
            <p>
                city: {props.locality.city}
            </p>
        </div>
    )
}

export default Details