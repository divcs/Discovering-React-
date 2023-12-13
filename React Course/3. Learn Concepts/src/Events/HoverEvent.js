//   Example of HoverEvent
const Move = () => {
  const moveHandler = () => {
    console.log("Don't hover over this content");
  };
  return (
    <>
      <p onMouseMove={moveHandler}>
        This is paragraph content which cannot be hovered, when someone tries to
        hover over it, it prints a message to the console.
      </p>
    </>
  );
};

export function HoverEvent(){
    return <Move />
}