import { useEffect, useState } from 'react'
import moment from 'moment'


const getHours = date => `${date.hour()}`.padStart(2, '0')
const getMinutes = date => `${date.minute()}`.padStart(2, '0')
const getSeconds = date => `${date.second()}`.padStart(2, '0')

function useTime() {
  const [date, setDate] = useState(moment())
  const year = `${date.year()}`
  const month = `${date.month() + 1}`.padStart(2, '0')
  const day = `${date.date()}`.padStart(2, '0')
  const [hour, setHour] = useState(getHours(date))
  const [minute, setMinute] = useState(getMinutes(date))
  const [second, setSecond] = useState(getSeconds(date))
  useEffect(() => {
    setInterval(() => {
      const d = moment()
      setHour(getHours(d))
      setMinute(getMinutes(d))
      setSecond(getSeconds(d))
    }, 1000)
  }, [])
  return {
    year, month, day, hour, minute, second,
  }
}

export default useTime
