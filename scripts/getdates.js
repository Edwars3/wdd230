// getdates.js

document.addEventListener('DOMContentLoaded', function () {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the first paragraph in the footer with the copyright year
    const copyrightParagraph = document.querySelector('footer p:first-child');
    copyrightParagraph.textContent = `© ${currentYear} Edwars Rodriguez`;

    // Get the last modified date of the document
    const lastModifiedDate = new Date(document.lastModified);

    // Format the last modified date as a string
    const formattedLastModifiedDate = `${lastModifiedDate.toLocaleDateString()} ${lastModifiedDate.toLocaleTimeString()}`;

    // Update the second paragraph in the footer with the last modified date
    const lastModifiedParagraph = document.querySelector('footer p:nth-child(2)');
    lastModifiedParagraph.textContent = `Last Modified: ${formattedLastModifiedDate}`;
});
