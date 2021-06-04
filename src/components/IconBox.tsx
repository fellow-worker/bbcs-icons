import styled from 'styled-components';

export interface IconProps {
    title : string
}

export const Icon : React.FC<IconProps> = ({ title, children }) => {
    return (
        <Container>
            {children}
            <span>{title}</span>
        </Container>
    )
}

const Container = styled.div`
    height:128px;
    height:128px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FAFAFA;
    margin: 4px;
    flex: 0 0 128px;
    color: #222222;
`