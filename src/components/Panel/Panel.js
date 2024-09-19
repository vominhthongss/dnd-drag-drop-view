import { useCallback, useState } from "react";
import update from "immutability-helper";
import Container from "../Container/Container";
function Panel() {
  const [progress, setProgress] = useState([
    {
      id: 1,
      name: "Task 1",
    },
    {
      id: 2,
      name: "Task 2",
    },
    {
      id: 3,
      name: "Task 3",
    },
  ]);
  const [done, setDone] = useState([
    {
      id: 4,
      name: "Task 4",
    },
  ]);
  const handleRemove = ({ task, containerName }) => {
    console.log("task, containerName :", task, containerName);
    if (containerName === "done") {
      handleUpdateDone(task);
    }
    if (containerName === "progress") {
      handleUpdateProgress(task);
    }
  };

  const handleUpdateProgress = useCallback((task) => {
    const updateIndex = progress.indexOf(task);
    // setProgress((oldProgresses) => {
    //   return update(oldProgresses, {
    //     $splice: [[updateIndex, 1]],
    //   });
    // });

    setProgress((oldProgresses) => {
      // Tạo một bản sao của mảng progresses sử dụng spread operator để tránh thay đổi trực tiếp mảng gốc
      const newProgresses = [...oldProgresses];
      // Thêm một phần tử mới vào mảng bằng cách sử dụng push
      newProgresses.push(task);
      // Trả về mảng mới đã được cập nhật
      return newProgresses;
    });
  });

  const handleUpdateDone = useCallback((task) => {
    const updateIndex = done.indexOf(task);
    // setDone((oldDone) => {
    //   return update(oldDone, {
    //     $splice: [[updateIndex, 1]],
    //   });
    // });
    setDone((oldDone) => {
      console.log("oldDone :", oldDone);
      // Tạo một bản sao của mảng progresses sử dụng spread operator để tránh thay đổi trực tiếp mảng gốc
      const newDone = [...oldDone];
      // Thêm một phần tử mới vào mảng bằng cách sử dụng push
      newDone.push(task);
      // Trả về mảng mới đã được cập nhật
      return newDone;
    });
  });
  const progressContainer = {
    name: "progress",
  };
  const doneContainer = {
    name: "done",
  };
  return (
    <div className="flex">
      <Container
        handleRemove={handleRemove}
        object={progressContainer}
        items={progress}
      />
      <Container
        handleRemove={handleRemove}
        object={doneContainer}
        items={done}
      />
    </div>
  );
}

export default Panel;
