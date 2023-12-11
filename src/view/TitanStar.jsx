import React, { useState, useMemo } from "react";
import Path from "../components/path/Path";
import Score from "../components/score/Score";

import { data, maxPoints } from "../data";

const TitanStar = () => {
  const [paths, setPaths] = useState(data);

  const currentPoints = useMemo(() => {
    return paths.reduce((pathAccumulator, pathCurrentValue) => {
      const activeTalentsCount = pathCurrentValue.talents.filter(
        (talent) => talent.isActive
      ).length;
      return pathAccumulator + activeTalentsCount;
    }, 0);
  }, [paths]);

  const handleUpdateTalent = (talent, talentIndex, index) => {
    setPaths((prevData) => {
      const newData = [...prevData];
      newData[index].talents[talentIndex].isActive = talent.isActive;
      return newData;
    });
  };

  const PathMemo = React.memo(Path);

  return (
    <div className="titanStar">
      <h3>TitanStar Legends - Rune Mastery Loadout Talent Calculator 9000</h3>
      <div className="titanStar__content">
        <div className="titanStar__points">
          <Score currentPoints={currentPoints} maxPoints={maxPoints} />
        </div>
        <div className="titanStar__paths">
          {paths &&
            paths.map((path, index) => (
              <PathMemo
                key={index}
                title={path.title}
                talents={path.talents}
                editable={currentPoints < maxPoints}
                onToggleTalent={(talent, talentIndex) =>
                  handleUpdateTalent(talent, talentIndex, index)
                }
              />
            ))}
        </div>
      </div>
    </div>
  );
};
export default TitanStar;
