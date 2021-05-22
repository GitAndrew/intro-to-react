import React from "react";
import { Card } from "components";
import logo from "images/logo.png";
import { Header, Title, LogoContainer, Logo, Content } from "./styles";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
    };
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

  render() {
    return (
      <div>
        <Header>
          <Title>Studio Ghibli Movie Watchlist</Title>
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
        </Header>
        <Content>
          {this.state.loading ? (
            <div>Loading</div>
          ) : (
            this.state.movies.map((movie) => (
              <Card
                key={movie.id}
                title={movie.title}
                description={movie.description}
              />
            ))
          )}
        </Content>
      </div>
    );
  }
}

export default Home;
