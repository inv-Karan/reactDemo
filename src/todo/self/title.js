import React from 'react'

const Name = (props) => {
    const casts = props.actors.map(a => a.name).join(', ')
    return(
        <>
        <p>
                I am {props.t} and Movie name is {props.movie.name}. </p>
        <p>
                It was released in {props.movie.releaseData}. </p>
        <p> 
                TOI rates it {props.movie.rating}. </p>
        <p>
                Main actors in the movie were {casts}. </p>
        </>
        
    )
}

export default Name