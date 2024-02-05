import { advantages } from "./config";
import "./Advantages.css";

const Advantages = () => (
  <div className="advantages-wrapper">
    <div className="advantages">
      {advantages.map((advantage, idx) => (
        <div className="advantage" key={idx}>
          <h3 className="advantage__title">{advantage.title}</h3>
          <span className="advantage__subtitle">{advantage.subtitle}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Advantages;
