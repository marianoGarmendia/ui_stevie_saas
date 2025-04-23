import { createContext, useContext } from "react";

export const voiceContext = createContext();

export function useVoice() {
    const voiceContextValues = useContext(voiceContext);
    return voiceContextValues;
}