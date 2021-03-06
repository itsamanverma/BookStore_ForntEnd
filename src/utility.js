module.exports = {
    isStringValid(value) {
        if (value.trim().length === 0) {
            return false;
        }
        let stringRegex = '^[A-Za-z]+$'
        let regex = new RegExp(stringRegex);
        return regex.test(value);
    },
    isEmailValid(value) {
        if (value.trim().length === 0) {
            return false;
        }
        let stringRegex = '^([a-zA-Z0-9]+)@([a-zA-Z0-9]+).([a-zA-Z]{2,5})$'
        let regex = new RegExp(stringRegex);
        return regex.test(value);
    },
    isDataValid(value) {
        let dateRegex = '^(?[0-9]{4})?[-.]?([0-9]{2})[-.]?([0-9]{2})$'
        let regex = new RegExp(dateRegex);
        return regex.test(value);
    },

    isPhoneNoValid(value) {
        let phoneNoRegex = '^([0]{1}[1-9]{1}[0-9]{9})$'
        let regex = new RegExp(phoneNoRegex);
        return regex.test(value);
    },

    isPincodeValid(value) {
        let pincodeRegex = '^([2-9]{1}[0-9]{5})$'
        let regex = new RegExp(pincodeRegex);
        return regex.test(value);
    },
    isAddressValid(value) {
        let addressRegex = '^[A-Za-z0-9,]+$'
        let regex = new RegExp(addressRegex);
        return regex.test(value);
    },

    getFormateDate(date) {
      const  months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

        let newDate = new Date(date);
        let today = new Date();
        if (newDate.getFullYear() === today.getFullYear() && newDate.getMonth() === today.getMonth()) {
            if (newDate.getDate() === today.getDate()) {
                return 'today, ' + newDate.getHours() + ':' + newDate.getMinutes();
            }
            else if (newDate.getDate() === today.getDate() + 1) {
                return 'tomorrow, ' + newDate.getHours() + ':' + newDate.getMinutes();
            } else {
                return newDate.getDate() + ' ' + months[newDate.getMonth()] + ', ' + newDate.getHours() + ':' + newDate.getMinutes();

            }
        } else {
            return newDate.getDate() + ' ' + months[newDate.getMonth()] + ', ' + newDate.getHours() + ':' + newDate.getMinutes();
        }
    }
}