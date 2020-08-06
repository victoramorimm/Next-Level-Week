document.querySelector("#add-time")
.addEventListener('click', cloneField);

function cloneField() {
    // Node = HTML Element (in Javascript).
    // true = to clone all the content inside .schedule-item
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    const fields = newFieldContainer.querySelectorAll('input');

    fields.forEach(field => {
        field.value = ""
    });

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
} 