import {useNavigate} from "react-router-dom";

export function useWelcomePage() {
    const navigate = useNavigate();

    return { navigate };
}