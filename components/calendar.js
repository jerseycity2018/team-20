import React from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class CalendarView extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }
  render() {
    return <Text>hi</Text>;
  }
}
