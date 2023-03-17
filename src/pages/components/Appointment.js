import React from 'react';
import Datepicker from 'react-multi-date-picker';
import { Calendar, Timegrid } from 'react-multi-date-picker/plugins/default';

const Appointment = () => {
  const myLabels = React.useMemo(() => {
    return [{
      start: '2023-03-15',
      textColor: '#e1528f',
      title: '1 SPOTS'
    }];
  }, []);

  const myInvalid = React.useMemo(() => {
    return [{
      start: '2023-03-15T08:00',
      end: '2023-03-15T13:00'
    }, {
      start: '2023-03-15T15:00',
      end: '2023-03-15T17:00'
    }, {
      start: '2023-03-15T19:00',
      end: '2023-03-15T20:00'
    }];
  }, []);

  const min = '2023-03-15T00:00';
  const max = '2023-09-15T00:00';
  const minTime = '08:00';
  const maxTime = '19:59';

  return (
    <Datepicker
      controls={[Calendar, Timegrid]}
      min={min}
      max={max}
      minTime={minTime}
      maxTime={maxTime}
      stepMinute={60}
      labels={myLabels}
      invalid={myInvalid}
    />
  );
}

export default Appointment;
