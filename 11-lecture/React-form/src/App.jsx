
import './App.css'
import { useForm } from 'react-hook-form';


function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors, isSubmitting},
  } = useForm();


  async function onSubmit(data){
    // API call ko simulate krna h 
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Submit the form", data);
  }

  return (
   <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label>First Name:</label>
       <input 
       className={errors.firstName ? "input-error" : ""}
       {...register("firstName",
       { required: true,
        minLength:{value: 2, message: "min length is 2"},
        maxLength:5
       }
       )} />
       {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
    </div>
    <br />
    <div>
      <label>Middle Name:</label>
       <input  
       className={errors.firstName ? "input-error" : ""}
       {...register("middleName")}  />
    </div>
    <br />
    <div>
      <label>Last Name:</label>
       <input 
       className={errors.firstName ? "input-error" : ""}
       {...register("lastName",
        {
          pattern:
          {value: /^[A-Za-z]+$/i, message: "Last name is not as per the rule"}
        }
       )} />
        {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
    </div>
    <br />
    <input type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />
   </form>
  );

  }
    export default App;
