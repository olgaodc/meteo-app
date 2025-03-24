export const customStyles = {
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
  option: (provided) => ({
    ...provided,
    cursor: "pointer",
  }),
};
