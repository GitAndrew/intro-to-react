import React from "react";
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
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
      searchFilter: "",
    };
    // this.searchFilterOnChange = this.searchFilterOnChange.bind(this);
  }

  componentDidMount() {
    // this.setState({
    //   loading: true,
    // });
    // fetch(`http://localhost:9000/movies`)
    //   .then((res) => res.json())
    //   .then((movies) => {
    //     this.setState({
    //       movies,
    //     });
    //   })
    //   .catch((e) => {})
    //   .finally(() => {
    //     this.setState({
    //       loading: false,
    //     });
    //   });
    (async () => {
      this.setState({
        loading: true,
      });
      try {
        const response = await fetch(`http://localhost:9000/movies`);
        const movies = await response.json();
        this.setState({
          movies,
        });
      } catch (e) {}
      this.setState({
        loading: false,
      });
    })();
  }

  // Use an arrow function instead of a regular function to avoid having to bind the this keyword
  searchFilterOnChange = (event) => {
    this.setState({
      searchFilter: event.target.value,
    });
  };

  render() {
    const filteredMovies = this.state.movies.filter((movie) =>
      movie.title.toLowerCase().includes(this.state.searchFilter.toLowerCase())
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
            value={this.state.searchFilter}
            onChange={this.searchFilterOnChange}
            placeholder={"Search Movies"}
          />
        </SearchContainer>
        <Content>
          {this.state.loading ? (
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
  }
}

export default Home;
