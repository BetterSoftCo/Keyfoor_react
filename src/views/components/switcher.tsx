import { ReactElement, memo, useCallback } from "react";
import { ChangeEvent } from "react";

interface Props {
  name?: string;
  handleCheked(value: boolean, event?: ChangeEvent): void;
  checked?: boolean;
}

function Switcher({ name, handleCheked, checked }: Props): ReactElement {
  const handleChangeToggle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleCheked(event.currentTarget.checked, event);
    },
    [handleCheked]
  );
  return (
    <div className="toggle">
      <div className="toggle-switch">
        <label className="switch">
          <input
            type="checkbox"
            name={name}
            onChange={handleChangeToggle}
            defaultChecked={checked}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default memo(Switcher);