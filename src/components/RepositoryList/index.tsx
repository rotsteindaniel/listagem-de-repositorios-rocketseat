import { useState, useEffect } from "react";
import { RepositoryItem } from "../RepositoryItem";
import { SectionContainer } from "./styles";

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("http://api.github.com/orgs/rocketseat/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepositories(data);
      });
  }, []);

  return (
    <SectionContainer>
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </ul>
    </SectionContainer>
  );
}
