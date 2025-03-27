// addProperty.js Validation Form

document.addEventListener("DOMContentLoaded", function () {
    console.log("JS loaded!");
    const form = document.getElementById("propertyForm");

    form.addEventListener("submit", function (e) {
        // Reset error fields
        const errorFields = [
            "title",
            "price",
            "postalCode",
            "latitude",
            "longitude",
            "propertyType",
        ];
        errorFields.forEach((field) => {
            document.getElementById(field).classList.remove("is-invalid");
            const errorDiv = document.getElementById(`error-${field}`);
            if (errorDiv) errorDiv.innerText = "";
        });

        const title = form.elements["title"].value.trim();
        const price = parseFloat(form.elements["price"].value);
        const postalCode = form.elements["postalCode"].value.trim();
        const postalPattern = /^[A-Z]\d[A-Z] \d[A-Z]\d$/i;

        let valid = true;
        let errors = [];

        if (title.length < 3) {
            document.getElementById("title").classList.add("is-invalid");
            document.getElementById("error-title").innerText =
                "Title must be at least 3 characters.";
            valid = false;
        }

        if (isNaN(price) || price <= 0) {
            document.getElementById("price").classList.add("is-invalid");
            document.getElementById("error-price").innerText =
                "Please enter a valid price";
            valid = false;
        }

        if (!postalPattern.test(postalCode)) {
            document.getElementById("postalCode").classList.add("is-invalid");
            document.getElementById("error-postalCode").innerText =
                "Invalid postal code";
            valid = false;
        }

        const lat = parseFloat(form.elements["latitude"].value);
        const lng = parseFloat(form.elements["longitude"].value);

        if (isNaN(lat)) {
            document.getElementById("latitude").classList.add("is-invalid");
            document.getElementById("error-latitude").innerText =
                "Latitude is required";
            valid = false;
        }

        if (isNaN(lng)) {
            document.getElementById("longitude").classList.add("is-invalid");
            document.getElementById("error-longitude").innerText =
                "Longitude is required";
            valid = false;
        }

        const type = form.elements["propertyType"].value;
        if (!type) {
            document.getElementById("propertyType").classList.add("is-invalid");
            document.getElementById("error-propertyType").innerText =
                "Please select a property type.";
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
        } else {
            e.preventDefault();
            const toastElement = document.getElementById("successToast");
            const toast = new bootstrap.Toast(toastElement);
            toast.show();

            setTimeout(() => {
                form.submit();
            }, 2000);
        }
    });
});
