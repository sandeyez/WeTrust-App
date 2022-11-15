/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import StepData from '../templates/StepData';
import { useSteps } from '../../contexts/stepContext';

function EditComponent({ value, onChange }) {
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
}

function StepDate({ id, value = null }) {
  const [editing, setEditing] = useState(false);
  const { mergeTime } = useSteps();

  function onChange(datetime) {
    mergeTime(id, 'date', datetime);
  }

  function displayDate() {
    return moment(value).format('DD-MM-YYYY');
  }

  return (
    <StepData
      title="Datum:"
      editing={editing}
      onEdit={() => setEditing(true)}
      onFinishEditing={() => setEditing(false)}
      value={value ? displayDate(value) : '-'}
      EditComponent={() => EditComponent({ value, onChange })}
    />
  );
}

export default StepDate;
