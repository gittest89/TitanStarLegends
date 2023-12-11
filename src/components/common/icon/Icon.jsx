const Icon = ({ name, isActive, onClick, onContextMenu }) => {
  return (
    <div
      className={"path__icon gradient" + (isActive ? "--active" : "")}
      onClick={onClick}
      onContextMenu={onContextMenu}
    >
      <i className={"icons " + name + (isActive ? "--active" : "")}></i>
    </div>
  );
};
export default Icon;
