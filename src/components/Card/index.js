import React from 'react';
import { Container, Photo, BoxImage, BoxInfo, BoxInfoGit, BoxIcon } from './styles';

import { FaCloud, FaStar, FaUserFriends, FaUsers, FaFolderOpen } from 'react-icons/fa';

export default function Card({user}) {
  // console.log(user);
  return (
    <Container>
      <BoxImage>
        <Photo bgImage={user.avatar_url} />
      </BoxImage>
      <BoxInfo>
        <h2>{user.name}</h2>
      </BoxInfo>
      <BoxInfoGit>
        <BoxIcon>
          Repositories
          <FaCloud size={30} color="#74b392" />
          <span>{user.public_repos}</span>
        </BoxIcon>
        <BoxIcon>
          Projects
          <FaFolderOpen size={30} color="#74b392" />
        </BoxIcon>
        <BoxIcon>
          Stars
          <FaStar size={30} color="#74b392" />
        </BoxIcon>
        <BoxIcon>
          Followers
          <FaUsers size={30} color="#74b392" />
          <span>{user.followers}</span>
        </BoxIcon>
        <BoxIcon>
          Following
          <FaUserFriends size={30} color="#74b392" />
          <span>{user.following}</span>
        </BoxIcon>
      </BoxInfoGit>
        
    </Container>

  )
}