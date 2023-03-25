import { useState, useEffect } from "react"
import Aos from "aos"

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
        }, 500)


    }

    return (
        <div className={"day"} >
            {daynumber}
            <div className={"events"} >
                {currentDay?.map((day, i) =>
                    <div data-key={i} key={i} className={"event"} onClick={(e) => updateDay(e)} onBlur={changeDay}>
                        {day}
                    </div>)}
            </div>
        </div>
    )
}