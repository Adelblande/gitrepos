import React from 'react';
import { Container, Photo, BoxImage, BoxInfo, BoxInfoGit, BoxIcon, BoxInfoLocation } from './styles';

import { FaCloud, FaStar, FaUserFriends, FaUsers, FaFolderOpen, FaMapMarkerAlt } from 'react-icons/fa';

export default function Card({user, repos}) {
  console.log(repos);
  const stars = repos.reduce((acc, repo) => {
    // console.log(repo.name, repo.has_projects);
    return acc + repo.stargazers_count;
  }, 0);
  return (
    <Container>
      <BoxImage>
        <Photo bgImage={user.avatar_url} />
      </BoxImage>
      <BoxInfo>
        <h2>{user.name}</h2>
      </BoxInfo>
      <BoxInfoLocation>
        <FaMapMarkerAlt size={15} color="#0be3f6"/>
        <h4>{user.location}</h4>
      </BoxInfoLocation>
      <BoxInfoGit>
        <BoxIcon>
          Repositories
          <FaCloud size={30} color="#0be3f6" />
          <span>{user.public_repos}</span>
        </BoxIcon>
        <BoxIcon>
          Projects
          <FaFolderOpen size={30} color="#0be3f6" />
        </BoxIcon>
        <BoxIcon>
          Stars
          <FaStar size={30} color="#0be3f6" />
          <span>{stars}</span>
        </BoxIcon>
        <BoxIcon>
          Followers
          <FaUsers size={30} color="#0be3f6" />
          <span>{user.followers}</span>
        </BoxIcon>
        <BoxIcon>
          Following
          <FaUserFriends size={30} color="#0be3f6" />
          <span>{user.following}</span>
        </BoxIcon>
      </BoxInfoGit>
        
    </Container>

  )
}