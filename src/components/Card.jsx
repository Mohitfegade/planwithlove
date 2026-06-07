import { useState } from "react";
import "./Card.css";

const Card = ({ id, name, image, info, price ,removetour }) => {
  const [readMore, setReadMore] = useState(false);
  const description = readMore ? info : `${info.substring(0, 100)}...`;

  function readmorehandler() {
    setReadMore(!readMore);
  }

  return (
    <div className="Card">
      <img src={image} alt={name}></img>
      <div className="card-info">
        <div className="card-details">
          <h4 className="card-price">{price}</h4>
          <h4 className="card-name">{name}</h4>
        </div>

        <div className="card-description">
          {description}
          <span className="read-more" onClick={readmorehandler}>
            {readMore ? `show less` : `read more`}
          </span>
        </div>
      </div>

      <button className="card-button" onClick={() => removetour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;
