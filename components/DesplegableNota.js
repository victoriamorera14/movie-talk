import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { colors } from '../utils/colors';

const data = [
  { label: '5', value: '5' },
  { label: '5.5', value: '5.5' },
  { label: '6', value: '6' },
  { label: '6.5', value: '6.5' },
  { label: '7', value: '7' },
  { label: '7.5', value: '7.5' },
  { label: '8', value: '8' },
  { label: '8.5', value: '8.5' },
];

const DropdownVoteComponent = ({setVote}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: colors.mainColors.secondary }]}>
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.labelText}>Select minimum rating:</Text>
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
            setVote(item.value);
            setIsFocus(false);
          }}
        />
      </View>
    </View>
  );
};

export default DropdownVoteComponent;

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
