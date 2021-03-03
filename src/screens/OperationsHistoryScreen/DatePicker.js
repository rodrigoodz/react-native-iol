import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Icon } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";

const calendar_icon = (
  <Icon
    type="ant-design"
    name="calendar"
    size={24}
    style={{ color: "black", marginHorizontal: 10 }}
  />
);

const DatePicker = ({ date, setDate, placeholder, maxDate, minDate }) => {
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <View>
      <TouchableOpacity style={styles.datePicker} onPress={() => setShow(true)}>
        {calendar_icon}
        {date === null ? (
          <Text style={styles.datePickerPlaceholder}>{placeholder}</Text>
        ) : (
          <Text style={styles.datePickerText}>
            {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
          </Text>
        )}
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date === null ? new Date() : date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
          maximumDate={maxDate === null ? new Date() : maxDate}
          minimumDate={minDate}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  datePicker: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.5)",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    marginTop: 10,
  },
  datePickerText: { fontSize: 18, color: "black" },
  datePickerPlaceholder: {
    fontSize: 16,
    color: "grey",
  },
});

export default DatePicker;
