import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function CommonButton(props) {
    const { primary, onClick, color, content } = props;

    return (
        <Button basic primary={primary} onClick={onClick} color={color}>{content}</Button>
    );
}

CommonButton.propTypes = {  
    primary: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string,
    content: PropTypes.string.isRequired,
}

export default CommonButton;