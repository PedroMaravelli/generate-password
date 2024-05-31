import { useContext, useState } from "react";
import { CardContainer, GenerateContainer, InputNumbers, Inputs, InputsForm, LeftAndRightCardContainer, LeftContentCard, RightContentCard } from "./style";
import { GenerateContext } from "../context/generateContext";
import { useForm } from "react-hook-form";


interface PasswordProps {
    length: number
    numbers: string
    symbols: string
    uppercase: string
    
}

export function GeneratePassword(){

    const {password, generatePasswordByData} = useContext(GenerateContext)

    const {register, handleSubmit} = useForm<PasswordProps>()

    const [length, setLength] = useState()
    const [numbers, setNumbers] = useState<boolean>(false)
    const [symbols, setSymbols] = useState<boolean>(false)
    const [uppercase, setUppercase] = useState<boolean>(false)

    


    async function handleGetPasswordProps(data: PasswordProps){
        setLength(data.length)

        if(data.numbers === "Sim"){
            setNumbers(true)
        }
        if(data.symbols === "Sim"){
            setSymbols(true)
        } if(data.uppercase === "Sim"){
            setUppercase(true)
        }

        console.log(length, numbers, symbols, uppercase)

        await generatePasswordByData({length, numbers, symbols, uppercase})


    }

    
    

    return(
        <GenerateContainer>
            <CardContainer method="get" onSubmit={handleSubmit(handleGetPasswordProps)}>
                
                    <h1>Gerador de Senhas </h1>
                    <article></article>
                
                <LeftAndRightCardContainer>

                
                    <LeftContentCard>
                        <InputsForm>
                            <label htmlFor="length">Tamanho</label>
                            <input type="number" min={3} max={20} required id="length" {...register("length")} />
                        </InputsForm>

                        <InputsForm>
                            <label htmlFor="number">Números</label>
                            <InputNumbers>
                                <Inputs type="button"  id="number" value="Sim" {...register("numbers")}  />
                                <Inputs type="button"  id="number" value="Não" />
                            </InputNumbers>

                        </InputsForm>
                        

                    </LeftContentCard>
                    <LeftContentCard>
                        <InputsForm>
                            <label htmlFor="symbols">Caracteres Especiais </label>
                            <InputNumbers>
                                <Inputs type="button" id="symbols" value="Sim" {...register("symbols")}  />
                                <Inputs type="button" id="symbols" value="Não"  />
                        </InputNumbers>

                        </InputsForm>

                        <InputsForm>
                            <label htmlFor="uppercase">Letras Maiúsculas</label>
                            <InputNumbers>
                                <Inputs type="button" id="uppercase" value="Sim"  {...register("uppercase")} />
                                <Inputs type="button" id="uppercase" value="Não"  />
                            </InputNumbers>

                        </InputsForm>
                    </LeftContentCard>

                    <RightContentCard>
                        <p>Senha</p>
                        <input type="text" value={password}/>
                        <button type="submit">Gerar Senha </button>
                    </RightContentCard>
                </LeftAndRightCardContainer>

        
                
            </CardContainer>

        </GenerateContainer>
    )
}