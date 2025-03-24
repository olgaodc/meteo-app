import AsyncSelect from "react-select/async";
import styles from "./styles.module.scss";
import { customStyles } from "./consts";

const SearchableSelect = ({
  defaultOptions,
  loadOptions,
  onChange,
  selectedOption,
}) => {
  return (
    <div className={styles.selectWrapper}>
      <AsyncSelect
        placeholder="Search city"
        isClearable
        default
        defaultOptions={defaultOptions}
        loadOptions={loadOptions}
        onChange={onChange}
        value={selectedOption}
        loadingMessage={() => "Loading..."}
        styles={customStyles}
      />
    </div>
  );
};

export default SearchableSelect;
