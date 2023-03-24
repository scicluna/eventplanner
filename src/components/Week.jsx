import { useState } from "react"
import { Day } from "./Day"

export function Week({ week, weeknumber }) {
    const [currentWeek, setCurrentWeek] = useState(week)



    return (
        <div className={"week"} data-aos={"flip-up"} data-aos-mirror={'true'}>
            {currentWeek.flat().map((day, i) => {
                return <Day key={(i + 1) + (weeknumber * 7)} daynumber={(i + 1) + (weeknumber * 7)} day={day} />
            })}
        </div>
    )
}