import { useState, useEffect } from "react"
import Aos from "aos"


export function Day({ day, daynumber }) {
    const [currentDay, setCurrentDay] = useState([day])

    function updateDay(e) {
        e.target.contentEditable = true
        e.target.addEventListener('blur', changeDay)
    }

    function changeDay(e) {
        e.target.removeEventListener('blur', changeDay)
        e.target.contentEditable = false
        const text = e.target.innerText
        if (text != currentDay) setCurrentDay([text])
        Aos.refresh()
    }

    return (
        <div className={"day"} data-aos={"flip-up"} data-aos-mirror={'true'} >
            {daynumber}
            <div className={"events"} >
                {currentDay?.map((day, i) =>
                    <div key={i} className={"event"} onClick={(e) => updateDay(e)} >
                        {day}
                    </div>)}
            </div>
        </div>
    )
}