import SignUpFormA from "../components/SignUpFormA";
import SignUpFormB from "../components/SignUpFormB";
import SignUpFormC from "../components/SignUpFormC";
import SignUpTester from "../components/SignUpTester"

const SignUp = () => {
    return ( 
        <>
        <SignUpFormA />
        {/* i do not know how to link pages so they will be placed on top of each other */}
        <SignUpFormB />
        <SignUpFormC />
        {/* <SignUpTester />*/}
        {/*I use the SignUpTester to try out certain things */}
        </>
     );
}
 
export default SignUp;