import PropTypes from 'prop-types';
import { Col } from '../farmwork';

const Textarea = ({ className, idName, label, name, value, placeholder, handelChange }) => {
    return (
        <Col grid={className}>
            <div>
                <label htmlFor={idName}>{label}</label>
            </div>
            <textarea
                id={idName}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handelChange}
            />
        </Col>
    );

    // eslint-disable-next-line no-unreachable
    Textarea.propTypes = {
        // eslint-disable-next-line react/require-default-props
        className: PropTypes.string,
        idName: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        handelChange: PropTypes.func.isRequired,
    };
};

export default Textarea;
