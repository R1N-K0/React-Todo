import { useState } from "react";

export default function useText() {
    const [text, setText] = useState<string>("");    
    return {text, setText}
}