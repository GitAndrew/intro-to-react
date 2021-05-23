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
  CheckboxContainer,
} from "./styles";
const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [seenMovies, setSeenMovies] = useState([]);
  const [hideSeen, setHideSeen] = useState(false);

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
    hideSeen
      ? !seenMovies.includes(movie.id) &&
        movie.title.toLowerCase().includes(searchFilter.toLowerCase())
      : movie.title.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const toggleSeen = (id) => {
    if (seenMovies.includes(id)) {
      setSeenMovies(seenMovies.filter((movieId) => movieId !== id));
    } else {
      setSeenMovies(seenMovies.concat(id));
    }
  };

  const toggleHideSeen = () => {
    setHideSeen(!hideSeen);
  };

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
        <CheckboxContainer>
          <input
            style={{ transform: "scale(1.5)", marginRight: 10 }}
            type="checkbox"
            onChange={toggleHideSeen}
            checked={hideSeen}
          />
          <label>Hide Seen Movies</label>
        </CheckboxContainer>
      </SearchContainer>
      <Content>
        {loading ? (
          <div>Loading</div>
        ) : (
          filteredMovies.map((movie) => (
            <Card
              key={movie.id}
              id={movie.id}
              originalTitle={movie.original_title}
              title={movie.title}
              description={movie.description}
              releaseDate={movie.release_date}
              backgroundImage={movie.cover}
              seen={seenMovies.includes(movie.id)}
              toggleSeen={toggleSeen}
            />
          ))
        )}
      </Content>
    </MainContainer>
  );
};

export default Home;
