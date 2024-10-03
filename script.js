const counters = document.querySelectorAll('.counter');
const speed = 400; // Lower the number, faster the counter

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20); // Repeat the function every 20ms
        } else {
            counter.innerText = target;
        }
    };
    let options = {
        threshold: 0.5 // Trigger when the section is at least 50% visible
    };

    updateCount();
});



function toggleForm() {
    const form = document.getElementById('enquiryForm');
    if (form.classList.contains('hidden-form')) {
        form.classList.remove('hidden-form');
        form.classList.add('expanded-form');
    } else {
        form.classList.remove('expanded-form');
        form.classList.add('hidden-form');
    }
}

// Form Submission with validation
document.getElementById("enquiryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your enquiry. We will get back to you soon!");
    document.getElementById("enquiryForm").reset();
    toggleForm(); // Collapse the form again after submission
});


