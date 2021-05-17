import React from "react";
import { Card } from "components";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>Home Page</div>
        <Card title="First Card" description="This is a card" />
        <Card title="Second Card" description="This is another card" />
      </div>
    );
  }
}

export default Home;
