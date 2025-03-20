import { useEffect, useState } from "react";

const useDocumentTitle = (initialValue) => {
    const [title, setTitle] = useState(initialValue);

    useEffect(() => {
        document.title = title;
    }, [title]);

    return [title, setTitle];
};

export default useDocumentTitle;
