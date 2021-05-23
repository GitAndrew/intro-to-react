import React, { useState, useEffect } from "react";
import { Card, Search } from "components";
import logo from "images/logo.png";
import {
  MainContainer,
  Header,
  Title,
  LogoContainer,
  Logo,
  Content,
  SearchContainer,
} from "./styles";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:9000/movies`);
        const movies = await response.json();
        setMovies(movies);
      } catch (e) {}
      setLoading(false);
    })();
  }, []);

  const searchFilterOnChange = (event) => {
    setSearchFilter(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <MainContainer>
      <Header>
        <Title>Studio Ghibli Movie Watchlist</Title>
        <LogoContainer>
          <Logo src={logo} />
        </LogoContainer>
      </Header>
      <SearchContainer>
        <Search
          value={searchFilter}
          onChange={searchFilterOnChange}
          placeholder={"Search Movies"}
        />
      </SearchContainer>
      <Content>
        {loading ? (
          <div>Loading</div>
        ) : (
          filteredMovies.map((movie) => (
            <Card
              key={movie.id}
              originalTitle={movie.original_title}
              title={movie.title}
              description={movie.description}
              releaseDate={movie.release_date}
              backgroundImage={movie.cover}
            />
          ))
        )}
      </Content>
    </MainContainer>
  );
};

export default Home;
