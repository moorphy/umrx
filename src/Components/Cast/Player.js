import React from "react";
import "./Cast.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { images } from "../../Helpers/PlayerData";

class Player extends React.Component {
  render() {
    const { name, pronouns, role, bio, headshot } = this.props;
    return (
      <div className="contact-box">
        <Card>
          <Card.Img
            variant="top"
            src={headshot}
            alt={`${name}'s headshot`}
            className="img-fluid player-headshot"
            rounded
          />
          <Card.Body>
            <Card.Title>
              <h1>{name}</h1>
            </Card.Title>
            <p>{pronouns}</p>
            <p>{role}</p>
            <Card.Text>
              <h4>{bio}</h4>
            </Card.Text>
            {/* <Button variant="primary">Link to plug player's wwebpage, show, something?</Button> */}
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Player;
