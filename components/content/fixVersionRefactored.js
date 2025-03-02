import lineBreak from '../shared/lineBreak.js';
import { updateFixVersion, deleteFixVersion, createFixVersion, getAllFixVersions } from '../../controllers/fixVersionController.js';

export const populateFixVersionList = (fixVersionListId) => {
    const fixVersions = getAllFixVersions();
    const fixVersionList = document.getElementById(fixVersionListId);
    fixVersions.forEach(fixVersion => {
        const fixVersionElement = createFixVersionElement(fixVersion);
        fixVersionList.appendChild(fixVersionElement);
    });
}

const createFixVersionElement = ({ fixVersionId, fixVersionName, startDate, endDate }) => {
    const frame = document.createElement('li');
    frame.classList.add('fixVersionInput');

    const versionNameFrame = createVersionNameFrame(fixVersionName, fixVersionId);
    const saveButton = createSaveButton(fixVersionId);
    const datesFrame = createDatesFrame(startDate, endDate, saveButton);

    frame.appendChild(versionNameFrame);
    frame.appendChild(datesFrame);
    frame.appendChild(lineBreak());

    return frame;
}

const createVersionNameFrame = (versionName, fixVersionId) => {
    const versionNameFrame = document.createElement('div');
    versionNameFrame.classList.add('fixVersionInputNameFrame');

    const versionNameComponent = document.createElement('span');
    versionNameComponent.classList.add('versionName');
    versionNameComponent.innerText = versionName;
    versionNameFrame.appendChild(versionNameComponent);

    const deleteButton = createDeleteButton(fixVersionId);
    versionNameFrame.appendChild(deleteButton);

    return versionNameFrame;
}

const createSaveButton = (fixVersionId) => {
    const saveButton = document.createElement('span');
    saveButton.classList.add("material-icons", "icon", "fixVersionButton");
    saveButton.innerText = 'save';
    saveButton.onclick = () => {
        const fixVersionName = document.querySelector('.versionName').innerText;
        const startDate = document.querySelector('.startDate').value;
        const endDate = document.querySelector('.endDate').value;
        updateFixVersion(fixVersionId, fixVersionName, startDate, endDate);
    };
    return saveButton;
}

const createDeleteButton = (fixVersionId) => {
    const deleteButton = document.createElement('span');
    deleteButton.classList.add("material-icons", "icon", "fixVersionButton");
    deleteButton.innerText = 'delete';
    deleteButton.onclick = () => deleteFixVersion(fixVersionId);
    return deleteButton;
}

const createDateFrame = (labelText, inputClass, inputValue) => {
    const dateFrame = document.createElement('div');
    dateFrame.classList.add('fixVersionInputDateFrame');

    const dateLabel = document.createElement('label');
    dateLabel.classList.add(`${inputClass}Label`);
    dateLabel.innerText = labelText;
    dateFrame.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.classList.add(inputClass);
    dateInput.type = 'date';
    dateInput.value = inputValue;
    dateFrame.appendChild(dateInput);

    return dateFrame;
}

const createDatesFrame = (startDate, endDate, saveButton) => {
    const datesFrame = document.createElement('div');
    datesFrame.classList.add('fixVersionInputDatesFrame');

    const startDateFrame = createDateFrame('Start Date', 'startDate', startDate);
    const endDateFrame = createDateFrame('End Date', 'endDate', endDate);

    datesFrame.appendChild(startDateFrame);
    datesFrame.appendChild(endDateFrame);
    datesFrame.appendChild(saveButton);

    return datesFrame;
}

export const addFixVersionButton = () => {
    const addFixVersionButtonFrame = document.createElement('li');
    addFixVersionButtonFrame.classList.add('fixVersionInputAddButtonFrame');
    addFixVersionButtonFrame.id = 'addFixVersionButtonFrame';

    const fixVersionButton = document.createElement('span');
    fixVersionButton.classList.add("material-icons", "icon", "fixVersionButton");
    fixVersionButton.innerText = 'add';
    fixVersionButton.onclick = () => {
        const fixVersionList = document.querySelector('.fixVersionList');
        const addFvButtonFrame = document.getElementById('addFixVersionButtonFrame');
        fixVersionList.removeChild(addFvButtonFrame);

        const newFixVersionFrame = createNewFixVersionFrame();
        fixVersionList.appendChild(newFixVersionFrame);
    };

    addFixVersionButtonFrame.appendChild(fixVersionButton);
    return addFixVersionButtonFrame;
}

const createNewFixVersionFrame = () => {
    const frame = document.createElement('li');
    frame.classList.add('addfixVersionInputFrame');

    const versionNameFrame = createVersionNameInputFrame();
    const saveButton = createSaveButton();
    const datesFrame = createDatesFrame('', '', saveButton);

    frame.appendChild(versionNameFrame);
    frame.appendChild(datesFrame);
    frame.appendChild(lineBreak());

    return frame;
}

const createVersionNameInputFrame = () => {
    const versionNameInputFrame = document.createElement('div');
    versionNameInputFrame.classList.add('fixVersionInputNameFrame');

    const versionNameInput = document.createElement('input');
    versionNameInput.classList.add('versionNameInput');
    versionNameInput.type = 'text';
    versionNameInput.value = 'Release ';
    versionNameInputFrame.appendChild(versionNameInput);

    return versionNameInputFrame;
}