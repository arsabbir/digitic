const CustomInput = (props) => {
  const {
    type,
    label,
    i_id,
    i_class,
    name,
    val,
    onChg,
    onBlr,
    color = "text-secondary",
  } = props;
  return (
    <div className="form-floating mt-3">
      <input
        type={type}
        className={`form-control   ${(i_class, color)}`}
        id={i_id}
        placeholder={label}
        name={name}
        value={val}
        onChange={onChg}
        onBlur={onBlr}
      />
      <label className={`${color}`} htmlFor={label}>
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
