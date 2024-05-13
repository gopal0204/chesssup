import React from 'react';
import styled, { css } from 'styled-components';

import GridLayoutContainer from '../../containers/game/GridLayoutContainer';
import SummaryContainer from '../../containers/game/SummaryContainer';
import CreationContainer from '../../containers/game/CreationContainer';

const GameLayoutBlock = styled.div`
    height: 800px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const sideBlockStyle = css`
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20%;
    border-radius: 10px; /* Rounded edges */
    background-color: white;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
`;

const LeftSideBlock = styled.div`
    ${sideBlockStyle}
    margin-right: 1%;
`;

const RightSideBlock = styled.div`
    ${sideBlockStyle}
    margin-left: 1%;
`;

const GameLayout = () => {
    return (
        <>
            <GameLayoutBlock>
                <LeftSideBlock>
                    <SummaryContainer />
                </LeftSideBlock>
                <GridLayoutContainer />
                <RightSideBlock>
                    <CreationContainer />
                </RightSideBlock>
            </GameLayoutBlock>          
        </>
    )
};

export default React.memo(GameLayout);