// CARRBON COPY OF ABOUT PAGE 4 DEC 2024 - filename adjusted to CAST
import React from "react";
import "./Cast.css";
import Player from "./Player";
import player_data from "./umrx_fam.json";
import { images } from "../../Helpers/PlayerData";
import godzilla from "../../images/godzilla.png";

class Cast extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="textContainer">
          <div className="aboutImg">
            <img
              src={godzilla}
              alt="Uncle Mike Godzilla stomping on Xmas town"
              className="godzilla"
            />
          </div>

          <div className="aboutText">
            <h1>He's making a list and checking it twice</h1>
            {player_data.map((player, index) => {
              // Resolve headshot to the corresponding image in PlayerData.js
              const headshotImage = images.find(
                (img) =>
                  img.player.toLowerCase().replace(" ", "_") === player.headshot
              );

              return (
                <Player
                  key={index} // Unique key for each player card
                  name={player.name}
                  pronouns={player.pronouns}
                  role={player.role}
                  bio={player.bio}
                  headshot={headshotImage ? headshotImage.img : null} // Resolve image or use null
                />
              );
            })}
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default Cast;
