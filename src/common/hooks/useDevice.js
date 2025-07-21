import {useWindowSize} from "./useWindowSize";
import {useEffect, useState} from "react";
import {theme} from "../theme";

export const useDevice = () => {
    const { width } = useWindowSize();
    const [device, setDevice] = useState('desktop');

    useEffect(() => {
        if (width <= theme.device.mobile) {
            setDevice('mobile');
        } else if (width <= theme.device.tablet) {
            setDevice('tablet');
        } else {
            setDevice('desktop');
        }
    }, [width]);

    return device;
};