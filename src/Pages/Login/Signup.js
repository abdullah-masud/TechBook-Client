import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import loginbg from '../../assets/images/loginbg.png'
import { FcGoogle } from "react-icons/fc";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useUser from '../../hooks/useUser';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [createUserWithEmailAndPassword, emailUser, emailLoading, emailError] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [user] = useUser(googleUser || emailUser);

    let errorElement;
    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    if (emailLoading || googleLoading || updating) {
        return <Loading />
    }

    if (emailError || googleError || updateError) {
        errorElement = <p className='text-red-500'><small>{emailError?.message || googleError?.message || updateError?.message}</small></p>
    }

    if (user) {
        navigate(from, { replace: true });

    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
    };



    return (
        <div className=' px-2 flex min-h-screen justify-center items-center' /* style={{ backgroundImage: `url(${loginbg})` }} */>
            <div className="card w-96 bg-base-100 shadow-xl ">
                <div className="card-body">
                    <h2 className="card-title text-center block">Signup</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Name Field Starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        {/* Name Field Ends */}

                        {/* Email Field Starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {/* Email Field Ends */}

                        {/* Password Field Starts */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="Password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters of longer'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {/* Password Field Ends */}

                        {errorElement}
                        <input type="submit" className='btn btn-primary text-white w-full max-w-xs' value='Signup' />
                    </form>

                    <p className='text-center font-semibold'><small>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></small></p>
                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-primary">
                        <span className='mr-2'><FcGoogle /></span>
                        Continue With Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;