import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function CommonButton(props) {
    const { primary, onClick, color, content, positive, negative, disabled } = props;

    return (
        <Button 
            basic 
            primary={primary} 
            onClick={onClick} 
            color={color}
            positive={positive}
            negative={negative}
            disabled={disabled}
        >
            {content}
        </Button>
    );
}

CommonButton.propTypes = {  
    primary: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    color: PropTypes.string,
    content: PropTypes.string.isRequired,
    positive: PropTypes.bool,
    negative: PropTypes.bool,
    disabled: PropTypes.bool,
}

export default CommonButton;