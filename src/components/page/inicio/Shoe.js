import { Link } from "react-router-dom";

export default function Shoe() {
  return (
    <div className="contenedor-shoe" area="content">
      <div className="shoe">SHOES JORDAN</div>
      <div className="list-shoe">
        <Link to="shoe">SHOES</Link>
      </div>
    </div>
  );
}