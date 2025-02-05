const Title = ({ blackTxt, tealTxt }) => {
  return (
    <div className="section-title">
      <h2>
        {blackTxt} <span>{tealTxt}</span>
      </h2>
    </div>
  );
};
export default Title;
