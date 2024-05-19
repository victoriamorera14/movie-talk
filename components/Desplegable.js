import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../utils/colors';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: colors.mainColors.secondary }]}>
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.labelText}>Select Item:</Text>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: colors.mainColors.gray1, color: 'white'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainColors.primary,
    padding: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdown: {
    flex: 1,
    height: 50,
    borderColor: colors.mainColors.gray2,
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  labelText: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.mainColors.secondary
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: colors.mainColors.primary,
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    color:'white'
  },

  selectedTextStyle: {
    fontSize: 16,
    color:'white'
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:'white',
    backgroundColor: colors.mainColors.primary,
  },
  placeholderStyle: {
    color: 'white'
  },
});
