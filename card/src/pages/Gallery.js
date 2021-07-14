import React, { useState } from "react";







function Gallery() {
  const [user, setUser] = useState([
    {
      name: 'Carol'

    }
  ]
  );


  return (
    <div className="cards">
      {user.map((users) => (
        <h1>{users.name}</h1>
      ))}
    </div>
  );
}

export default Gallery