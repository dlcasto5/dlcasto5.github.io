async function createMicrosoftAccount(email, password) {
    if (!validateMicrosoftEmail(email)) {
        throw new Error('Invalid Microsoft email address.');
    }
    
    if (!validatePassword(password)) {
        throw new Error('Password does not meet strength requirements.');
    }

    // Proceed with account creation logic here
    console.log('Account created successfully for:', email);
}

// Helper function to validate Microsoft email domains
function validateMicrosoftEmail(email) {
    const microsoftDomains = ['@outlook.com', '@hotmail.com', '@live.com', '@microsoft.com'];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // General email format validation

    return emailRegex.test(email) && microsoftDomains.includes(email.substring(email.lastIndexOf('@')).toLowerCase());
}

// Helper function to validate password strength
function validatePassword(password) {
    // Example: Require at least 8 characters, one uppercase letter, and one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

// Example usage
createMicrosoftAccount('example@outlook.com', 'SecurePass123').catch(console.error);
