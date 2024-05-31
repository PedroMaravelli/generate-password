import { ReactNode, createContext, useState } from "react";
import * as generator from 'generate-password'


interface GenerateContextProps{
    password: string;
    generatePasswordByData: (props : PasswordProps ) => void;
}

export const GenerateContext = createContext({} as GenerateContextProps )

interface GenerateProviderProps{
    children: ReactNode
}

interface PasswordProps{
    length: number
    numbers: boolean
    symbols: boolean
    uppercase: boolean

}

export function GenerateProvider({children}: GenerateProviderProps ){

    const [password, setPassword] = useState('')


    async function generatePasswordByData({length, numbers, symbols, uppercase}: PasswordProps){
        const passwordGenerate = generator.generate({
            length,
            numbers,
            symbols,
            uppercase,
        })

        await setPassword(passwordGenerate)
    }


    return(
        <GenerateContext.Provider value={{
            password,
            generatePasswordByData,

        }}>
            {children}

        </GenerateContext.Provider>
    )
}