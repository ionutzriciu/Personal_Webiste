function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            closeModal(modals[i].id);
        }
    }
};

// Prevent page from snapping to the top
function handleNavClick(event, modalId) {
    event.preventDefault(); // Prevent default anchor behavior
    openModal(modalId); // Open the desired modal
}

function downloadEnglishCV(event) {
    event.preventDefault(); // Prevent the default link behavior
    const link = document.createElement('a');
    link.href = "assets/docs/Ionut_Riciu_EN_CV_Resume.pdf"; 
    link.setAttribute('download', 'Ionut_Riciu_EN_CV_Resume.pdf'); // Specify the download name
    document.body.appendChild(link);
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Clean up
}

function downloadRomanianCV(event) {
    event.preventDefault(); // Prevent the default link behavior
    const link = document.createElement('a');
    link.href = "assets/docs/Ionut_Riciu_RO_CV_Resume.PDF"; // Path to your Romanian PDF
    link.setAttribute('download', 'Ionut_Riciu_RO_CV_Resume.PDF'); // Specify the download name
    document.body.appendChild(link);
    link.click(); // Programmatically click the link to trigger the download
    document.body.removeChild(link); // Clean up
}

// Function to adjust footer styles for responsiveness
function adjustFooterStyles() {
    const footer = document.getElementById('footer');
    const socialLinks = footer.querySelectorAll('.social-icons li a');

    if (window.innerWidth <= 768) { // For tablets and mobile phones
        footer.style.fontSize = '1rem'; // Adjust font size for smaller screens
        socialLinks.forEach(link => {
            link.style.fontSize = '1.2rem'; // Adjust icon/text size
            link.style.margin = '0 0.5rem'; // Adjust spacing
        });
    } else { // For larger screens
        footer.style.fontSize = '1.5rem'; // Reset to original font size
        socialLinks.forEach(link => {
            link.style.fontSize = '1.5rem'; // Reset icon/text size
            link.style.margin = '0 1rem'; // Reset spacing
        });
    }
}

// Open modal with animation
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block"; // Display modal
    setTimeout(() => modal.classList.add("show"), 10); // Trigger the show animation
}

// Close modal with animation
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("show"); // Remove the show class
    setTimeout(() => {
        modal.style.display = "none"; // Hide after transition
    }, 300); // Wait for transition to complete
}

// Close modals when clicking outside of them
window.onclick = function(event) {
    const modals = document.getElementsByClassName("modal");
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            closeModal(modals[i].id);
        }
    }
};


// Event listener for window resize
window.addEventListener('resize', adjustFooterStyles);

// Initial call to set styles on page load
adjustFooterStyles();
