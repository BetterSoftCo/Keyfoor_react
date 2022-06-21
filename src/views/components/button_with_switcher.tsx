import { HTMLAttributes, memo, ReactElement, useCallback, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { IconArrow, ImageUser, ImgAvatar } from "../../assets";
import Switcher from "./switcher";

export interface Props extends HTMLAttributes<HTMLDivElement> {
    icon: string;
    nameButton: string;
}

export function ButtonWithSwitcher({ onClick, icon, nameButton }: Props): ReactElement {

    const handleOnClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        onClick?.(event);
    }, [onClick]);

    return (
        <div className="button-with-swicher" onClick={handleOnClick}>
            <div className="section-user">
                <img src={icon} alt="" className="image-user" />
                <div>
                    <h5 className="name-user">
                        {nameButton}
                    </h5>
                </div>
            </div>
            <div>
                <Switcher handleCheked={() => {}} />
            </div>
        </div>
    );
}

export default memo(ButtonWithSwitcher);