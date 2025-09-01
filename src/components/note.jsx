import "./note.css";
const note = ({ noteValue, fontSize,bold, onChange }) => {
  return (
    <div>
      <p style={{ fontSize: `${fontSize}px`,fontWeight:`${bold}` }} onChange={onChange}>
        {noteValue}
      </p>
    </div>
  );
};
export default note;
