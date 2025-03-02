import { fixVersionDropDown, populateRelTicketList } from "../content/relTickets.js";
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

export const relTicketButton = () => {
    const selectId = 'fix-version';
    const relTicketListId = 'rel-ticket-list';
    const relTicketContentId = 'rel-ticket-content-list';

    const fixVersionSearchFunction = () => {
        const fixVersionId = document.getElementById(selectId).value;
        removeAllChildElements(relTicketListId);
        const relTickets = getReleaseTicketsByFixVersion(fixVersionId);
        populateRelTicketList(relTickets, relTicketListId);
    }

    const createRelFunction = () => {
        const fixVersionId = document.getElementById(selectId).value;
        createReleaseTickets(fixVersionId);
        removeAllChildElements(relTicketListId);
        populateRelTicketList(relTickets, relTicketListId);
    }

    console.log('relTicketButton');
    const listElement = document.createElement('ul');
    listElement.classList.add('relTicketContentList');
    listElement.id = relTicketContentId;
    const fixVersionDropDownElement = fixVersionDropDown(selectId, fixVersionSearchFunction, createRelFunction);
    listElement.appendChild(fixVersionDropDownElement);
    const relTicketListElement = document.createElement('ul');
    relTicketListElement.classList.add('relTicketList');
    relTicketListElement.id = relTicketListId;
    listElement.appendChild(relTicketListElement);
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