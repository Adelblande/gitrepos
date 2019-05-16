import React, { useState, useRef, useEffect } from 'react';

// import { Container } from './styles';

const GitRepos = () => {
  const [user, setUser] = useState();
  const [repos, setRepos] = useState();
  
  const userRef = useRef()
  const sendUser = () => {
    setUser(userRef.current.value);
  };

  useEffect(() => {
    async function getData(){
      const res = await fetch(`https://api.github.com/users/${user}/repos`)
      const data = await res.json();
      setRepos([...data])
      
    }
    user && getData()
  }, [user]);

  return (
    <>
      <input type="text" ref={userRef} placeholder="Digite o Usuario do Git"/>
      <button onClick={sendUser}>Busca Git Repos</button>
      <ul>
      {
        repos && repos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))
      }
      </ul>
    </>
  )
  
}
export default GitRepos;
