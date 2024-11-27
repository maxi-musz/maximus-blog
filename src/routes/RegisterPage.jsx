import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px] mt-20">
            <SignUp signInUrl="/login"/>
        </div>
    )
}

export default RegisterPage;

