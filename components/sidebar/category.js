import { fixVersionDropDown, populateApplicationList } from "../content/applications.js";
import { loadContent } from "../content/content.js";
import { addFixVersionButton, populateFixVersionList } from "../content/fixVersion.js";
import { getReleaseTicketsByFixVersion, getAllFixVersions } from "../../controllers/fixVersionController.js";
import { createReleaseTickets } from "../../controllers/releaseTicketController.js";

export const fixVersionButton = () => {
    console.log('fixVersionButton');
    const fixVersionListId = 'fix-version-list';
    const fixVersionList = document.createElement('ul');
    fixVersionList.classList.add('fixVersionList');
    fixVersionList.id = fixVersionListId;
    loadContent(fixVersionList);
    const fixVersions = getAllFixVersions();

    populateFixVersionList(fixVersions, fixVersionListId);

    const addFVButton = addFixVersionButton();
    fixVersionList.appendChild(addFVButton);
}

export const applicationButton = () => {
    const selectId = 'fix-version';
    const applicationListId = 'application-list';
    const applicationContentId = 'application-content-list';

    const fixVersionSearchFunction = () => {
        const fixVersionId = document.getElementById(selectId).value;
        removeAllChildElements(applicationListId);
        const applications = getReleaseTicketsByFixVersion(fixVersionId);
        populateApplicationList(applications, applicationListId);
    }

    const createRelFunction = () => {
        const fixVersionId = document.getElementById(selectId).value;
        createReleaseTickets(fixVersionId);
        removeAllChildElements(applicationListId);
        populateApplicationList(applications, applicationListId);
    }

    console.log('applicationButton');
    const listElement = document.createElement('ul');
    listElement.classList.add('applicationContentList');
    listElement.id = applicationContentId;
    const fixVersionDropDownElement = fixVersionDropDown(selectId, fixVersionSearchFunction, createRelFunction);
    listElement.appendChild(fixVersionDropDownElement);
    const applicationListElement = document.createElement('ul');
    applicationListElement.classList.add('applicationList');
    applicationListElement.id = applicationListId;
    listElement.appendChild(applicationListElement);
    loadContent(listElement);
}

export const projectsButton = () => {
    console.log('projectsButton');
}

const clearChildElement = (parentElementId, childElementId) => {
    const parentElement = document.getElementById(parentElementId);
    const childElement = document.getElementById(childElementId);
    if (childElement) {
        parentElement.removeChild(childElement);
    }
}

const removeAllChildElements = (parentElementId) => {
    console.log("🚀 ~ removeAllChildElements ~ parentElementId:", parentElementId)
    const parentElement = document.getElementById(parentElementId);
    if (parentElement) {
        parentElement.innerHTML = '';
    }
}