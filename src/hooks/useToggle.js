import { useState } from "react";

const useToggle = (initialValue) => {
    const [open, setOpen] = useState(initialValue);

    return [open, () => setOpen(!open)];
};

export default useToggle;
