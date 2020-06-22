import React from 'react'

const List = (props) => {
return (<div>
  { props.tasks1.map(t => <p>
    <input type='radio' />
    <input placeholder={t.text} />
    </p>) }
</div>)
}

export default List