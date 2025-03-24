import AsyncSelect from "react-select/async";
import styles from "./styles.module.scss";

const SearchableSelect = ({ loadOptions, onChange, selectedOption }) => {
  return (
    <div className={styles.selectWrapper}>
      <AsyncSelect
        placeholder="Search"
        isClearable
        loadOptions={loadOptions}
        onChange={onChange}
        value={selectedOption}
        loadingMessage={() => "Loading..."}
        noOptionsMessage={() => "No results"}
      />
    </div>
  );
};

export default SearchableSelect;
