import { useState } from "react"
import { Day } from "./Day"

export function Week({ week, weeknumber }) {
    const [currentWeek, setCurrentWeek] = useState(week)

    return (
        <div className={"week"}>
            {currentWeek.flat().map((day, i) => {
                return <Day key={i} />
            })}
        </div>
    )
}