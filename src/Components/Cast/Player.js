import React from "react";
import "./Cast.css";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class Player extends React.Component {
  render() {
    const { name, pronouns, role, bio, photo_1 } = this.props;
    return (
      <div className="contact-box">
        {/* <Card style={{ width: "18rem" }}> */}
        <Card>
          <Card.Img variant="top" src={photo_1} />
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
