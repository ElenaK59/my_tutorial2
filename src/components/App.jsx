import reactLogo from "../assets/react.svg";
import Video from "./Video";
import { Videos } from "./Video/Videos.js";
import "./App.css";

function App() {
  return (
    <>
      <div className="video-conteiner">
        {Videos.map((video) => (
          <Video
            key={video.id}
            title={video.title}
            channelName={video.channelName}
            img={reactLogo}
          />
        ))}
      </div>
    </>
  );
}

export default App;
