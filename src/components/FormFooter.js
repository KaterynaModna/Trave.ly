import UserForm from './Form'
import { useForm } from "react-hook-form";

export default function FormFooter() {


    // const UserObject = {
    //     user_name: 'Margaret Brown',
    //     user_phone: '+380666666666',
    //     user_email: 'margaret_b@gmail.com'
    // }

    // const { register, handleSubmit, formState: { errors } } = useForm({
    //     defaultValues: {...UserObject}
    // });



    // const onChangeHandler = (e) => {
    //     const { value, name } = e.target

    //     setUserInfo({
    //         ...UserObject,
    //         [name]: value
    //     })
    // }
    // const onSubmitHandler = (data) => {
    //     console.log(data);
    // }



    return (
        <form className="form_section" id="form_section">
            <div className="section_main_text_wrapper">
                <h3 className="section_name">Fill Out the Form</h3>
                <span className="section_little_text">Write a brief description of your needs and receive a detailed
                    consultation from us.</span>
            </div>
            <div className="form_wrapper">
                <UserForm />
            </div>
        </form>
    )
}