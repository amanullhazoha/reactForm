/* eslint-disable jsx-a11y/no-onchange */
import PropTypes from 'prop-types';
import { Col } from '../farmwork';

const Option = ({ className, idName, name, label, value, option, handelChange }) => {
    return (
        <Col grid={className}>
            <div>
                <label htmlFor={idName}>{label}</label>
            </div>
            <select value={value} onChange={handelChange} name={name}>
                {option.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
        </Col>
    );

    // eslint-disable-next-line no-unreachable
    Option.propTypes = {
        // eslint-disable-next-line react/require-default-props
        className: PropTypes.string,
        idName: PropTypes.string.isRequired,
        // eslint-disable-next-line react/require-default-props
        label: PropTypes.string,
        // eslint-disable-next-line react/forbid-prop-types
        option: PropTypes.array.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        handelChange: PropTypes.func.isRequired,
    };
};

export default Option;
