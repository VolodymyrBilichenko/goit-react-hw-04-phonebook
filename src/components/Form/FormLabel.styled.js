import { styled } from "styled-components";

export const FormLabel = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;

    .form__label{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 300px;
        color: #EAEAEA;
        font-size: 10px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    .form__input{
        border: none;
        outline: none;
        margin-top: 5px;
        color: #EAEAEA;
        background-color: transparent;
        border: 1px solid #9B59B6;
        height: 30px;
        border-radius: 10px;
        padding: 0 10px;
        font-size: 15px;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
`