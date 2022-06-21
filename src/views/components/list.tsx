import {HTMLAttributes, ReactElement, memo, useCallback, MouseEvent} from "react";

export interface Props extends HTMLAttributes<HTMLElement> {
    name: string;
    active: boolean;
}

export function ListItem({children, name, onClick, active}: Props): ReactElement {
    const handleOnClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        onClick?.(event);
    }, [onClick]);
    return <div className="list-item d-flex align-items-center" onClick={handleOnClick}>
        {children}
        <h5 className={active ? "active-text-icon-item" : "text-icon-item"}>{name}</h5>
    </div>;
}

export default memo(ListItem);