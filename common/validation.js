// Author:Kinnera Reddy, Date:28/03/2019,
// Description: mobile number validation functioanity


var isValidMobileNumber  = (phnno)=>{

    var pattern = /^(\+\d{1,3}[- ]?)?\d{10}$/;
   return pattern.test(phnno)
}
//-------------------------------------------------------------------------------
/**
*@author Anand Potukuchi
*@date 18/04/2019 16:28

*/
var isValidEmail = email  => {

    var pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return pattern.test(email)

}

var isValidPrice = price => {
    var pattern = /^\s*(?=.*[1-9])\d*(?:\.\d{1,2})?\s*$/;
    return pattern.test(price)
}

var isValidGSTIN  = gstno => {
    var pattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    return pattern.test(gstno)
}

var isValidPincode = pincode => {
    var pattern = /^[1-9][0-9]{5}$/;
    return pattern.test(pincode)

}


var isValidBankAcc = accNo => {
    var pattern = /"[0-9]{9,18}"/;
    return pattern.test(accNo)

}

var isValidBankIFSC = ifsc => {
    var pattern = /"[0-9]{9,18}"/;
    return pattern.test(ifsc)
}

module.exports = {
    isValidMobileNumber,
    isValidEmail,
    isValidPrice,
    isValidGSTIN,
    isValidPincode,
    isValidBankAcc,
    isValidBankIFSC
}