import { useState, useRef } from "react"
import { Week } from "./Week"
import Aos from "aos"
import 'aos/dist/aos.css'
import useScrollSnap from 'react-use-scroll-snap'


export function Year() {
    const [year, setYear] = useState(
        JSON.parse(localStorage.getItem('year')) || Array(52).fill([Array(7).fill(null)])
    )
    const scrollRef = useRef(null)
    useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 })


    Aos.init({
        offset: 60,
        mirror: true,
        duration: 700,
        startEvent: 'DOMContentLoaded'
    })

    function updateYear(yearIndex, week) {
        let thisYear = [...year]
        thisYear[yearIndex] = week
        setYear(thisYear)
        localStorage.setItem('year', JSON.stringify(thisYear))
    }

    return (

        <div className={"giantgrid"} ref={scrollRef} >
            {year.map((week, i) =>
                <Week key={i} weekNumber={i} week={week} updateYear={updateYear} />)}
        </div>
    )
}