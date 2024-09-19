import { useDrag } from "react-dnd";

function Box({ object, handleRemove }) {
  const [{ isDragging }, drag] = useDrag({
    type: "Trash",
    //đây là item đang được kéo
    item: () => {
      return { object };
    },
    collect: (monitor) => ({
      //nếu đang được kéo thì trả về giá trị true cho isDragging
      isDragging: monitor.isDragging(),
    }),
    //sau khi kéo xong
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        alert(`You dropped ${item.object.name} into ${dropResult.name}!`);
        handleRemove(item.object);
      }
    },
  });

  return (
    <div
      className={`w-[100px] h-[100px] border-2 m-2 flex justify-center items-center ${
        isDragging ? "opacity-0" : "opacity-100"
      } cursor-move`}
      ref={drag}
    >
      <img className="w-full h-full object-fill" src={object.url} alt="" />
    </div>
  );
}

export default Box;
