import React from 'react'

function detailsKaran() {
  var obj = {
    name: 'Karan',
    address: 'BK park'
  }
  return (
    <div>
      <p>Name: {obj.name} </p>
      <p>Address: {obj.address}</p>
    </div>
  )
}

export default detailsKaran