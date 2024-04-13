import css from "./SearchBox.module.css";
import { TbSearch } from "react-icons/tb";

const SearchBox = ({ searchValue, handleChange }) => {
  return (
    <label className={css.box}>
      <span className={css.text}>
        <TbSearch className={css.icon} />
        Find contacts by name
      </span>
      <input
        className={css.input}
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={handleChange}
      />
    </label>
  );
};

export default SearchBox;
