import ConfirmInPersonPayment from "../components/ConfirmInPersonPayment";
import ConfirmOnlinePayment from "../components/ConfirmOnlinePayment";
import ConfirmPayment from "../components/ConfirmPayment";
import ConfirmSignUp from "../components/ConfirmSignUp"
import ConfirmTour from "../components/ConfirmTour";
import ConfirmTourDetails from "../components/ConfirmTourDetails";
import Congrats from "../components/Congrats";

const Confirmation = () => {
    return(
        <>
        <ConfirmSignUp />
        <ConfirmTour />
        <ConfirmTourDetails />
        <ConfirmInPersonPayment />
        <ConfirmOnlinePayment />
        <ConfirmPayment />
        <Congrats />
        </>
    )
}

export default Confirmation;