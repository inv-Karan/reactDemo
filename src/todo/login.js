import React from 'react'

const login = (props) => {
    const { userList, onSelectUser } = props
    return <p>
        {userList.map(user => <button onClick={() => {
            onSelectUser(user)
        }}>Login as {user}</button>)}
    </p>
}

export default login