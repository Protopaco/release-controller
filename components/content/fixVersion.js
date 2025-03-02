import lineBreak from '../shared/lineBreak.js';
import { updateFixVersion, deleteFixVersion, createFixVersion, } from '../../controllers/fixVersionController.js';

export const populateFixVersionList = (fixVersions, fixVersionListId) => {
    const fixVersionList = document.getElementById(fixVersionListId);
    fixVersions.forEach(({ fixVersionId, fixVersionName, startDate, endDate }) => {
        const fixVersionDisplayElement = fixVersionDisplay(fixVersionId, fixVersionName, startDate, endDate);
        fixVersionList.appendChild(fixVersionDisplayElement);
    });
}
export const fixVersionDisplay = (fixVersionId, fixVersionName, startDate = '', endDate = '') => {
    const frame = document.createElement('li');
    frame.classList.add('fixVersionInput');
    const versionNameFrame = createVersionNameFrame(fixVersionName);
    const saveButton = createSaveButton(fixVersionId);
    const datesFrame = createDatesFrame(startDate, endDate, saveButton);
    frame.appendChild(versionNameFrame);
    frame.appendChild(datesFrame);
    frame.appendChild(lineBreak());
    return frame;
}

export const addFixVersion = () => {
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

const createSaveButton = (fixVersionId) => {
    const saveButton = document.createElement('span');
    saveButton.classList.add("material-icons", "icon", "fixVersionButton");
    saveButton.innerText = 'save';
    saveButton.onclick = () => createFixVersion(fixVersionId, fixVersionName, startDate, endDate);
    return saveButton;
}

const createDeleteButton = (fixVersionId) => {
    const deleteButton = document.createElement('span');
    deleteButton.classList.add("material-icons", "icon", "fixVersionButton");
    deleteButton.innerText = 'delete';
    deleteButton.onclick = () => deleteFixVersion(fixVersionId);
    return deleteButton;
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


const createVersionNameFrame = (versionName) => {
    const versionNameFrame = document.createElement('div');
    versionNameFrame.classList.add('fixVersionInputNameFrame');

    const versionNameComponent = document.createElement('span');
    versionNameComponent.classList.add('versionName');
    versionNameComponent.innerText = versionName;
    versionNameFrame.appendChild(versionNameComponent);

    const deleteButton = createDeleteButton();
    versionNameFrame.appendChild(deleteButton);

    return versionNameFrame;
};

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
};

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
        const versionNameInputFrame = addFixVersion();
        fixVersionList.appendChild(versionNameInputFrame);
    };
    addFixVersionButtonFrame.appendChild(fixVersionButton);
    return addFixVersionButtonFrame;
}

const createDatesFrame = (startDate, endDate, passedButton) => {
    const datesFrame = document.createElement('div');
    datesFrame.classList.add('fixVersionInputDatesFrame');

    const startDateFrame = createDateFrame('Start Date', 'startDate', startDate);
    const endDateFrame = createDateFrame('End Date', 'endDate', endDate);

    datesFrame.appendChild(startDateFrame);
    datesFrame.appendChild(endDateFrame);
    datesFrame.appendChild(passedButton);

    return datesFrame;
};


