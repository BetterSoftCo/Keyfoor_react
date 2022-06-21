import { HTMLAttributes, memo, ReactElement, useCallback, MouseEvent } from "react";
import { Link } from "react-router-dom";
import { IconArrow, ImageUser, ImgAvatar } from "../../assets";

export interface Props extends HTMLAttributes<HTMLDivElement> {
    image: string;
    name: string;
    accountName: string;
    location: string;
}

export function ButtonManager({ onClick, image, name, accountName, location }: Props): ReactElement {

    const handleOnClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        onClick?.(event);
    }, [onClick]);

    return (
        <div className="button-manager" onClick={handleOnClick}>
            <div className="section-user">
                <img src={image} alt="" className="image-user" />
                <div>
                    <h5 className="name-user">
                        {name}
                    </h5>
                    <h6 className="id-user">
                        {accountName}
                    </h6>
                </div>
            </div>
            {location === "" || location.trim() === " " ? (null) : (
                <Link to={location}>
                    <img src={IconArrow} alt="" className="icon-arrow" />
                </Link>
            )}
        </div>
    );
}

export default memo(ButtonManager);