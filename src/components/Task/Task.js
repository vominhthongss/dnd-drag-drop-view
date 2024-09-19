import { useDrag } from "react-dnd";

function Task({ object, handleRemove }) {
  const [{ isDragging }, drag] = useDrag({
    type: "Task",
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
        handleRemove({ task: item.object, containerName: dropResult.name });
      }
    },
  });

  return (
    <div
      className={`w-[100px] h-[100px] border-2 m-2 flex justify-center items-center ${
        isDragging ? "opacity-0" : "opacity-100"
      } cursor-move border`}
      ref={drag}
    >
      {object.name}
    </div>
  );
}

export default Task;
