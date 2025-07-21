import {Column, CommonWrapper} from "../common/components/CommonWrapper";
import {useDevice} from "../common/hooks/useDevice";

export function MainWrapper({children}) {
    const currentDevice = useDevice();

    if (currentDevice === "mobile" || currentDevice === "tablet") {
        return <CommonWrapper height={'100vh'}>{children}</CommonWrapper>
    } else {
        return (
            <Column>
                <CommonWrapper width={'768px'} height={'100vh'}>{children}</CommonWrapper>
            </Column>
        );
    }


}