import { Component } from "react";
import "./card-list.style.css";
import Card from "../card/card.component";

class CardList extends Component {
  // when props change, the render will be called
  render() {
    const { monsters } = this.props;
    console.log(monsters);

    return (
      <ul className="card-list">
        {monsters.map((monster) => {
          const { id, name, email } = monster;
          return <Card id={id} name={name} email={email} />;
        })}
      </ul>
    );
  }
}

export default CardList;
