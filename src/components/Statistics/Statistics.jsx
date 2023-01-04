import PropTypes  from "prop-types";
import s from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentag }) => {
    return(
        <ul className={s.list}>
            <li>Good:{good}</li>
            <li>Neutral:{neutral}</li>
            <li>Bad:{bad}</li>
            <li>Total:{total}</li>
            <li>Positive feedback:{positivePercentag}%</li>
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