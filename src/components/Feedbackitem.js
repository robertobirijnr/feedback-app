import Card from "./shared/Card";
import { FaTimes } from "react-icons/fa";

function Feedbackitem({ item, handleDelete }) {
  return (
    <Card reverse={true}>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="white" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default Feedbackitem;
