import React from 'react'
import moment from 'moment'

const DateFormat = ({dateString}) => {
    const date = new Date(dateString);
    const formatedDate = moment(date).format("L");
    return formatedDate;
}

export default DateFormat
