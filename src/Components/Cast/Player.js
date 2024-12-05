import React from "react";
import "./Cast.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Player extends React.Component {
  render() {
    const { name, pronouns, role, bio } = this.props;
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <p>{pronouns}</p>
            <p>{role}</p>
            <Card.Text>{bio}</Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Player;