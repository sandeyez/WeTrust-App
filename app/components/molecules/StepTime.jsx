/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import StepData from '../templates/StepData';
import { useSteps } from '../../contexts/stepContext';

function EditComponent({ onChange, value }) {
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
}

function StepTime({ value = null, id }) {
  const [editing, setEditing] = useState(false);
  const { mergeTime } = useSteps();

  useEffect(() => {}, [value]);

  function onChange(datetime) {
    mergeTime(id, 'time', datetime);
  }

  function displayTime(time) {
    return moment(time).format('HH:mm');
  }

  return (
    <StepData
      title="Tijd:"
      editing={editing}
      onEdit={() => setEditing(true)}
      onFinishEditing={() => setEditing(false)}
      value={value ? displayTime(value) : '-'}
      EditComponent={() => EditComponent({ onChange, value })}
    />
  );
}

export default StepTime;
