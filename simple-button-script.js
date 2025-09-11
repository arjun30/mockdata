// Simple button script - logs on load and creates a top-right button
console.log('Simple button script loaded successfully!');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    createTopRightButton();
});

// If DOM is already loaded, create button immediately
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createTopRightButton);
} else {
    createTopRightButton();
}

function createTopRightButton() {
    // Create the button element
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.id = 'top-right-button';
    
    // Style the button to appear in top right corner
    button.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        padding: 10px 15px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-family: Arial, sans-serif;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        transition: background-color 0.3s ease;
    `;
    
    // Add hover effect
    button.addEventListener('mouseenter', function() {
        button.style.backgroundColor = '#0056b3';
    });
    
    button.addEventListener('mouseleave', function() {
        button.style.backgroundColor = '#007bff';
    });
    
    // Add click event to show alert
    button.addEventListener('click', function() {
        alert('Button clicked! Hello from the top right corner!');
        console.log('Top right button was clicked!');
    });
    
    // Add button to the page
    document.body.appendChild(button);
    
    console.log('Top right button created and added to page');
}
