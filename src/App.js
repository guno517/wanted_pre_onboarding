import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import ClickToEdit from "./component/ClickToEdit";
import AutoComplete from "./component/AutoComplete";

function App() {
  const inputText = [
    "Javascript",
    "java",
    "python",
    "React",
    "Vue",
    "중고A급",
    "refurbished",
    "rustic",
  ];

  return (
    <div className="App">
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <AutoComplete inputText={inputText} />
      <ClickToEdit />
    </div>
  );
}

export default App;
