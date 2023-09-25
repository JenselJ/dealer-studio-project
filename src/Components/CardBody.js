import { data } from "./Data";

export default function CardBody({ cardBody, cardBody2, cardId }) {
  return (
    <div>
      {cardId === 3 ? (
        <div>
          <div style={{ color: "#414141", fontSize: "14px" }}> {cardBody}</div>
          <div
            style={{ marginTop: "20px", color: "#414141", fontSize: "14px" }}
          >
            {" "}
            {cardBody2}
          </div>
        </div>
      ) : (
        <div style={{ color: "#414141", fontSize: "14px" }}>{cardBody}</div>
      )}
    </div>
  );
}
