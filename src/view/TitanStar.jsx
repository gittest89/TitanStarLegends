import { useState, useMemo } from "react";
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
    setPaths((prevPaths) => {
      const newPaths = [...prevPaths];
      newPaths[index].talents = [...newPaths[index].talents];
      newPaths[index].talents[talentIndex] = talent;
      return newPaths;
    });
  };

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
              <Path
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
