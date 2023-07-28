import React from "react";
import MyCheckbox from "../../../../library/UI/MyRadioInput";

function StatusCheck() {
  const status = ["alive", "dead", "unknown"];
  return (
    <div>
      <h4>Select a status</h4>
      <form>
        {status.map((item, index) => {
          return <MyCheckbox key={item + index} name={"status"} label={item} />;
        })}
      </form>
    </div>
  );
}

export default StatusCheck;
