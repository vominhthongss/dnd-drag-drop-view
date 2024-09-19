import "./App.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RangeList from "./components/RangeList/RangeList";
import ThrowTrash from "./components/ThrowTrash/ThrowTrash";
import Panel from "./components/Panel/Panel";

function App() {
  return (
    <div className="App space-y-10">
      <DndProvider backend={HTML5Backend}>
        <div className="m-2 bg-slate-50 p-1">
          <h1 className="font-bold">Task</h1>
          <Panel />
        </div>
        <div className="m-2 bg-slate-50 p-1">
          <h1 className="font-bold">Range list</h1>
          <RangeList />
        </div>
        <div className="m-2 bg-slate-50 p-1">
          <h1 className="font-bold">Throw trash</h1>
          <ThrowTrash />
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
