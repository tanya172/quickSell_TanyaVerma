import React from "react";
import "./card.css";

const Card = ({ id, title, tag, status }) => {
  return (
    <div className="cardContainer flex-gap-6" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="card">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "30px", height: "30px" ,}}
        >
          <img className="card"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt="UserImage"
          />
          <div className="card showStatus"></div>
        </div>
      </div>
      <div className="cardTitle card" style={{ fontWeight: 200 }}>
        <p className="card">{title}</p>
      </div>
      <div className="card cardTags">
        <div className="card"> ... </div>
        {tag?.map((elem, index) => {
          return (
            <div key={index} className="card ">
              {" "}
              <span className="card">•</span> {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
