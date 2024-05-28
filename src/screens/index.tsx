import { useContext } from "react";
import { CardContainer, GenerateContainer, InputNumbers, Inputs, InputsForm, LeftAndRightCardContainer, LeftContentCard, RightContentCard } from "./style";
import { GenerateContext } from "../context/generateContext";

export function GeneratePassword(){

    const {password, generatePasswordByData} = useContext(GenerateContext)

    return(
        <GenerateContainer>
            <CardContainer>
                
                    <h1>Gerador de Senhas </h1>
                    <article></article>
                
                <LeftAndRightCardContainer>

                
                    <LeftContentCard>
                        <InputsForm>
                            <label htmlFor="lenght">Tamanho</label>
                            <input type="number" min={3} max={20} name="lenght" required id="lenght" />
                        </InputsForm>

                        <InputsForm>
                            <label htmlFor="number">Números</label>
                            <InputNumbers>
                                <Inputs type="button" name="number" id="number" value="Sim" />
                                <Inputs type="button" name="number" id="number" value="Não" />
                            </InputNumbers>

                        </InputsForm>
                        

                    </LeftContentCard>
                    <LeftContentCard>
                        <InputsForm>
                            <label htmlFor="symbols">Caracteres Especiais </label>
                            <InputNumbers>
                                <Inputs type="button" name="symbols" id="symbols" value="Sim" />
                                <Inputs type="button" name="symbols" id="symbols" value="Não" />
                        </InputNumbers>

                        </InputsForm>

                        <InputsForm>
                            <label htmlFor="uppercase">Letras Maiúsculas</label>
                            <InputNumbers>
                                <Inputs type="button" name="uppercase" id="uppercase" value="Sim" />
                                <Inputs type="button" name="uppercase" id="uppercase" value="Não" />
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