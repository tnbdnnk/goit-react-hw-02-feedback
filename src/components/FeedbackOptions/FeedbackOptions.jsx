import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul>
            {options.map(item => {
                return (
                    <li key={item}>
                        <button type="button" onClick={onLeaveFeedback}>
                            {item}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired,
};