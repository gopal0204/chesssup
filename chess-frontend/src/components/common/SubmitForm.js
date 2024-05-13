import React from 'react';
import styled, { css } from 'styled-components';

const SubmitFormBlock = styled.form`
    display: flex;
`;

const buttonStyle = css`
    outline: none;
    background-color: rgb(0,0,0, 0.2);
    padding: 0px;
    border: none;
    width: 200px;
    height: 30px;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); /* Adjusted shadow */
    border-radius: 5px; /* Rounded edges */

    &:hover {
        background-color: rgb(0,0,0, 0.8);
        color: white;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5); /* Adjusted shadow */
    }
`

const ConfirmButtonBlock = styled.button`
    ${buttonStyle}
`;

const CancelButtonBlock = styled.button`
    ${buttonStyle}
    margin-left: 20px;
`;

const SubmitForm = ({ onConfirmClick, onCancelClick }) => {
    return (
        <SubmitFormBlock onSubmit={onConfirmClick}>
            <ConfirmButtonBlock type='submit'>
                Create Game
            </ConfirmButtonBlock>
            <CancelButtonBlock
                type='button'
                onClick = {onCancelClick}
            >
                Cancel
            </CancelButtonBlock>
        </SubmitFormBlock>
    )
};

export default React.memo(SubmitForm);