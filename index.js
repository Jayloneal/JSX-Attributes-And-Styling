import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favorite Foods</h1>
    <img alt="random" src={img + "?grayscale"} />
    <img
      className="food-img"
      alt="chicken1"
      src="https://www.seriouseats.com/thmb/xw1krLC9Yh85qx1wl5jw0BPCWHk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2015__07__20210324-SouthernFriedChicken-Andrew-Janjigian-21-cea1fe39234844638018b15259cabdc2.jpg"
    />
    <img
      className="food-img"
      alt="chicken2"
      src="https://static.toiimg.com/thumb/61589069.cms?width=1200&height=900"
    />
    <img
      className="food-img"
      alt="chicken3"
      src="https://img.taste.com.au/V1mpwu4z/taste/2016/11/sharon-108893-2.jpeg"
    />
  </div>,
  document.getElementById("root")
);
