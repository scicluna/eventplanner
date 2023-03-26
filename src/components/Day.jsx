import { useState, useEffect, useRef } from "react"
import dayjs from "dayjs"
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

export function Day({ weekIndex, day, daynumber, updateWeek, dayName }) {
    const [currentDay, setCurrentDay] = useState([day])
    const [currentTime, setCurrentTime] = useState('')
    const dayRef = useRef(null)

    function updateDay(e) {
        e.target.contentEditable = true
        e.target.focus()
        e.target.classList.add('edit')
    }

    function relativeTime(daynumber) {
        if (daynumber < dayjs().dayOfYear()) {
            setCurrentTime('past')
            return 'past'
        }
        if (daynumber == dayjs().dayOfYear()) {
            setCurrentTime('present')
            return 'present'
        }
        if (daynumber > dayjs().dayOfYear()) {
            setCurrentTime('future')
            return 'future'
        }
    }

    function changeDay(e) {
        e.target.classList.remove('edit')
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
        const currentState = relativeTime(daynumber)
        if (currentState == 'present') {
            const yOffset = -50;
            const y = dayRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset //gotta be something smarter to offset it.
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }, [])

    return (
        <div className={`${currentTime} day`} ref={dayRef}>
            {dayjs('2023-01-01').dayOfYear(daynumber).format('MM/DD/YYYY')}
            <div className={'dayname'}>
                {dayName}
            </div>
            <div className={"events"} >
                {currentDay?.map((day, i) =>
                    <div data-key={weekIndex} key={i} className={`event`} onClick={(e) => updateDay(e)} onBlur={changeDay}>
                        {day}
                    </div>)}
            </div>
        </div>
    )
}