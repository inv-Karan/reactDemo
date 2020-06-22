import React from 'react'
import {Button} from 'react-bootstrap'

const Bar = (props) => {
    const { onSelectItem } = props
    return (<>
        <p>
            Items:
            <button className="btn btn-primary" onClick={() => { onSelectItem('All') }}>All</button>
            <Button className="btn btn-secondary" onClick={() => { onSelectItem('Active') }}>Active</Button>
            <Button className='btn btn-danger' onClick={() => { onSelectItem('Completed') }}>Completed</Button>
            <Button onClick={() => { onSelectItem('Clear Completed') }}>Clear Completed</Button>
        </p>
        </>
    )
}

export default Bar