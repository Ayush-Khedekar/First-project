

export default function practice2() {
  const names = ["Alice", "Bob", "Charlie"];
  return (
    <>
      <button id="btn" value="0">
        0
      </button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </>
  );
}
