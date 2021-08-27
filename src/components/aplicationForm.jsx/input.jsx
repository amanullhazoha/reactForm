import PropTypes from 'prop-types';
import { Col } from '../farmwork';

const Input = ({ className, idName, label, type, name, value, placeholder, handelChange }) => {
    return (
        <Col grid={className}>
            <div>
                <label htmlFor={idName}>{label}</label>
            </div>
            <input
                type={type}
                id={idName}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={handelChange}
            />
        </Col>
    );

    // eslint-disable-next-line no-unreachable
    Input.propTypes = {
        // eslint-disable-next-line react/require-default-props
        className: PropTypes.string,
        idName: PropTypes.string.isRequired,
        // eslint-disable-next-line react/require-default-props
        label: PropTypes.string,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        // eslint-disable-next-line react/require-default-props
        placeholder: PropTypes.string,
        handelChange: PropTypes.func.isRequired,
    };
};

export default Input;
