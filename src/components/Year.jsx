import { useState } from "react"
import { Week } from "./Week"
import Aos from "aos"
import 'aos/dist/aos.css'



export function Year() {
    const [year, setYear] = useState(Array(52).fill([Array(7).fill(null)]))


    Aos.init({
        offset: 60,
        mirror: true,
        duration: 700,
        startEvent: 'DOMContentLoaded'
    })


    return (
        <div className={"giantgrid"}>
            {year.map((week, i) =>
                <Week key={i} weeknumber={i} week={week} />)}
        </div>
    )
}