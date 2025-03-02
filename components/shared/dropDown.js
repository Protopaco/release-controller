export default (label, selectId, options) => {
    const listElement = document.createElement('li');
    listElement.classList.add('dropdown');

    const dropDownFrame = document.createElement('div');
    dropDownFrame.classList.add('dropdown-frame');

    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    dropDownFrame.appendChild(labelElement);

    const selectElement = document.createElement('select');
    selectElement.id = selectId;

    options.forEach(({ value, text }) => {
        const optionElement = document.createElement('option');
        optionElement.value = value;
        optionElement.textContent = text;
        selectElement.appendChild(optionElement);
    })
    dropDownFrame.appendChild(selectElement);
    listElement.appendChild(dropDownFrame);

    return listElement;
}