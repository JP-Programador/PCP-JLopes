import styled from "styled-components"

const Conatainer = styled.div `
input {
    outline: black;
    height: 1em;
    margin-top: 5px;
        ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
}
`
export default function input(Props) {
    return (
        <Conatainer>
            {Props.nomes}
            <input type="" />
        </Conatainer>
    )
}