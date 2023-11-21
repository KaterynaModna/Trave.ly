import { useState } from "react"

// const UserObject = {
//     user_name: 'Margaret Brown',
//     user_phone: '+380666666666',
//     user_email: 'margaret_b@gmail.com'
// }

export default function UserForm() {

const [userData, setUserData] = useState({});
const onChangeHandler = (e) =>{
const {value, name} = e.target;
    setUserData({
        ...userData,
        [name]: value
    })
}
    
    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     defaultValues: {...userObj}
    // });

    // const onSubmitHandler = (data) => {
    //     console.log(data);
    // }

return (
    <form >
    <div className="form_wrapper">
        <input onChange={onChangeHandler}  className="form_input"  type="text" id="user_name" placeholder="First name" required/>
        <input onChange={onChangeHandler} className="form_input"   type="tel" id="user_phone" placeholder="+ 38 (_ _ _) _ _ _   _ _   _ _" required/>
        <input onChange={onChangeHandler} className="form_input"   type="email" id="user_email" placeholder="yourmail@gmail.com" required/>
            <button className="form_button" type="button">Book Consultation</button>
            </div>
        </form>
    )
    }