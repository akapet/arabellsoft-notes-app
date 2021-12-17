import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function CommonButton(props) {
    const { primary, onClick, color, content, positive, negative, disabled, dataTestId } = props;

    return (
        <Button 
            basic 
            primary={primary} 
            onClick={onClick} 
            color={color}
            positive={positive}
            negative={negative}
            disabled={disabled}
            data-testid={dataTestId}
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
    dataTestId: PropTypes.string,
}

export default CommonButton;