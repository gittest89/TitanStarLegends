const Score = ({ currentPoints, maxPoints }) => {
  return (
    <div className="points">
      <div>
        {currentPoints} / {maxPoints}
      </div>
      <div className="points__label">Points Spent</div>
    </div>
  );
};
export default Score;
