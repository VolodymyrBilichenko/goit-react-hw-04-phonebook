const { styled } = require("styled-components")

export const ContactsStyle = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 0;
    .contacts__item{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        width: 100%;
    }

    .contacts__number{
        width: 100px;
        max-width: 150px;
        font-size: 18px;
        color: #EAEAEA;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }
    .contacts__name{
        text-align: center;
        width: 100%;
        max-width: 265px;
        font-size: 18px;
        color: #EAEAEA;
        font-family: Georgia, 'Times New Roman', Times, serif;
    }

    .contacts__delete{
        width: 100%;
        max-width: 120px;
        outline: none;
        background-color: transparent;
        border: 1px solid #9B59B6;
        padding: 5px 10px;
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