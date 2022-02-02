import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import "./App.css";
import ClickToEdit from "./component/ClickToEdit";

function App() {
  return (
    <div className="App">
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <ClickToEdit />
    </div>
  );
}

export default App;
