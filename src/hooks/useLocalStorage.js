import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const saveValue = localStorage.getItem(key);
    const [value, setValue] = useState(
        saveValue ? JSON.parse(saveValue) : initialValue
    );

    const setSaveValue = (newValue) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setSaveValue];
};

export default useLocalStorage;
