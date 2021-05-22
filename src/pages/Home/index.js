import React from "react";
import { Card } from "components";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.setState({
      movies: [
        {
          id: "1",
          title: "First Card",
          description: "This is a card",
        },
        {
          id: "2",
          title: "Second Card",
          description: "This is another card",
        },
      ],
    });
  }

  render() {
    return (
      <div>
        <div>Home Page</div>
        {this.state.movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            description={movie.description}
          />
        ))}
      </div>
    );
  }
}

export default Home;
