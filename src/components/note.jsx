import "./note.css";
const note = ({ noteValue, fontSize, bold, color, onChange }) => {
  return (
    <div>
      <p
        style={{
          fontSize: `${fontSize}px`,
          fontWeight: `${bold}`,
          color: `${color}`,
        }}
        onChange={onChange}
      >
        {noteValue}
      </p>
    </div>
  );
};
export default note;
