import { Form, Field } from "react-final-form";

const handler = () => {
  window.alert("shag balls");
  console.log("tohnation");
};
const onSubmit =() {
    windows.alert('submitted')
};

const MyForm = () => (
  <Form
    onSubmit={onSubmit}
    // validate={validate}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <h2>Simple Default Input</h2>
        <div>
          <label>First Name</label>
          <Field name="firstName" component="input" placeholder="First Name" />
        </div>

        <button type="submit" onclick={handler}>
          Submit
        </button>
      </form>
    )}
  />
);
