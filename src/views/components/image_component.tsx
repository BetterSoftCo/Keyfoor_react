import { ReactElement, memo } from "react";
import { Star, User2 } from "../../assets";
interface Props {
  image: string;
  width: string;
  height: string;
}

function ImageComponent({ image, width, height }: Props): ReactElement {
  return (
    <div
      className="Image-Component"
      style={{ backgroundImage: "url(" + image + ")", width, height }}
    >
      <div className="items-image">
        <div className="persons">
          <span className="text-persons">3-10</span>
          <img src={User2} alt="2user" className="icon-persons" />
        </div>
        <div className="rate">
          <span className="text-rate">6.25/10</span>
          <img src={Star} alt="star" className="icon-star" />
        </div>
      </div>
    </div>
  );
}

export default memo(ImageComponent);
