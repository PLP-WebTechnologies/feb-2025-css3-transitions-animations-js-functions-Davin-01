// Function to trigger animation
document.getElementById('animateButton').addEventListener('click', function() {
    const animatedElement = document.getElementById('animatedElement');
    animatedElement.classList.add('animate');
    
    // After animation ends, remove the class to reset animation state
    animatedElement.addEventListener('animationend', function() {
        animatedElement.classList.remove('animate');
    });
});

// Function to save user preference in localStorage
document.getElementById('savePreferenceBtn').addEventListener('click', function() {
    // Store animation preference (whether animation is triggered or not)
    localStorage.setItem('animationTriggered', 'true');
    alert('Animation preference saved!');
});

// Function to load user preference from localStorage and trigger animation if needed
document.getElementById('loadPreferenceBtn').addEventListener('click', function() {
    const animationPreference = localStorage.getItem('animationTriggered');
    if (animationPreference === 'true') {
        // If the user has previously triggered the animation, do it again
        document.getElementById('animateButton').click();
        alert('Animation triggered based on saved preference!');
    } else {
        alert('No saved animation preference found.');
    }
});
