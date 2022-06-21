import { Search } from "../../assets";
import { SearchCardButtom } from "./search_card_buttom";
interface Iprops {
  FocusInput: () => void;
  isShow: boolean;
}
function InputSearch({ FocusInput, isShow }: Iprops) {
  return (
    <>
      <div
        className={
          isShow
            ? "input-search-focus d-flex flex-row align-items-center"
            : "input-search d-flex flex-row align-items-center"
        }
      >
        <img src={Search} alt="search" className="mx-3" />
        <input
          type="search"
          className="input"
          placeholder="جستجو"
          onClick={FocusInput}
        />
      </div>
    </>
  );
}

export default InputSearch;
