import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
function Card({ id, index, text, handleMoveCard }) {
  const ref = useRef(null);

  const [{ handlerId }, drop] = useDrop({
    accept: "Card",
    collect(monitor) {
      return {
        //nếu đang được thả thì trả về giá trị true cho handlerId
        handlerId: monitor.getHandlerId(),
      };
    },
    //đây là item đang được kéo
    hover(item, monitor) {
      //check có phải đúng element hiện tại đang tương tác
      if (!ref.current) {
        return;
      }
      //tạo biến lưu index của item đang được kéo
      const dragIndex = item.index;
      //tạo biến lưu index của item đang được thả vào (tức là index mới cho item đang kéo sau khi thả ra)
      const hoverIndex = index;
      //index kéo bằng index thả thì không làm gì vì cơ bản không có gì thay đổi
      if (dragIndex === hoverIndex) {
        return;
      }
      // đổi index cho nhau giữa item kéo và item thả
      handleMoveCard(dragIndex, hoverIndex);
      //cập nhật lại index cho item thả để nó lưu index item vừa kéo nảy
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: "Card",
    //đây là item đang được kéo
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      //nếu đang được kéo thì trả về giá trị true cho isDragging
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  return (
    <div
      className={`border-2 border-dashed border-gray-400 p-2 mb-2 bg-white ${
        isDragging ? "opacity-0" : "opacity-100"
      } cursor-move`}
      ref={ref}
      data-handler-id={handlerId}
    >
      {text}
    </div>
  );
}

export default Card;
