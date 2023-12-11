import React, { useState, useEffect } from "react";
import Line from "../common/line/Line";
import Icon from "../common/icon/Icon";

const Path = ({ title, talents, editable, onToggleTalent }) => {
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    setActiveCount(talents.filter((talent) => talent.isActive).length);
  }, [talents]);

  const handleAddTalent = (talent, index) => {
    if (editable && index === activeCount) {
      onToggleTalent({ ...talent, isActive: true }, index);
    }
  };

  const handleRemoveTalent = (talent, index, event) => {
    event.preventDefault();

    if (index === activeCount - 1) {
      onToggleTalent({ ...talent, isActive: false }, index);
    }
  };

  return (
    <div className="path">
      <div className="path__title">{title}</div>
      {talents &&
        talents.map((talent, index) => (
          <React.Fragment key={talent.icon}>
            {index > 0 && <Line isActive={talent.isActive} />}
            <Icon
              name={talent.icon}
              isActive={talent.isActive}
              onClick={() => handleAddTalent(talent, index)}
              onContextMenu={(e) => handleRemoveTalent(talent, index, e)}
            />
          </React.Fragment>
        ))}
    </div>
  );
};
export default Path;
