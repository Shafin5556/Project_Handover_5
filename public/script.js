
    // Function to dynamically update the auth buttons
    function updateAuthButtons() {
        const authButtons = document.getElementById('authButtons');
        const userId = localStorage.getItem('userId'); // Check if userId is stored (user logged in)

        if (userId) {
            // If user is logged in, show Dashboard button
            authButtons.innerHTML = `
                <a href="dashboard.html"><button>Dashboard</button></a>
            `;
        } else {
            // If user is not logged in, show Sign Up and Log In buttons
            authButtons.innerHTML = `
                <a href="register.html"><button>Sign Up</button></a>
                <a href="login.html"><button>Log In</button></a>
            `;
        }
    }

    // Call the function to set buttons on page load
    window.onload = updateAuthButtons;
