import PropTypes  from "prop-types";
import s from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentag }) => {
    return(
        <ul className={s.list}>
            <li>good:{good}</li>
            <li>neutral:{neutral}</li>
            <li>bad:{bad}</li>
            <li>total:{total}</li>
            <li>positivePercentag:{positivePercentag}%</li>
        </ul>
       
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentag: PropTypes.string.isRequired,
}