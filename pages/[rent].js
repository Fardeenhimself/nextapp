import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeLayout from "../layouts/home";

export default function Rent() {
    const router = useRouter();
    const [user, setUser] = useState({})
    const car = useRouter().query.rent;
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        const val = JSON.parse(sessionStorage.getItem('usr'))
        if (val) {
            setAuth(true)
            setUser(val)
        }
    }, [auth])

    const subFun = () => {
        (() => toast("THANK YOU 😄", { theme: "light", autoClose: 1000, }))();
        setTimeout(() => {
            router.push('/');
        }, 2000);
    };

    if (auth) {
        return (
            <section className="text-gray-600 body-font relative">
                <ToastContainer />
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon br/ooklyn asymmetrical gentrify.</p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" value={user.name} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-600 focus:bg-white focus:ring-2 focus:ring-yellow-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" value={user.email} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-600 focus:bg-white focus:ring-2 focus:ring-yellow-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Car</label>
                                    <input type="email" id="email" name="email" value={car} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-yellow-600 focus:bg-white focus:ring-2 focus:ring-yellow-600 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" disabled />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-black font-bold bg-yellow-600 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-700 rounded text-lg" onClick={subFun}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    else {
        return (
            <>
                <h1 className='font-black text-9xl text-center'>404</h1>
                <h1 className='font-black text-9xl text-center'>NOT FOUND !</h1>
            </>
        );
    }
}

Rent.layout = HomeLayout;
