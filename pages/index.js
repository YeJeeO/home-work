export default function ToDoInput() {
        const [ToDos, setToDos] = React.useState([
            { id: 0, str: "Уборка "},
            { id: 1, str: "Глажка " }
          ]),
          [text, setText] = React.useState("");
    return  <div>
    <input
      type="text"
      value={text}
      onInput={(evt) => setText(evt.target.value)}
    />
    <button
      className="add"
      onClick={() => {
        setToDos([...ToDos, { str: text, id: Date.now() }]);
        setText("");
      }}>
      ADD
      </button>
      </div>
  }