import { getAllFixVersions } from "../../controllers/fixVersionController.js";
import dropDown from "../shared/dropDown.js";
import lineBreak from "../shared/lineBreak.js";


export const fixVersionDropDown = (selectId, fixVersionSearchFunction, createRelFunction) => {

    const relTicketDropDownFrame = document.createElement('div');
    relTicketDropDownFrame.classList.add('dropdown-frame');

    const fixVersions = getAllFixVersions();
    const fixVersionOptions = convertFixVersionsToOptions(fixVersions);
    const dropDownElement = dropDown('Fix Version', selectId, fixVersionOptions);

    const searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.addEventListener('click', fixVersionSearchFunction);
    searchButton.id = 'dropdown-search-button';
    searchButton.classList.add('rel-ticket-button');
    dropDownElement.appendChild(searchButton);

    const createReleaseTicketsButton = document.createElement('button');
    createReleaseTicketsButton.textContent = 'Create REL';
    createReleaseTicketsButton.id = 'create-release-tickets-button';
    createReleaseTicketsButton.classList.add('rel-ticket-button');
    createReleaseTicketsButton.addEventListener('click', createRelFunction);
    dropDownElement.appendChild(createReleaseTicketsButton);

    const lineBreakElement = lineBreak();
    relTicketDropDownFrame.appendChild(dropDownElement);
    relTicketDropDownFrame.appendChild(lineBreakElement);

    return relTicketDropDownFrame;
}

export const populateRelTicketList = (relTicketListId) => {
    const listElement = document.getElementById(relTicketListId);
    const relTickets = getReleaseTicketsByFixVersion(fixVersionId);
    relTickets.forEach(relTicket => {
        const listItem = relTicketListItem(relTicket);
        listElement.appendChild(listItem);
    });

    relTickets.forEach(relTicket => {
        const listItem = relTicketListItem(relTicket);
        listElement.appendChild(listItem);
    });

    return listElement;
}

export const relTicketListItem = (relTicket) => {
    const listItem = document.createElement('li');
    listItem.classList.add('relTicketListItem');

    const relTicketName = document.createElement('h3');
    relTicketName.textContent = relTicket.name;
    listItem.appendChild(relTicketName);

    const releaseTicketLink = document.createElement('a');
    releaseTicketLink.classList.add('releaseTicketLink');
    releaseTicketLink.textContent = relTicket.releaseTicketKey;
    releaseTicketLink.href = relTicket.releaseTicketUrl;
    listItem.appendChild(releaseTicketLink);

    return listItem;
}

const convertFixVersionsToOptions = (fixVersions) => {
    return fixVersions.map(({ fixVersionId, fixVersionName }) => {
        return { value: fixVersionId, text: fixVersionName };
    });
}

