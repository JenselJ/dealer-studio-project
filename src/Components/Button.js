import "./Button.scss";

export default function Button({ cardButton, id, newBorder }) {
  return (
    <div
      className="btn-wrapper"
      onClick={() => {
        newBorder(id);
      }}
    >
      <div className="btn">{cardButton}</div>
    </div>
  );
}
