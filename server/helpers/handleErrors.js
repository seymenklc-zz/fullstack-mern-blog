export const handleErrors = (err) => {
    console.log(err.message, err.code);

    let errors = { username: '', email: '', password: '' };

    // Duplicate error code
    if (err.code === 11000) {
        errors.email = 'Email has been already registered.';
        return errors;
    }

    // Validation errors
    if (err.message.includes('User validation failed:')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

