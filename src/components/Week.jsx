import { useState } from "react"
import { Day } from "./Day"
import dayjs from "dayjs"

export function Week({ week, weekNumber, updateYear }) {
    const [currentWeek, setCurrentWeek] = useState(week)

    function updateWeek(weekIndex, day) {
        let thisWeek = [...currentWeek].flat()
        thisWeek[weekIndex] = day
        setCurrentWeek(thisWeek)

        updateYear(weekNumber, thisWeek)
    }

    return (
        <section className={"week"} data-aos={"flip-up"} data-aos-mirror={'true'}>
            {currentWeek.flat().map((day, i) => {
                return <Day weekIndex={i} key={(i + 1) + (weekNumber * 7)} daynumber={(i + 1) + (weekNumber * 7)} day={day} updateWeek={updateWeek} dayName={dayjs().day(i).format('dd')} />
            })}
        </section>
    )
}