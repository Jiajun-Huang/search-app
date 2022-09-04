import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = ({ monsters }) => {
  // when props change, the render will be called
  return (
    <ul className="card-list">
      {monsters.map((monster) => {
        const { id, name, email } = monster;
        return <Card id={id} name={name} email={email} key={id} />;
      })}
    </ul>
  );
};

export default CardList;
