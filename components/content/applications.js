import { getAllFixVersions } from "../../controllers/fixVersionController.js";
import dropDown from "../shared/dropDown.js";
import lineBreak from "../shared/lineBreak.js";


export const fixVersionDropDown = (selectId, fixVersionSearchFunction, createRelFunction) => {

    const applicationDropDownFrame = document.createElement('div');
    applicationDropDownFrame.classList.add('dropdown-frame');

    const fixVersions = getAllFixVersions();
    const fixVersionOptions = convertFixVersionsToOptions(fixVersions);
    const dropDownElement = dropDown('Fix Version', selectId, fixVersionOptions);

    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.addEventListener('click', fixVersionSearchFunction);
    searchButton.id = 'dropdown-search-button';
    searchButton.classList.add('application-button');
    dropDownElement.appendChild(searchButton);

    const createReleaseTicketsButton = document.createElement('button');
    createReleaseTicketsButton.textContent = 'Create REL';
    createReleaseTicketsButton.id = 'create-release-tickets-button';
    createReleaseTicketsButton.classList.add('application-button');
    createReleaseTicketsButton.addEventListener('click', createRelFunction);
    dropDownElement.appendChild(createReleaseTicketsButton);

    const lineBreakElement = lineBreak();
    applicationDropDownFrame.appendChild(dropDownElement);
    applicationDropDownFrame.appendChild(lineBreakElement);

    return applicationDropDownFrame;
}

export const populateApplicationList = (applicationListId) => {
    const listElement = document.getElementById(applicationListId);
    const applications = getReleaseTicketsByFixVersion(fixVersionId);
    applications.forEach(application => {
        const listItem = applicationListItem(application);
        listElement.appendChild(listItem);
    });

    applications.forEach(application => {
        const listItem = applicationListItem(application);
        listElement.appendChild(listItem);
    });

    return listElement;
}

export const applicationListItem = (application) => {
    const listItem = document.createElement('li');
    listItem.classList.add('applicationListItem');

    const applicationName = document.createElement('h3');
    applicationName.textContent = application.name;
    listItem.appendChild(applicationName);

    const releaseTicketLink = document.createElement('a');
    releaseTicketLink.classList.add('releaseTicketLink');
    releaseTicketLink.textContent = application.releaseTicketKey;
    releaseTicketLink.href = application.releaseTicketUrl;
    listItem.appendChild(releaseTicketLink);

    return listItem;
}

const convertFixVersionsToOptions = (fixVersions) => {
    return fixVersions.map(({ fixVersionId, fixVersionName }) => {
        return { value: fixVersionId, text: fixVersionName };
    });
}

