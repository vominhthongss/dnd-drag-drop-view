import { useDrop } from "react-dnd";
import Task from "../Task/Task";

function Container({ object, items, handleRemove }) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Task",
    collect(monitor) {
      return {
        //nếu đang được thả thì trả về giá trị true cho handlerId
        handlerId: monitor.getHandlerId(),
        //có thẻ thả thì này true, dùng xác định có thả vào
        canDrop: monitor.canDrop(),
        //vừa mới lướt qua thì true
        isOver: monitor.isOver(),
      };
    },
    drop() {
      return object;
    },
  });
  return (
    <div className="border">
      <h2>{object.name}</h2>
      <div
        ref={drop}
        className={`${
          canDrop && isOver ? "bg-green-200" : canDrop && "bg-red-200"
        } w-[200px] flex flex-col`}
      >
        {items.map((item, index) => (
          <Task key={index} handleRemove={handleRemove} object={item} />
        ))}
      </div>
    </div>
  );
}

export default Container;
