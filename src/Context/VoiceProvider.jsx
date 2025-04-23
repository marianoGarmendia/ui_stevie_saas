import { useState } from "react";
import { voiceContext } from "./useVoices";

const VoiceProvider = ({ children }) => {
    const [firstLocutor, setFirstLocutor] = useState({type:null, option:null})


    const [secondLocutor, setSecondLocutor] = useState({type:null, option:null})

    return <voiceContext.Provider value={{ firstLocutor, setFirstLocutor, secondLocutor, setSecondLocutor }}>
        {children}
    </voiceContext.Provider>
}


export default VoiceProvider;