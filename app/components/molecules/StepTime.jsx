import React, { useEffect, useState } from "react";
import StepData from "../templates/StepData";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useSteps } from "../../contexts/stepContext";

function StepTime({ value = null, id, style }) {
  const [editing, setEditing] = useState(false);
  const { mergeTime } = useSteps();

  useEffect(() => {}, [value]);

  function onChange(datetime) {
    mergeTime(id, "time", datetime);
  }

  function displayTime(value) {
    return moment(value).format("HH:mm");
  }

  const EditComponent = () => {
    return (
      <DateTimePicker
        value={value || new Date()}
        mode="time"
        is24Hour
        onChange={(_, date) => onChange(date)}
        display="default"
        style={{
          flex: 1,
          marginRight: 10,
        }}
        locale="NL-nl"
      />
    );
  };

  return (
    <StepData
      title="Tijd:"
      editing={editing}
      onEdit={() => setEditing(true)}
      onFinishEditing={() => setEditing(false)}
      value={value ? displayTime(value) : "-"}
      EditComponent={EditComponent}
    />
  );
}

export default StepTime;
