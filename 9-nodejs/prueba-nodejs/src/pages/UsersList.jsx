import { useState, useEffect } from "react"

function UsersList() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch("http://localhost:3001/users?page=" + page)
      .then((response) => response.json())
      .then((data) => setUsers(data))
  }, [page])

  const deleteUser = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      fetch("http://localhost:3001/users/" + id, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then(() => {
          // Refresh the list
          fetch("http://localhost:3001/users?page=" + page)
            .then((response) => response.json())
            .then((data) => setUsers(data))
        })
    }
  }

  return (
    <div>
      <h1>Users List</h1>
      <div>
        <button>Create user</button>
      </div>
      <table className="table-auto border-collapse border border-slate-400 w-full">
        <thead className="bg-gray-300">
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal text-center">
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Creation date</th>
            <th>Last update</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light text-center">
          {users && users.docs?.map((user) => (
            <tr key={user.id}>
              <td>{user._id}</td>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.email}</td>
              <td>{user.rol}</td>
              <td>{user.createdAt}</td>
              <td>{user.updatedAt}</td>
              <td>
                <button>Edit</button>
                <button className="cursor-pointer" onClick={() => { deleteUser(user._id) }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={!users.hasPrevPage}
          className={!users.hasPrevPage ? "flex justify-center items-center bg-gray-300 text-white font-bold py-2 px-4 rounded cursor-not-allowed" : "flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}
        >Previous</button>
        <p className="font-light">Page: {users?.page}</p>
        <button
          onClick={() => setPage(page + 1)}
          disabled={!users.hasNextPage}
          className={!users.hasNextPage ? "flex justify-center items-center bg-gray-300 text-white font-bold py-2 px-4 rounded cursor-not-allowed" : "flex justify-center items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"}>Next</button>
      </div>
    </div>
  )
}

export { UsersList }