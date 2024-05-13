import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: lightblue ; /* Background color similar to chess.com */
    border-radius: 10px; /* Rounded corners */
    padding: 10px 20px; /* Padding added */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Shadow effect */
    @media screen and (max-width: 768px) {
        padding: 1rem; /* Adjust padding for smaller screens */
    }

    @media screen and (max-width: 576px) {
        flex-direction: column; /* Stack items vertically on smaller screens */
        height: auto; /* Allow height to adjust based on content */
    }
`;

const titleStyle = css`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 40px;
    background-color: transparent;
    cursor: pointer;
    font-size: 30px;
    text-decoration: none;
    text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.2);
    font-style: italic;
`;

const TitleBlock = styled(Link)`
    ${titleStyle}
    color: #000; /* Black color for title */
`;

const TitleFadeBlock = styled(Link)`
    ${titleStyle}
    color: rgb(0, 0, 0, 0.8);
`;

const ControllBlock = styled.div`
    display: flex;
    align-items: center;
`;

const GroupBlock = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
    display: flex;

`;

const TabBlock = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    font-size: 16px;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.6);
    margin-left: 20px;
    
`;

const TabLinkBlock = styled(Link)`
    ${TabBlock}
    text-decoration: none;
    text-decoration: none; /* Removes underline */
    color: rgba(0, 0, 0, 0.6);
    position: relative;
    margin-left: 20px;

    ${props => props.hidden && css`
        display: none;
        visibility: hidden;
    `};
`;

const Tab = props => {
    if(props.to) {
        return (
            <TabLinkBlock {...props}>
                {props.children}
            </TabLinkBlock>
        )
    } else {
        return (
            <TabBlock {...props}>
                {props.children}
            </TabBlock>
        )
    }
}

const AuthBlock = styled.div`
    display: flex;
    align-items: center;
`;

const UserWelcomeBlock = styled.div`
    position: absolute;
    top: 10%;
    left: 0%;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 10px;
    color: rgb(0, 0, 0, 0.4);
`

const Header = ({
    onRecord,
    onLogout,
    onLogin,
    tempAuth,
    auth
}) => {
    let username;
    
    if(tempAuth) {
        username = tempAuth.nickname;
    };

    if(auth) {
        username = auth.username;
    };

    return (
        <>
            <HeaderBlock>
                <ControllBlock>
                    <TitleBlock to='/'>
                        chesssup
                    </TitleBlock>
                    <TitleFadeBlock to='/'>
                        .com
                    </TitleFadeBlock>
                    <GroupBlock>
                        <Tab to='/game'>
                            Play
                        </Tab>
                        <Tab to='/community'>
                            Community
                        </Tab>
                    </GroupBlock>
                </ControllBlock>
                <AuthBlock>
                    <Tab onClick={onRecord}>
                        Search
                    </Tab>
                    {auth ? (
                        <>
                            <Tab onClick={onRecord}>
                                Setting
                            </Tab>
                            <Tab onClick={onRecord}>
                                Record
                            </Tab>
                            <Tab onClick={onLogout}>
                                Logout
                                <UserWelcomeBlock>
                                    {username}
                                </UserWelcomeBlock>
                            </Tab>
                        </>
                    ):(
                        <Tab onClick={onLogin}>
                            Login
                            <UserWelcomeBlock>
                                {username}
                            </UserWelcomeBlock>
                        </Tab>
                    )}
                </AuthBlock>
            </HeaderBlock>
           
        </>
    )
};

//  <GamesModalContainer
//  openModal={openModal}
//  setOpenModal={setOpenModal}
//  />

export default React.memo(Header);