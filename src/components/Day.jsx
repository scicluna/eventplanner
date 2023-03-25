import { useState, useEffect } from "react"
import dayjs from "dayjs"
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

export function Day({ weekIndex, day, daynumber, updateWeek }) {
    const [currentDay, setCurrentDay] = useState([day])
    const [currentTime, setCurrentTime] = useState('')

    function updateDay(e) {
        e.target.contentEditable = true
    }

    function relativeTime(daynumber) {
        if (daynumber < dayjs().dayOfYear()) setCurrentTime('past')
        if (daynumber == dayjs().dayOfYear()) setCurrentTime('present')
        if (daynumber > dayjs().dayOfYear()) setCurrentTime('future')
    }

    function changeDay(e) {
        e.target.removeEventListener('blur', changeDay)
        e.target.contentEditable = false
        const text = e.target.innerText
        if (text != currentDay) setCurrentDay([text])

        e.target.parentNode.parentNode.classList.add('shining')
        setTimeout(() => {
            e.target.parentNode.parentNode.classList.remove('shining')
        }, 700)

        updateWeek(weekIndex, text)
    }

    useEffect(() => {
        relativeTime(daynumber)
    }, [])


    return (
        <div className={`day ${currentTime}`} >
            {dayjs('2023-01-01').dayOfYear(daynumber).format('MM/DD/YYYY')}
            <div className={"events"} >
                {currentDay?.map((day, i) =>
                    <div data-key={weekIndex} key={i} className={`event`} onClick={(e) => updateDay(e)} onBlur={changeDay}>
                        {day}
                    </div>)}
            </div>
        </div>
    )
}