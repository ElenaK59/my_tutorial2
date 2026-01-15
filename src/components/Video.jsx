import { useState } from "react";
import "./Video/Video.css";

function Video(props) {
  const { title, channelName, img } = props;
  const [likes, setLikes] = useState(0);
  const incrLikes = () => {
    setLikes((prevlikes) => prevlikes + 1);
    console.log(title, likes);
  };
  const setToten = () => {
    setLikes(10);
  };
  return (
    <div className="video">
      <img className="video-img" src={img} alt="React logo" />
      <p>{title}</p>
      <p>{channelName}</p>
      <div className="video-fotter">
        <p>Лайк :{likes}</p>
        <button onClick={incrLikes}>Лайк</button>
        <button onClick={setToten}></button>
      </div>
    </div>
  );
}
export default Video;
