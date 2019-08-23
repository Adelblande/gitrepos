import React, { useState, useRef, useEffect } from 'react';

import { Container, InputText, ButtonGit, Box } from './styles';
import { FaGithub } from 'react-icons/fa';
import Card from '../Card';

export default function GitSearch() {
  const [userSearch, setUserSearch] = useState();
  const [repos, setRepos] = useState();
  const [user, setUser] = useState();
  
  const userRef = useRef()
  const sendUser = () => {
    setUserSearch(userRef.current.value);
  };

  useEffect(() => {
    async function getData() {
      const resRepos = await fetch(`https://api.github.com/users/${userSearch}/repos`);
      const resUser = await fetch(`https://api.github.com/users/${userSearch}`);
      
      const dataRepos = await resRepos.json();
      const dataUser = await resUser.json();
      
      setRepos([...dataRepos])
      setUser({...dataUser})
    }
    userSearch && getData()
  }, [userSearch]);
  console.log(repos);
  return (
    <Container>
      <Box>
        <InputText ref={userRef} placeholder="Digite o Usuario do Git"/>
        <ButtonGit onClick={sendUser}>
          <FaGithub size={40} />
        </ButtonGit>
      </Box>
      
      {user && <Card user={user} />}
      <Box>
        <ul>
          {
            repos && repos.map(repo => (
              <li key={repo.id}>{repo.name}</li>
            ))
          }
        </ul>
      </Box>

    </Container>
  )
  
}
