import styled from "styled-components"

const Conatainer = styled.div `
display: flex;
flex-direction: row;
div {
height: 2em;
width: .2em;
background: rgba(12, 75, 238, 0.6);
border-radius: 20px;
}
`
export default function Comp1(Props){
    return (
        <Conatainer>
            <div style={{marginRight: '10px'}}></div>
            {Props.nome}
        </Conatainer>
    )
}