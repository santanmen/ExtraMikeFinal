const validateError = (error)=>{
    switch (error.message) {
        case 'Wrong type':
            return 'review request fields';
            break;
        case 'Missing fields':
            return 'Validate fields';
            break;
        case 'Inexistent role':
                return 'Role not registered';
                break;
        case 'Missing fields':
                return 'Validate fields';
                break;
        case 'Nothing found':
            return 'No data found';
            break;
            case 'Password mismath':
                return 'Credentials mismatch';
                break;
        case 'User disabled':
            return 'User disabled';
            break;
            
        default:
            return 'Review request';
            break;
    }
};


module.exports = {
    validateError
}