import { Link } from "react-router-dom";

export default function Clothing() {
  return (
    <div className="contenedor-clothing" area="content">
      <div className="clothing">CLOTHING JORDAN</div>
      <div className="list-clothing">
        <Link to="clothing">CLOTHING</Link>
      </div>
    </div>
  );
}