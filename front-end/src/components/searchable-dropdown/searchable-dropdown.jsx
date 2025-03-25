import AsyncSelect from "react-select/async";
import { customStyles } from "./consts";
import Container from "../container/container";

const SearchableSelect = ({
  defaultOptions,
  loadOptions,
  onChange,
  selectedOption,
}) => {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
};

export default SearchableSelect;
