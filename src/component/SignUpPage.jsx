import React from 'react';

const SignUpPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-2xl">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create an Account</h2>

                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Father Name</label>
                        <input
                            type="text"
                            placeholder=" Doe"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Date Of Birth</label>
                        <input
                            type="date"

                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Email Address</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            placeholder="0348-6979999"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-1">Gender</label>
                        <div className="flex items-center gap-6">
                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" value="Male" className="accent-blue-600" required />
                                Male
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" value="Female" className="accent-blue-600" />
                                Female
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="radio" name="gender" value="Other" className="accent-blue-600" />
                                Other
                            </label>
                        </div>
                    </div>
                    <div >
                        <label className="block text-gray-700 font-semibold mb-1">Course Name</label>
                        <input
                            type="text"
                            name="courseName"
                            placeholder="e.g. Web Development"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="text-sm text-gray-600 flex items-start gap-2">
                        <input type="checkbox" className="accent-blue-500 mt-1" required />
                        <span>
                            I agree to the <a href="#" className="text-blue-600 hover:underline">Terms & Conditions</a>
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-2 rounded-xl hover:bg-blue-700 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account?{' '}
                    <a href="#" className="text-blue-600 hover:underline">Log in</a>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
