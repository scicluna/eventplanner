import { useState, useEffect } from "react"
import dayjs from "dayjs"
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

export function Day({ day, daynumber }) {
    const [currentDay, setCurrentDay] = useState([day])

    function updateDay(e) {
        e.target.contentEditable = true
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
    }

    console.log(dayjs('2010-01-01').dayOfYear(365).format('DD/MM/YYYY'))

    return (
        <div className={"day"} >
            {dayjs('2023-01-01').dayOfYear(daynumber).format('MM/DD/YYYY')}
            <div className={"events"} >
                {currentDay?.map((day, i) =>
                    <div data-key={day} key={i} className={"event"} onClick={(e) => updateDay(e)} onBlur={changeDay}>
                        {day}
                    </div>)}
            </div>
        </div>
    )
}