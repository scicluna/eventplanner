import dayjs from "dayjs"
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

export function Calendar() {

    function getOffset(el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < 0) return { top: rect.top + window.scrollY - 50 }
        else return { top: rect.top + window.scrollY }
    }

    function snapToDate(e) {
        const dayNum = dayjs(e.target.value).dayOfYear()
        const yOffset = getOffset(document.querySelector(`[data-day="${dayNum}"]`)).top
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }

    return (
        <button className={'icon'}>
            <input type={'date'} onChange={snapToDate}></input>
            <h3><svg xmlns={"http://www.w3.org/2000/svg"} width={"50"} height={"50"} fill={"currentColor"} className={"bi bi-calendar"} viewBox={"0 0 16 16"}>
                <path d={"M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"} />
            </svg></h3>
        </button>
    )
}