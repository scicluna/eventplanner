import { useState } from "react"
import { Week } from "./Week"


export function Year() {
    const [weeks, setWeeks] = useState(Array(52).fill([Array(7).fill(null)]))

    console.log(weeks)
    return (
        <div className={"yearly"}>
            {weeks.map((week, i) =>
                <Week key={i} weeknumber={i} week={week} />)}
        </div>
    )
}