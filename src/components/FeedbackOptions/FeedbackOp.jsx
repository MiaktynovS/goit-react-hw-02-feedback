import PropTypes from 'prop-types';

export const FeedbackOption = ({ options, onLeaveFeedback }) => {
    return(
        <ul>{options.map(option => (
            <li key={option}>
                <button
                type='button'
                name={option}
                onClick={onLeaveFeedback}>{option}</button>
            </li>
        ))}
            
        </ul>
        )
}

FeedbackOption.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}