import React from 'react';
import useForm from 'react-hook-form';

export default () => {
    const {register, errors, handleSubmit, watch} = useForm();

    function registerUser(values) {
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit(registerUser)}>
            <h3>
                Sign up
            </h3>

            <p>{errors.email && errors.email.message}</p>
            <p>{errors.password && errors.password.message}</p>
            <p>{errors.passwordConfirm && errors.passwordConfirm.message}</p>

            <label>
                <span>EMAIL</span>
                <input
                    name="email"
                    type="email"
                    ref={register({
                        required: 'Email Required'
                    })}
                />
            </label>

            <label>
                <span>PASSWORD</span>
                <input
                    name="password"
                    type="password"
                    ref={register({
                        required: 'Password Required'
                    })} />
            </label>

            <label>
                <span>CONFIRM PASSWORD</span>
                <input
                    name="passwordConfirm"
                    type="password"
                    ref={register({
                        validate: (value) => {
                            if(!value) {
                                return 'Confirm Password Required';
                            }

                            if(value !== watch('password')) {
                                return 'Passwords must match';
                            }
                        }
                    })} />
            </label>

            <button type="submit">
                GO
            </button>
        </form>
    )
}