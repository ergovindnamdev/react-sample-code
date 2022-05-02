const emailFormateValidation = (email) => {
	let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	var count = (email.match(/.com/g) || []).length;
	if (reg.test(email) === false) {
		return 'invalid';
	} else {
		if (count === 1) {
			return 'valid';
		} else {
			return 'invalid';
		}
	}
}

const passwordValidator = (str) => {
	var pattern = new RegExp(
		"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
	);
	if (pattern.test(str)) {
		return 'valid';
	} else {
		return 'invalid';
	}
}
const dateFormate = (date) =>{
	var today = new Date(date);
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){
		dd='0'+dd
	} 
    if(mm<10){
        mm='0'+mm
    } 

	return yyyy+'-'+mm+'-'+dd;
}

export {passwordValidator  , dateFormate , emailFormateValidation}