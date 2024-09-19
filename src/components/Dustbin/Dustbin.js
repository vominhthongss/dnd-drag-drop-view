import { useDrop } from "react-dnd";

function Dustbin({ object }) {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: "Trash",
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
    <div>
      <h2>{object.name}</h2>
      <div
        ref={drop}
        className={`${
          canDrop && isOver ? "bg-green-200" : canDrop && "bg-red-500"
        } w-[200px] h-[200px] bg-slate-400 rounded-full flex justify-center items-center`}
      >
        {canDrop && isOver ? "Ok right !" : canDrop && "Drop here !"}
      </div>
    </div>
  );
}

export default Dustbin;
