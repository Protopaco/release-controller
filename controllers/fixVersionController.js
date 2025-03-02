
export const getReleaseTicketsByFixVersion = (fixVersionId) => {
    console.log("🚀 ~ getReleaseTicketsByFixVersion ~ fixVersionId:", fixVersionId)

    const applications = [
        { name: `${fixVersionId} Application 1`, releaseTicketKey: 'REL-1', releaseTicketUrl: 'http://www.google.com' },
        { name: `${fixVersionId} Application 1`, releaseTicketKey: 'REL-2', releaseTicketUrl: 'http://www.google.com' },
        { name: `${fixVersionId} Application 1`, releaseTicketKey: 'REL-3', releaseTicketUrl: 'http://www.google.com' }
    ];
    return applications;
}

export const getAllFixVersions = () => {
    console.log('getAllFixVersions');
    const fixVersionOptions = [
        { fixVersionId: 1, fixVersionName: 'Release 18.8', startDate: '2021-02-06', endDate: '2021-02-10' },
        { fixVersionId: 2, fixVersionName: 'Release 18.9', startDate: '2021-01-16', endDate: '2021-02-10' },
        { fixVersionId: 3, fixVersionName: 'Release 18.10', startDate: '2021-01-20', endDate: '2021-02-10' },
    ]
    return fixVersionOptions;
}

export const createFixVersion = (fixVersionName, startDate, endDate) => {
    console.log('createFixVersion');

}

export const updateFixVersion = (fixVersionId, fixVersionName, startDate, endDate) => {
    console.log('updateFixVersion');
}

export const deleteFixVersion = (fixVersionId) => {
    console.log('deleteFixVersion');
}