import styled from "styled-components";


export const GenerateContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`
export const CardContainer = styled.form`
    background-color:#474747 ;
    width: 70%;
    border-radius: 10px;
    padding-bottom: 4rem;
    display: flex;
    flex-direction: column;

    h1{
        color: white;
        text-align: center;
        font-size:1.8rem;
        margin-top: 2rem;
    }
    article{
        margin: 0 auto;
        border-bottom: 1px solid gray;
        width: 90%;
        margin-top: 1rem;
        margin-bottom: 1rem ;
    }

`
export const LeftAndRightCardContainer = styled.div`
    display: flex;
    width: 100%;

`

export const LeftContentCard = styled.div`
    display: flex;
    width: 50%;
    flex-wrap: wrap;

`
export const InputsForm = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    color: white;
    margin-top: 3rem;
    margin-left: 5rem;
    text-align: center;
    gap: 0.5rem;
    

    label{
        font-size: 1.4rem;
        font-weight: bold ;
        
    }

    input{
        width: 100%;
        height: 2rem;
        border-radius: 5px;
        background-color: gray;
        border: none;
        font-size: 1rem;
        font-weight:600;
        color: white;
        padding-left: 1rem;
    
    }


`
export const InputNumbers = styled.div`
    display: flex;
    gap: 0.5rem;

`
export const Inputs = styled.input`
    color: white;

    &:hover{
        opacity: 0.8;
    }
    &:focus{
        opacity: 0.6;
    }

`
export const RightContentCard = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;

    p{
        color: white;
        font-size: 1.3rem;
        margin-bottom: 0.6rem;
        font-weight: bold;
    }
    input{
        width: 70%;
        background-color: gray;
        border-radius: 5px;
        border: none;
        color: white;
        text-align: center;
        height: 2rem;
        padding-top: 0.2rem;
        margin-bottom: 3rem;
    }

    button{
        width: 50%;
        height: 2.2rem;
        border-radius: 5px;
        border: none;
        background-color:#3FCF4E ;
        color: white;
        font-size: 1.2rem;
        font-weight: bold;


        &:hover{
            opacity: 0.8;
        }
    }

`
