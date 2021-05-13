import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Field } from "react-final-form";

const PAGE_ONE = "Page_One";

const addInfo = (custName, custEmail) => {
  return {
    type: PAGE_ONE,
    name: custName,
    email: custEmail,
  };
};

const initialState = {
  name: "",
  email: "",
};

const page1Reducer = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_ONE:
      return {
        ...state,
        name: action.name,
        email: action.email,
      };
    default:
      return state;
  }
};

// the hooks

const onSubmit = (history) => (event) => {
  var custName = event.name;
  window.alert(custName);
  console.log(event);

  const dispatch = useDispatch();
  dispatch(addInfo(event.name, event.email));

  history.push("/page2");
};

// const Page1Hook = (history) => {
//   const name = useSelector((state) => state.name);
//   const email = useSelector((state) => state.email);

//   return (
//     <Form
//       onSubmit={onSubmit(history)}
//       // validate={validate}
//       render={({ handleSubmit }) => (
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>First Name</label>
//             <Field
//               name="name"
//               component="input"
//               placeholder="name"
//               value={name}
//             />
//           </div>
//           <div>
//             <label>First Name</label>
//             <Field
//               name="email"
//               component="input"
//               placeholder="email"
//               value={email}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//       )}
//     />
//   );
// };

// export default Page1Hook;

export { page1Reducer };
