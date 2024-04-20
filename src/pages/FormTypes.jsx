import AddressType from "../allFormTypes/AddressType";
import DateOfBirthType from "../allFormTypes/DateOfBirthType";
import EmailType from "../allFormTypes/EmailType";
import GenderType from "../allFormTypes/GenderType";
import MobileNumType from "../allFormTypes/MobileNumType";
import NameType from "../allFormTypes/NameType";
import PassportNumType from "../allFormTypes/PassportNumType";
import PasswordType from "../allFormTypes/PasswordType";
import SecurityQuestion from "../allFormTypes/SecurityQuestion";
import TermsAndConditions from "../allFormTypes/TermsAndConditions";
import TimeType from "../allFormTypes/TimeType";
import UploadDocumentType from "../allFormTypes/UploadDocumentType";



const FormTypes = () => {
    return ( 
        <>
        <NameType />
        <EmailType />
        <MobileNumType />
        <DateOfBirthType />
        <GenderType />
        <AddressType />
        <PassportNumType />
        <UploadDocumentType />
        <PasswordType />
        <SecurityQuestion />
        <TermsAndConditions />
        <TimeType />
        </>
     );
}
 
export default FormTypes;