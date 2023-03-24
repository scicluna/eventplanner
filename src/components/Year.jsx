import { useState } from "react"
import { Week } from "./Week"


export function Year() {
    const [year, setYear] = useState(Array(52).fill([Array(7).fill(null)]))

    return (
        <div className={"giantgrid"}>
            {year.map((week, i) =>
                <Week key={i} weeknumber={i} week={week} />)}
        </div>
    )
}