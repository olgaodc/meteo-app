export const customStyles = {
  container: (provided) => ({
    ...provided,
    maxWidth: "600px",
    margin: "10px auto 0",
  }),
  control: (provided) => ({
    ...provided,
    cursor: "pointer",
    outline: "none",
    border: "none",
    boxShadow: "none",
    "&:focused": {
      border: "none",
      boxShadow: "none",
    },
  }),
  menu: (provided) => ({
    ...provided,
    padding: "0",
    border: "none",
    boxShadow: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    backgroundColor: state.isSelected ? "#0066FF" : provided.backgroundColor,
  }),
};
