import React, { useState, useEffect, useMemo, useCallback, useRef, useContext, useImperativeHandle, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

interface User {
  name: string
  login: string
  avatar_url: string
}

function App() {
  const [users, setUsers] = useState<[User]>()
  const names = useMemo(() => users?.map(user => user.name).join(', ') || '', [users]) // Fazer calculo, não faz sentido refazer toda vez que renderiza
  const greeting = useCallback((user: User) => alert(`Hello ${user.name}`), [])// não é necessário renderizar toda vez

  async function loadData() {
    const response = await fetch('https://api.github.com/users/felipepassosdev')
    const data = await response.json()

    setUsers(data)
  }
  return (
     <div>
       {users?.map(user => user.name)}
     </div>
  );
}

export default App;
