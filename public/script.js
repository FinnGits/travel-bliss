function copyToClipboard(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Get the text to copy from the `data-copy` attribute
    const textToCopy = event.target.getAttribute('data-copy');

    // Copy the text to the clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        // Optional: Notify the user that the text was copied
        alert(`Copied to clipboard: ${textToCopy}`);
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}


document.getElementById("add-paragraph-btn").addEventListener("click", () => {
    // Create a new textarea for the additional paragraph
    const newParagraph = document.createElement("textarea");
    newParagraph.placeholder = `Paragraph ${document.querySelectorAll("#paragraphs-container textarea").length + 1}`;
    newParagraph.required = true;

    // Append the new textarea to the paragraphs container
    document.getElementById("paragraphs-container").appendChild(newParagraph);
});

document.getElementById("blog-form").addEventListener("submit", (event) => {
    event.preventDefault();

    // Gather the blog data
    const heading = document.getElementById("blog-heading").value;
    const readingTime = document.getElementById("blog-reading-time").value;
    const paragraphs = Array.from(document.querySelectorAll("#paragraphs-container textarea"))
        .map(textarea => textarea.value);

    // Example: log the blog content to the console
    console.log({
        heading,
        readingTime,
        paragraphs
    });

    // Here you can process the data further or send it to a server
    alert("Blog created successfully!");
});


// Function to open the selected tab
function openTab(event, tabName) {
    // Hide all tab content by removing 'active' class
    var tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });
    
    // Remove "active" class from all tab links
    var links = document.querySelectorAll('.tab-link');
    links.forEach(function(link) {
        link.classList.remove('active');
    });
  
    // Show the clicked tab content by adding 'active' class
    document.getElementById(tabName).classList.add('active');
    
    // Add 'active' class to the clicked tab button
    event.currentTarget.classList.add('active');
}
  
// Set the default tab to "Make a New Blog" on load
// document.addEventListener("DOMContentLoaded", function() {
//     // Default to the first tab's content
//     document.querySelector(".tab-link.active").click();
// });

