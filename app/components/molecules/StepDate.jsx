import React, { useState } from "react";
import StepData from "../templates/StepData";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import { useSteps } from "../../contexts/stepContext";

function StepDate({ id, value = null, style }) {
  const [editing, setEditing] = useState(false);
  const { mergeTime } = useSteps();

  function onChange(datetime) {
    mergeTime(id, "date", datetime);
  }

  function displayDate() {
    return moment(value).format("DD-MM-YYYY");
  }

  const EditComponent = () => {
    return (
      <DateTimePicker
        value={value || new Date()}
        mode="date"
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
      title="Datum:"
      editing={editing}
      onEdit={() => setEditing(true)}
      onFinishEditing={() => setEditing(false)}
      value={value ? displayDate(value) : "-"}
      EditComponent={EditComponent}
    />
  );
}

export default StepDate;
