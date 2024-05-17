import { createContext, useContext } from "react";
import RootStore from "../stores/rootStore";

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStores = () =>{
    const context = useContext(RootStoreContext)
    if(context === null) {
        throw new Error('Обыерните прилож в провайдер')
    }
    return context
}