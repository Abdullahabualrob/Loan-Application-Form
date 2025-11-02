import { useState } from "react";
import Swal from "sweetalert2";
const Form = () => {
 
    const [form,setForm]=useState({ Name:"", phone:"", age:"",
      isEmployee:false  , selectedOption:"less than 500$" ,isDisabled:true })
    const handleSubmit=(e)=>{
e.preventDefault();

if(!form.isEmployee){
    Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields.',
        icon: 'error',       
        confirmButtonText: 'OK'
      }); 
      return;
}
const age = parseInt(form.age); 
if (isNaN(age) || age < 18 || age > 100) {
  Swal.fire({
    title: 'Invalid Age',
    text: 'Age must be between 18 and 100 years old.',
    icon: 'error',
    confirmButtonText: 'OK'
  });
  return;
}

const phoneDigits = form.phone.replace(/\D/g, "");
if (phoneDigits.length < 10 || phoneDigits.length > 12) {
  Swal.fire({
    title: 'Invalid Phone Number',
    text: 'Phone number must be between 10 and 12 digits.',
    icon: 'error',
    confirmButtonText: 'OK'
  });
  return;
}


Swal.fire({
    title: 'Success!',
    text: 'Form submitted successfully.',
    icon: 'success',
    confirmButtonText: 'OK'
  });
console.log("Form submitted");
setForm({
    Name: "",
    phone: "",
    age: null,
    isEmployee: false,
    selectedOption: "less than 500$",
    isDisabled: true
  });
    };
  

 
    return (
      <div className="Form">
<form onSubmit={handleSubmit}>
<h1>Requesting A Loan</h1> 
<hr/>
<br/>   
<label>Name:</label>  <br/>     
 <input type="text"  className="input" value={form.Name} onChange={(event)=>{
    setForm({...form,Name:event.target.value});
 }}/>
 <br/>
 <label>Phone Number:</label>  <br/>     
 <input type="tel" className="input"  value={form.phone}  onChange={(event)=>{
  setForm({...form,phone:event.target.value});  
 }}/>
 <br/>
 <label>Age:</label>  <br/>     
 <input type="number"  className="input" value={form.age} onChange={(event)=>{
     const newAge = event.target.value;
setForm(prevForm => ({
          ...prevForm,
          age: newAge,
          isDisabled: !(prevForm.Name.trim() !== "" && prevForm.phone.trim() !== "" && newAge !== "")
      }));
     
 }}/>
 <br/>
 <label>Are you an employee?</label>  <br/>     
 <input type="checkbox"  className="check" checked={form.isEmployee} onChange={(event)=>{
       setForm({...form,isEmployee:event.target.checked}); 
 }}/>
 <br/>
 <br/>
 <label>Salary:</label>  <br/>
 <select className="input" value={form.selectedOption} onChange={(event)=>{
      setForm({...form,selectedOption:event.target.value});  
 }}>
    <option value="less than 500$">less than 500$</option>
    <option value="between 500$ and 2000$">between 500$ and 2000$</option>
    <option value="above 2000$">above 2000$</option>
 </select>
 <br/>
 <br/>
<button type="submit" className="b"  disabled={form.isDisabled}

>submit</button>
</form>
   
    </div>
  );
};

export default Form;