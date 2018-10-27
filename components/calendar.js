import React from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Text, StyleSheet, ScrollView, View } from 'react-native';

export default class CalendarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // this.onDayPress = this.onDayPress.bind(this);
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white' }}>
        <Calendar
          onDayPress={this.onDayPress}
          style={styles.calendar}
          hideExtraDays
          // markedDates={{
          //   [this.state.selected]: {
          //     selected: true,
          //     disableTouchEvent: true,
          //     selectedDotColor: 'orange',
          //   },
          // }}
          markedDates={{
            '2018-10-27': { selected: true, marked: true },
            '2018-10-18': { selected: true, marked: true, dotColor: 'green' },
            '2018-10-20': { marked: true, dotColor: 'red' },
            '2018-10-20': { marked: true },
            '2012-05-27': { disabled: true, activeOpacity: 0 },
          }}
        />
        {/* <Calendar
          style={styles.calendar}
          current={'2012-05-16'}
          minDate={'2012-05-10'}
          maxDate={'2012-05-29'}
          firstDay={1}
          markedDates={{
            '2012-05-23': { selected: true, marked: true },
            '2012-05-24': { selected: true, marked: true, dotColor: 'green' },
            '2012-05-25': { marked: true, dotColor: 'red' },
            '2012-05-26': { marked: true },
            '2012-05-27': { disabled: true, activeOpacity: 0 },
          }}
          // disabledByDefault={true}
          hideArrows={true}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350,
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee',
  },
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
});
