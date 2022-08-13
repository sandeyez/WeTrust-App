/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SmallText from '../atoms/SmallText';
import colors from '../../config/colors';
import SmallButton from '../molecules/SmallButton';

function StepData({
  style,
  editing,
  onEdit,
  onFinishEditing,
  EditComponent,
  title,
  value,
  fullWidth = false,
}) {
  return (
    <View style={[styles.container, style]}>
      <View>
        <SmallText bold>{title}</SmallText>
        <View style={{ width: fullWidth ? 250 : 100 }}>
          {editing ? <EditComponent /> : <SmallText>{value || '-'}</SmallText>}
        </View>
      </View>
      <SmallButton
        style={styles.button}
        onPress={editing ? onFinishEditing : onEdit}
        iconName={editing ? 'check' : 'pencil'}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: colors.secondary,
    borderRadius: 8,
    padding: 5,
  },
});

export default StepData;
