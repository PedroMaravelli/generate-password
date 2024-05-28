import { CardContainer, GenerateContainer, HeaderContainer, InputNumbers, Inputs, InputsForm, LeftAndRightCardContainer, LeftContentCard, RightContentCard } from "./style";

export function GeneratePassword(){
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
                            <label htmlFor="simbolos">Caracteres Especiais </label>
                            <InputNumbers>
                                <Inputs type="button" name="simbolos" id="simbolos" value="Sim" />
                                <Inputs type="button" name="simbolos" id="simbolos" value="Não" />
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
                        <input type="text"/>
                        <button type="submit">Gerar Senha </button>
                    </RightContentCard>
                </LeftAndRightCardContainer>

        
                
            </CardContainer>

        </GenerateContainer>
    )
}