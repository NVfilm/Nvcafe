const form = document.getElementById("leadForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    alert("Thank You! Our team will contact you shortly.");

    form.reset();

});
