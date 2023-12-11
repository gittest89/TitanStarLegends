const Line = ({ isActive }) => {
  return (
    <div
      className={"path__line " + (isActive ? "path__line--active" : "")}
    ></div>
  );
};
export default Line;
