import { useHistory } from "react-router-dom";

export const usePush = () => {
    const history = useHistory();

    const handlePush = (route, duration) => {
        setTimeout(() => {
            history.push(`/${route}`);
        }, duration);
    };

    return { handlePush };
};