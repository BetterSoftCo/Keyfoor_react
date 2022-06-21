import { useCallback, useState } from "react";
import { CloseCircle, GroupDot, LampSlash, Trash } from "../../assets";

function Open_Button() {
  const [showMenu, setShowMenu] = useState(false);

  function handleOpenMenu() {
    setShowMenu(true);
  }
  function handleCloseMenu() {
    setShowMenu(false);
  }
  return (
    <div className="Open-Button">
      {showMenu === true ? (
        <div className="items">
          <img src={LampSlash} alt="lampSlash" />
          <img src={Trash} alt="trash" />
          <img src={CloseCircle} alt="closeCricle" onClick={handleCloseMenu} />
        </div>
      ) : (
        <img
          src={GroupDot}
          alt="groupDot"
          className="image-group-dot"
          onClick={handleOpenMenu}
        />
      )}
    </div>
  );
}

export default Open_Button;
