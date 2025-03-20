import { useState } from "react";

const useClipboard = (initialValue) => {
    const [clipboard, setClipboard] = useState(initialValue);

    const readClipboard = async () => {
        try {
            const text = await navigator.clipboard.readText();
            setClipboard(text);
        } catch (error) {
            console.error("Không thể đọc clipboard", error);
        }
    };

    return [clipboard, readClipboard];
};

export default useClipboard;
