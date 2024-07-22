import React, { useEffect, useState } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Signup = () => {
    const [eye, setEye] = useState(false);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);

    useEffect(() => {
        console.log(role);
        if (username.length > 0 && email.length > 0 && password.length > 0 && role.length > 0) {
            setBtnDisabled(false);
        }
        else {
            setBtnDisabled(true);
        }
    }, [email, username, password, role, btnDisabled])

    const signUp = async () => { }
    return (
        //Mobile Login
        <div className='flex flex-col gap-4 justify-center items-center'>
            <div className='logo-classizz'>
                <img src="/logo.jpg" alt="logo" width={160} height={160} />
            </div>
            <div className='flex flex-col gap-4 mt-3 w-full justify-center items-center sign-up-form'>
                <input type="text" className='border-b-[3px] p-2 outline-none w-8/12 focus:border-purple-700 focus:text-purple-800 focus:font-semibold focus:tracking-wide' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" className='border-b-[3px] p-2 outline-none w-8/12 focus:border-purple-700 focus:text-purple-800 focus:font-semibold focus:tracking-wide' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />

                <div className='w-8/12 relative'>
                    <input type={eye ? "text" : "password"} className='border-b-[3px] p-2 outline-none w-full focus:border-purple-700 focus:text-purple-800 focus:font-semibold focus:tracking-wide' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='absolute right-0 top-3 eye-btn' onClick={(e) => { e.preventDefault(); setEye(!eye) }}>{eye ? <IoMdEye /> : <IoMdEyeOff />}</button>
                </div>
                <div className='w-8/12'>
                    <p className='text-gray-400 font-semibold my-2'>Role?</p>
                    <div className="flex items-center mb-4 gap-2">
                        <input type="radio" name="role" id="teacher" value="teacher" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" onChange={(e) => setRole(e.target.value)} />
                        <label htmlFor="teacher" className='text-gray-600 font-medium tracking-wide'>Teacher</label>
                        <input type="radio" name="role" id="student" value="student" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 ms-5" onChange={(e) => setRole(e.target.value)} />
                        <label htmlFor="student" className='text-gray-600 font-medium tracking-wide' >Student</label>

                    </div>
                </div>

                {
                    btnDisabled ?
                        <button className='bg-purple-200 py-2 px-4 rounded mt-2 tracking-wider uppercase' onClick={() => toast.error("Fill all the fields")}>SignUp</button> :
                        <button onClick={signUp} className='bg-purple-600 py-2 px-4 rounded mt-2 tracking-wider uppercase'>SignUp</button>
                }
            </div>
            <div className='mt-5 other-ways'>
                <p className='text-sm text-gray-500'>or using</p>
                <div className='flex justify-center items-center mt-3 text-xl font-bold border-2 rounded-full p-4'>
                    <FaGoogle className='text-purple-800' />
                </div>
            </div>



        </div >
    )
}

export default Signup