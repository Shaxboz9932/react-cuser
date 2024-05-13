import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UserList from './components/UserList'
import NewUserForm from './components/NewUserForm'

function App() {
  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  const handleDelete = (id) => {
    const deleteUser = users.filter((u) => {
      return (u.id !== id)
    })
    setUsers(deleteUser)
  }

  const closeModal = (e) => {
    if(e.target.className === 'overlay'){
      setShowModal(false)
    }
    if(e.key === 'Escape'){
      setShowModal(false)
    }
  }

  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user]
    })
    
  }

  return (
    <div onKeyDown={closeModal} onClick={closeModal} className='App'>
      <Navbar usersLength={users.length}/>
      <main>
        <div className="no-users">
          {users.length === 0 && <h3>No Users</h3>}
        </div>
        <UserList users={users} handleDelete={handleDelete}/>
      </main>
      {showModal && <NewUserForm addUser={addUser}/>}
      <button onClick={() => setShowModal(true)} className='create-user'>Create User</button>
      <Footer/>
      
    </div>
  )
}

export default App
