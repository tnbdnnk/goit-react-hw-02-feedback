import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
    <div className=''>
        <h2 className=''>{title}</h2>
        {children}
    </div>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};