import { title } from "process";
import {ButtonHTMLAttributes, MouseEvent, memo, ReactElement, useCallback} from "react";
import { IconArrowWhite } from "../../assets";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    titleButton: string;
}

export function ButtonIcon({onClick, titleButton}: Props): ReactElement {
    
    const handleOnClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        onClick?.(event);
    }, [onClick]);
    
    return (
        <button className="button-icon" onClick={handleOnClick}>
            <img src={IconArrowWhite} alt="" className="icon-arrow"/>
            <h5 className="title">
                {titleButton}
            </h5>
        </button>
    );
}

export default memo(ButtonIcon);