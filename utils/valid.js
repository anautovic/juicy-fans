const valid =  (name, email, password, cf_password) =>{
    if (!name || !email || !password)
    return 'Please add some field'
    if (!validateEmail(email))
    return 'Invalid emails'
    if (password.length <6 )
    return 'password must be at least 6 caracter'
    if (password !== cf_password)
    return 'password did not match'
}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


export default valid