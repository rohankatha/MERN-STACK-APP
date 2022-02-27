import React, { useState } from "react"

const ButtonClick = () => {
  const [users, setUsers] = useState([])
   
  const fetchData = () => {
    fetch("http://localhost:8080/todos/")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
        console.log(data)
      })
  } 

  
  return (
    <div>
      
      <button onClick={fetchData}>Fetch Users</button>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ButtonClick