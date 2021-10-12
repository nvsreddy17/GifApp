export default function Search(props) {
  return (
    <div>
      <input
        value={props.value}
        type="text"
        name="textInput"
        onChange={props.handleChange}
      />
      <button name="search" onClick={props.handleClick}>
        Search
      </button>
    </div>
  );
}
