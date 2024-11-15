async function createMicrosoftAccount(email, password) {
    const url = 'https://example-api.com/create-account'; // Replace with a legitimate endpoint

    try {
        // Validate input
        if (!email || !password) {
            throw new Error('Email and password are required.');
        }
        if (!validateMicrosoftEmail(email)) {
            throw new Error('Invalid Microsoft email address.');
        }
        if (!validatePassword(password)) {
            throw new Error('Password does not meet the security requirements.');
        }

        // Simulate account creation process
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }), // Ensure API uses HTTPS and handles sensitive data securely
        });

        // Check for response status
        if (!response.ok) {
            throw new Error(`Failed to create account: ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Account created successfully:', data);
    } catch (error) {
        // Handle errors and exceptions
        console.error('An error occurred while creating the account:', error.message);
    }
}

// Helper function to validate Microsoft email domains
function validateMicrosoftEmail(email) {
    const microsoftDomains = [
        '@outlook.com',
        '@hotmail.com',
        '@live.com',
        '@microsoft.com',
    ];
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // General email format validation

    if (!emailRegex.test(email)) {
        return false; // Invalid email format
    }

    const domain = email.substring(email.lastIndexOf('@')).toLowerCase();
    return microsoftDomains.includes(domain);
}

// Helper function to validate password strength
function validatePassword(password) {
    // Example: Require at least 8 characters, one uppercase letter, and one number
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

// Example usage
createMicrosoftAccount('example@outlook.com', 'SecurePass123');
