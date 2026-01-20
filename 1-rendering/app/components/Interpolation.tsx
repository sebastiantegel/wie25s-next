export const Interpolation = () => {
  const text = "Hej";
  const age = 46;
  const person = { name: "Sebastian", isMarried: true };

  return (
    <>
      <div>{text}</div>
      <div>{age}</div>
      <div>
        <h4>{person.name}</h4>
        <input type="checkbox" disabled checked={person.isMarried} />
      </div>
    </>
  );
};
