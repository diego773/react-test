import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import samantha from "../images/samantha.jpg";




function PinderCards() {
  const [user, setUser] = useState([
    {
      name: "",
      gender: "",
      age: []
    }
  ]
  );

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen!");
  }

  return (
    <div className="PinderCards">
      <div className="PinderCards_cardContainer">
          <Card>
        {user.map((users) => (
            <Carousel
              className="swipe"
              key={users.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, users.name)}
              onCardLeftScreen={() => outOfFrame(users.name)}
            >
              <Carousel.Item>
                <img
                className="d-block w-100"
                src={samantha}
                alt="First slide"
              />
              </Carousel.Item>
            </Carousel>
          ))}
          </Card>
      </div>
    </div>
  );
}




export default PinderCards;