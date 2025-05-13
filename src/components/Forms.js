import React, { useState, useEffect } from "react";
import { Form, Modal } from "react-bootstrap";
import Select from "react-select";
import { InstantCreate, ClickButton } from "./ClickButton";
import { BiPlus } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const TextInputForm = ({
  placeholder,
  name,
  type,
  suffix_icon,
  prefix_icon,
  labelname,
  value,
  onChange,
}) => {
  return (
    <>
      <div className="pb-2">{labelname ? <label>{labelname}</label> : ""}</div>
      <div className="form-icon">
        <Form.Group className="">
          {prefix_icon ? (
            <span className="prefix-icon">{prefix_icon}</span>
          ) : (
            ""
          )}
          <input
            type={type}
            placeholder={placeholder}
            name={name}
            className={`form-cntrl w-100 
                        ${
                          prefix_icon && suffix_icon
                            ? "form-control-padboth"
                            : prefix_icon
                            ? "form-control-padleft"
                            : suffix_icon
                            ? "form-control-padright"
                            : ""
                        }`}
            value={value}
            onChange={onChange}
          />
          {suffix_icon ? (
            <span className="suffix-icon">{suffix_icon}</span>
          ) : (
            ""
          )}
        </Form.Group>
      </div>
    </>
  );
};

const DropDown = ({ placeholder, optionlist, labelname }) => {
  return (
    <>
      <div className="pb-2">{labelname ? <label>{labelname}</label> : ""}</div>
      <div className="w-100 d-flex">
        <Select
          placeholder={placeholder}
          options={optionlist}
          labelField="title"
          valueField="value"
          multi
          className="w-100"
        ></Select>
        {/* <InstantCreate label={<BiPlus />} className='instant-add' onClick={console.log('I was triggered during render')}></InstantCreate> */}
      </div>
    </>
  );
};
// const DropDownUI = ({ optionlist = [], className, name, labelname, placeholder, value, onChange }) => {
//     const handleChange = (selectedOption) => {
//         const selectedValue = selectedOption.value;
//         if (selectedValue !== value) {
//             onChange({
//                 ...value,
//                 [name]: selectedValue
//             });

//         }
//     };
//     return (
//         <>
//             <div className='pb-2 px-3'>
//                 {labelname ? <label>{labelname}</label> : ""}
//             </div>
//             <div className='w-100 d-flex'>
//                 <Select
//                     placeholder={placeholder}
//                     options={optionlist}
//                     labelField='title'
//                     valueField='value'
//                     onChange={handleChange}
//                     multi className='w-100'>
//                 </Select>
//                 <InstantCreate label={<BiPlus />} className='instant-add' onClick={console.log('I was triggered during render')}></InstantCreate>
//             </div>
//         </>
//     )
// }
// const DropDownUI = React.forwardRef(({ optionlist = [], className, name, labelname, placeholder, value, onChange, isEdit }, ref) => {
//     const [selectedValue, setSelectedValue] = useState(value);
//     const handleChange = (selectedOption) => {

//         if (selectedOption != null) {
//             const selectedValue = selectedOption.value;
//             setSelectedValue(selectedValue);
//             onChange(selectedValue);
//         }
//     };

//     // Function to clear the dropdown value
//     const clearValue = () => {
//         if (!isEdit && ref && ref.current) {
//             ref.current.select.clearValue();
//             setSelectedValue(null);
//         }
//     };
//     useEffect(() => {
//         // Update the selected value when 'isEdit' changes

//         setSelectedValue(value);

//     }, [value]);

//     return (
//         <>
//             <div className='pb-2 px-3'>
//                 {labelname ? <label>{labelname}</label> : ""}
//             </div>
//             <div className='w-100 d-flex'>
//                 <Select
//                     ref={ref}
//                     placeholder={placeholder}
//                     options={optionlist}
//                     labelField='label'
//                     valueField='value'
//                     onChange={handleChange}
//                     value={selectedValue}
//                     multi
//                     className='w-100'

//                 />

//                 <InstantCreate label={<BiPlus />} className='instant-add' onClick={console.log()}></InstantCreate>
//             </div>
//         </>
//     );
// });
//
const DropDownUI = ({
  optionlist = [],
  name,
  labelname,
  placeholder,
  value,
  onChange,
}) => {
  const handleChange = (selectedOption) => {
    const selectedValue = selectedOption ? selectedOption.value : ""; // Handle null
    onChange({
      [name]: selectedValue,
    });
  };

  // Find the selected option based on the current value
  const selectedOption =
    optionlist.find((option) => option.value === value) || null;

  return (
    <>
      <div className="pb-2">{labelname ? <label>{labelname}</label> : ""}</div>

      <div className="w-100 d-flex">
        <Select
          placeholder={placeholder}
          options={optionlist}
          value={selectedOption} // Correctly map value to selectedOption
          onChange={handleChange}
          className="w-100"
          isClearable // Add clearable support
        />
      </div>
    </>
  );
};

// const Calender = ({ calenderlabel, name, value, onChange }) => {
//     const [startDate, setStartDate] = useState(new Date());
//     return (
//         <>
//             <div className='pb-2'>
//                 {calenderlabel && <label>{calenderlabel}</label>}
//             </div>
//             <DatePicker
//                 selected={value} // Use the provided value prop to control the date
//                 onChange={date => onChange({ target: { name, value: date } })} // Pass the formatted event object to the parent handler
//                 name={name}
//                 dateFormat='dd/MM/yyyy'
//                 className="w-100 form-cntrl"
//             />
//         </>
//     )
// }
// const Calender = ({ setLabel, calenderlabel, initialDate, disabled }) => {
//   const [startDate, setStartDate] = useState(new Date());

//   return (
//     <>
//       <div className="pb-2 px-3">
//         <label>{calenderlabel}</label>
//       </div>
//       <DatePicker
//         selected={startDate}
//         onChange={(date) => {
//           setStartDate(date);
//           setLabel(date, "interest_recive_date");
//         }}
//         dateFormat="dd/MM/yyyy"
//         className="w-100 form-cntrl"
//         selectsStart
//         startDate={startDate}
//       />
//     </>
//   );
// };
const parseDate = (dateString) => {
  if (!dateString) return new Date(); // Default to today if no date is provided
  const parts = dateString.split("/"); // Split the date string by '/'
  if (parts.length === 3) {
    const [day, month, year] = parts;
    return new Date(`20${year}-${month}-${day}`); // Convert to ISO format
  }
  return new Date(dateString); // Fallback for other valid formats
};

const Calender = ({ setLabel, calenderlabel, initialDate, disabled }) => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    if (initialDate) {
      const parsedDate = parseDate(initialDate); // Parse the date
      setStartDate(parsedDate);
    }
  }, [initialDate]);

  return (
    <>
      <div className="pb-2 px-3">
        <label>{calenderlabel}</label>
      </div>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          setLabel(date, "date");
        }}
        dateFormat="dd/MM/yyyy"
        className="w-100 form-cntrl"
        selectsStart
        startDate={startDate}
        disabled={disabled}
      />
    </>
  );
};

export { TextInputForm, DropDown, Calender, DropDownUI };
