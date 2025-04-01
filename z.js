document.addEventListener("DOMContentLoaded", function () {
    // Dark mode toggle
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Toggle Dark Mode";
    toggleButton.style.position = "fixed";
    toggleButton.style.top = "10px";
    toggleButton.style.right = "10px";
    toggleButton.style.padding = "10px";
    toggleButton.style.border = "none";
    toggleButton.style.background = "#333";
    toggleButton.style.color = "#fff";
    toggleButton.style.cursor = "pointer";
    
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Dark mode styling
    const style = document.createElement("style");
    style.innerHTML = `
        .dark-mode {
            background-color: #222;
            color: #fff;
        }
        .dark-mode .container {
            background-color: #333;
        }
        .dark-mode .section {
            background-color: #444;
            border-left: 4px solid #ff6347;
        }
    `;
    document.head.appendChild(style);

    // Add Profile Image
    const profileImage = document.createElement
    profileImage.src = "IMG_7766.jpg"; // Replace with actual image path
    profileImage.alt = "Profile Picture";
    profileImage.style.display = "block";
    profileImage.style.margin = "auto";
    profileImage.style.width = "90px";
    profileImage.style.borderRadius = "110%";
    profileImage.style.boxShadow = "3 4px 8px rgba(0, 0, 0, 0.1)";
    
    const container = document.querySelector(".container");
    container.insertBefore(profileImage, container.firstChild);

    // Validate email input
    const emailLinks = document.querySelectorAll("a[href^='mailto']");
    emailLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            const email = link.getAttribute("href").replace("mailto:", "");
            if (!validateEmail(email)) {
                alert("Invalid email address!");
                event.preventDefault();
            }
        });
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Resume Download Button
    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download Resume";
    downloadButton.style.position = "fixed";
    downloadButton.style.bottom = "10px";
    downloadButton.style.right = "10px";
    downloadButton.style.padding = "10px";
    downloadButton.style.border = "none";
    downloadButton.style.background = "#007bff";
    downloadButton.style.color = "#fff";
    downloadButton.style.cursor = "pointer";
    
    document.body.appendChild(downloadButton);

    downloadButton.addEventListener("click", function () {
        const resumeContent = document.querySelector(".container").outerHTML;
        const blob = new Blob([resumeContent], { type: "text/html" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "resume.html";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // Print Resume Button
    const printButton = document.createElement("button");
    printButton.textContent = "Print Resume";
    printButton.style.position = "fixed";
    printButton.style.bottom = "50px";
    printButton.style.right = "10px";
    printButton.style.padding = "10px";
    printButton.style.border = "none";
    printButton.style.background = "#28a745";
    printButton.style.color = "#fff";
    printButton.style.cursor = "pointer";
    
    document.body.appendChild(printButton);

    printButton.addEventListener("click", function () {
        window.print();
    });
});

