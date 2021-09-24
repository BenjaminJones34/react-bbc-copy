import './App.css';

import volcano from "./images/volcano.jpg";
import football from "./images/football.jpg";
import computer from "./images/computer.jpg";

const App = () => {
  return (
    <div className="newsSection">
      <NewsSectionFunction src={volcano} title="Hundreds more evacuated as La Palma lava nears sea" tag="Europe" />
      <NewsSectionFunction src={football} title="NFL star Jones loses father's ashes while scoring touchdown" tag="American Football" />
      <NewsSectionFunction src={computer} title="Staff to get day-one right to ask for home working" tag="Business" />
    </div>
  );
};

const NewsSectionFunction = (props) => {
  return (
    <div className="news">
      <img src={props.src} alt=" " />
      <h3>{props.title}</h3>
      <p>{props.tag}</p>
    </div>
  );
};

export default App;
