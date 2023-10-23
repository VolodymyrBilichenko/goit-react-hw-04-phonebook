import { styled } from "styled-components";

export const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;

    .form__btn{
        width: 100%;
        max-width: 300px;
        outline: none;
        background-color: transparent;
        border: 1px solid #9B59B6;
        margin: 0 auto;
        padding: 10px;
        color: #EAEAEA;
        font-size: 15px;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover{
            background-color: #9B59B6;
        }
    }
`