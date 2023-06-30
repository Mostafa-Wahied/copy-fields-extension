console.log('content.js loaded');
const adHocFieldsMappings = [
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(2)', destination: '#drawingNumber' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(4)', destination: '#sheetId' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(5)', destination: '#revision' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) td:nth-child(5)', destination: '#suppCode' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) td:nth-child(7)', destination: '#otherSys' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) td:nth-child(4)', destination: '#airplaneModelComboboxInput' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(5) a', destination: '#priorityComboboxInput' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(4)', destination: '#disclosureValueComboboxInput' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(1) td:nth-child(12) span select option:checked', destination: '#sitePerformingLocComboboxInput' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(1)', destination: '#buLocDept' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(1)', destination: '#deliverTo' },
    {
        destination: '#customerRequestDate',
        customFunction: () => {
            const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(6) input');
            if (inputElement) {
                return { '#customerRequestDate': inputElement.value };
            }
            return {};
        },
    },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child td:nth-child(16)', destination: '#customerRequestTime' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child td:nth-child(16)', destination: '#orderTime' },
    {
        destination: '#ordDeskUser',
        customFunction: (bemsId, selectedSiteRequesting) => {
            return { '#ordDeskUser': bemsId };
        },
    },
    {
        destination: '#siteRequestingComboboxInput',
        customFunction: (bemsId, selectedSiteRequesting) => {
            return { '#siteRequestingComboboxInput': selectedSiteRequesting };
        },
    },
    {
        destination: '#orderComments',
        customFunction: () => {
            const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(2) input');
            if (inputElement) {
                return { '#orderComments': inputElement.value };
            }
            return {};
        },
    },
];

const hardcopyFieldsMappings = [
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) > td:nth-child(1) span', destination: '#drawingNumber' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(4)', destination: '#sheetId' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(1) > td:nth-child(13)', destination: '#custBemsid' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) > td:nth-child(4)', destination: '#disclosureValueComboboxInput' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(5) a', destination: '#priorityComboboxInput' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(1) td:nth-child(11) span select option:checked', destination: '#sitePerformingLocComboboxInput' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) td:nth-child(8)', destination: '#airplaneModelComboboxInput' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) td:nth-child(11)', destination: '#otherSys' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(1)', destination: '#buLocDept' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(1)', destination: '#deliverTo' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(2) textarea', destination: '#orderComments' },
    {
        destination: '#revision',
        customFunction: () => {
            const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(5) input');
            if (inputElement) {
                return { '#revision': inputElement.value };
            }
            return {};
        }
    },
    {
        destination: '#customerRequestDate',
        customFunction: () => {
            const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(6) input');
            if (inputElement) {
                return { '#customerRequestDate': inputElement.value };
            }
            return {};
        },
    },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child td:nth-child(15)', destination: '#customerRequestTime' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child td:nth-child(15)', destination: '#orderTime' },

    {
        destination: '#ordDeskUser',
        customFunction: (bemsId, selectedSiteRequesting) => {
            return { '#ordDeskUser': bemsId };
        },
    },
    {
        destination: '#siteRequestingComboboxInput',
        customFunction: (bemsId, selectedSiteRequesting) => {
            return { '#siteRequestingComboboxInput': selectedSiteRequesting };
        },
    },
    {
        destination: '#orderComments',
        customFunction: () => {
            const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(2) input');
            if (inputElement) {
                return { '#orderComments': inputElement.value };
            }
            return {};
        },
    },
];

const dragNDropFieldsMappings = [
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(1) > td:nth-child(13)', destination: '#custBemsid' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) > td:nth-child(4)', destination: '#disclosureValueComboboxInput' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(5) a', destination: '#priorityComboboxInput' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(1) td:nth-child(11) span select option:checked', destination: '#sitePerformingLocComboboxInput' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) td:nth-child(11)', destination: '#otherSys' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child td:nth-child(15)', destination: '#customerRequestTime' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child td:nth-child(15)', destination: '#orderTime' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(1)', destination: '#buLocDept' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(1)', destination: '#deliverTo' },
    { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(2) textarea', destination: '#orderComments' },
    {
        destination: '#drawingNumber',
        customFunction: () => {
            const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) > td:nth-child(1) input');
            if (inputElement) {
                return { '#drawingNumber': inputElement.value };
            }
            return {};
        }
    },
    {
        destination: '#sheetId',
        customFunction: () => {
            const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(4)');
            if (inputElement) {
                return { '#sheetId': '0000' };
            }
            return '0000';
        }
    },
    {
        destination: '#airplaneModelComboboxInput',
        customFunction: () => {
            const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(4)');
            if (inputElement) {
                return { '#airplaneModelComboboxInput': '737' };
            }
            return '0000';
        }
    },
    {
        destination: '#revision',
        customFunction: () => {
            const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(5) input');
            if (inputElement) {
                return { '#revision': '-' };
            }
            return {};
        }
    },
    {
        destination: '#customerRequestDate',
        customFunction: () => {
            const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(6) input');
            if (inputElement) {
                return { '#customerRequestDate': inputElement.value };
            }
            return {};
        },
    },
    {
        destination: '#ordDeskUser',
        customFunction: (bemsId, selectedSiteRequesting) => {
            return { '#ordDeskUser': bemsId };
        },
    },
    {
        destination: '#siteRequestingComboboxInput',
        customFunction: (bemsId, selectedSiteRequesting) => {
            return { '#siteRequestingComboboxInput': selectedSiteRequesting };
        },
    },
];

const HASFieldsMappings = [
    { source: '#txtDrawNo1', destination: '#drawingNumber' },
    { source: '#txtSheet1', destination: '#sheetId' },
    { source: '#txtRev1', destination: '#revision' },
    { source: 'table.DisplayText:nth-child(4) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(2) > input:nth-child(1)', destination: '#disclosureValueComboboxInput' },
    { source: 'div.feature:nth-child(3) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(2) > td:nth-child(4)', destination: '#custBemsid' },
    { source: 'div.feature:nth-child(3) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(3) > td:nth-child(4)', destination: '#deliverTo' },
    { source: 'td.NormalTextCenter:nth-child(5)', destination: '#buLocDept' },
    { source: 'table#orderTitle tr td:nth-child(2) h2', destination: '#otherSys' },
    { source: '#selFormat option:checked', destination: '#convCenterProdComboboxInput' },
    { source: '#requireddt', destination: '#customerRequestDate' },
    {
        source: ['table#orderTitle tr td:nth-child(2) h2', '#selFormat option:checked'],
        destination: '#orderComments',
        customFunction: (sourceSelectors) => {
            console.log('sourceSelectors', sourceSelectors);
            const otherSysElement = document.querySelector(sourceSelectors[0]);
            const convCenterProdElement = document.querySelector(sourceSelectors[1]);
            if (otherSysElement && convCenterProdElement) {
                console.log('otherSysElement and convCenterProdElement found')
                const otherSysValue = otherSysElement.textContent.trim();
                let convCenterProdValue = convCenterProdElement.textContent.trim();
                console.log('convCenterProdValue: ', convCenterProdValue);
                if (convCenterProdValue === 'CATIA V5 - CATDrawing, CATPart') {
                    convCenterProdValue = 'Catia V5 CATDrawing, CATPart DPI 500';
                } else if (convCenterProdValue === 'CATIA V5 - CATDrawing') {
                    convCenterProdValue = 'Catia V5 CATDrawing DPI 500';
                } else if (convCenterProdValue === 'Geometry - TIFF') {
                    convCenterProdValue = 'Geometry TIFF DPI 1000';
                } else {
                    convCenterProdValue = '';
                }
                const combinedValue = `${convCenterProdValue} ${otherSysValue}`;
                return { '#orderComments': combinedValue };
            } else {
                console.log('otherSysElement or convCenterProdElement not found');
            }
            return {};
        }
    },
    {
        destination: '#ordDeskUser',
        customFunction: (bemsId, selectedSiteRequesting) => {
            return { '#ordDeskUser': bemsId };
        },
    },
    {
        destination: '#mediaComboboxInput',
        customFunction: () => {
            return { '#mediaComboboxInput': "S05" };
        },
    },
    {
        destination: '#convVendorComboboxInput',
        customFunction: () => {
            return { '#convVendorComboboxInput': "GEOMETRIC" };
        },
    },
    {
        destination: '#customerRequestTime',
        customFunction: () => {
            return { '#customerRequestTime': "23:59" };
        },
    },


    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(2)', destination: '#drawingNumber' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(4)', destination: '#sheetId' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child > td:nth-child(5)', destination: '#revision' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) td:nth-child(5)', destination: '#suppCode' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) td:nth-child(4)', destination: '#airplaneModelComboboxInput' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(1) td:nth-child(12) span select option:checked', destination: '#sitePerformingLocComboboxInput' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(1)', destination: '#buLocDept' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(1)', destination: '#deliverTo' },
    // {
    //     destination: '#customerRequestDate',
    //     customFunction: () => {
    //         const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(6) input');
    //         if (inputElement) {
    //             return { '#customerRequestDate': inputElement.value };
    //         }
    //         return {};
    //     },
    // },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child td:nth-child(16)', destination: '#customerRequestTime' },
    // { source: 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:first-child td:nth-child(16)', destination: '#orderTime' },
    // {
    //     destination: '#ordDeskUser',
    //     customFunction: (bemsId, selectedSiteRequesting) => {
    //         return { '#ordDeskUser': bemsId };
    //     },
    // },
    // {
    //     destination: '#siteRequestingComboboxInput',
    //     customFunction: (bemsId, selectedSiteRequesting) => {
    //         return { '#siteRequestingComboboxInput': selectedSiteRequesting };
    //     },
    // },
    // {
    //     destination: '#orderComments',
    //     customFunction: () => {
    //         const inputElement = document.querySelector('table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(3) td:nth-child(2) input');
    //         if (inputElement) {
    //             return { '#orderComments': inputElement.value };
    //         }
    //         return {};
    //     },
    // },
];

document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('#copyFields');
    if (button) {
        button.addEventListener('click', copyFields);
    }
});

// Add the submit event listener code here for window 2 (eimmt) to log the value of #priorityComboboxInput
const form = document.querySelector('div[ng-form="orderParamsForm"]');
if (form) {
    console.log('Form element found:', form);
    form.addEventListener('submit', (event) => {
        console.log('Submit event triggered');
        const priorityComboboxInput = document.querySelector('#priorityComboboxInput');
        if (priorityComboboxInput) {
            console.log('Value of #priorityComboboxInput before submission:', priorityComboboxInput.value);
        }
    });
} else {
    console.log('Form element not found');
}


browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received:', message);

    if (message.command === 'getSourceFields') {
        const { bemsId, selectedSiteRequesting, selectedProcess, isDragAndDropChecked } = message;
        const sourceFields = {};
        getSourceFields(bemsId, selectedSiteRequesting, selectedProcess, isDragAndDropChecked, sourceFields);
        sendResponse({ sourceFields });
    } else if (message.command === 'setDestinationFields') {
        const { destinationFields, selectedProcess, isDragAndDropChecked } = message;
        setDestinationFields(destinationFields, selectedProcess, isDragAndDropChecked);
    } else if (message.command === 'updateProcess') {
        const { selectedProcess } = message;
        updateElementsForSelectedProcess(selectedProcess);
    } else if (message.command === 'updateDragAndDrop') {
        const { dragAndDropEnabled } = message;
        updateElementsForDragAndDrop(dragAndDropEnabled);
    }
    // Add the getPageType message handler here for defaulting the process dropdown to AdHoc or Hardcopy
    if (message.command === 'getPageType') {
        const adHocElement = document.querySelector('body > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > span:nth-child(1) > a:nth-child(1)');
        // Check if tab url has 'cobs' in it, if yes the pageType is HAS,
        // else check if adHocElement is null, if yes the pageType is AdHoc, else the pageType is Hardcopy
        const tabUrl = window.location.href;
        let pageType;
        if (tabUrl.includes('cobs')) {
            pageType = 'HAS';
        } else {
            pageType = adHocElement === null ? 'AdHoc' : 'Hardcopy';
        }

        console.log("from content.js pageType:", pageType)
        sendResponse({ pageType });
    }
});

function getSourceFields(bemsId, selectedSiteRequesting, selectedProcess, isDragAndDropChecked, sourceFields) {
    if (selectedProcess === 'AdHoc') {
        console.log('getSourceFields called with adhoc process')
        // Implement the logic for the Ad Hoc process
        adHocFieldsMappings.forEach((mapping) => {
            // Handle the custom function for extension user bemsId and selectedSiteRequesting values
            if (mapping.customFunction) {
                const customValues = mapping.customFunction(bemsId, selectedSiteRequesting);
                Object.assign(sourceFields, customValues);
            } else {
                const sourceElement = document.querySelector(mapping.source);
                if (sourceElement) {
                    let value = sourceElement.textContent.trim();

                    // handle #priorityComboboxInput to format text to capitalize first letter
                    if (mapping.destination === '#priorityComboboxInput') {
                        value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                    }

                    // Handle the conditional mapping for the specific source field
                    if (mapping.source === 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(1) td:nth-child(12) span select option:checked') {
                        if (value === 'S') {
                            value = 'ST LOUIS';
                        } else if (value === 'A') {
                            value = 'SEATTLE';
                        } else if (value === 'E') {
                            value = 'EVERETT';
                        }
                    }

                    // Handle the conditional mapping if #suppCode is empty
                    if (mapping.destination === '#suppCode' && !value) {
                        mapping.source = 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(1) td:nth-child(14)'
                    }

                    // Handle the conditional mapping if disclosureValueComboboxInput contains COM or MIL
                    if (mapping.destination === '#disclosureValueComboboxInput' && value.includes('COM')) {
                        value = 'COM';
                    } else if (mapping.destination === '#disclosureValueComboboxInput' && value.includes('MIL')) {
                        value = 'MIL';
                    }

                    // Handle the date and time splitting for customerRequestDate
                    if (mapping.destination === '#customerRequestTime') {
                        const [dateString, timeString] = value.split(' ');
                        // console.log('time value', value);
                        if (mapping.destination === '#customerRequestTime') {
                            value = timeString;
                        }
                    }
                    // Handle the date and time splitting for orderTime
                    if (mapping.destination === '#orderTime') {
                        const [dateString, timeString] = value.split(' ');
                        if (mapping.destination === '#orderTime') {
                            value = timeString;
                        }
                    }
                    // Handle buLocDept to only get the buLocDept value
                    if (mapping.destination === '#buLocDept') {
                        budget = value.split(',');
                        // value = budget[budget.length - 1].trim();
                        for (let i = 0; i < budget.length; i++) {
                            let element = budget[i].trim();
                            if (element.includes("-") && element.split("-").length === 3) {
                                // If the first element is 2 characters long, then it is the buLocDept value
                                if (element.split("-")[0].length === 2) {
                                    value = element;
                                    console.log('buLocDept', value);
                                    break;
                                }
                            }
                        }
                    }
                    // Handle deliverTo to only get the mailstop value
                    if (mapping.destination === '#deliverTo') {
                        budget = value.split(',');
                        for (let i = 0; i < budget.length; i++) {
                            let element = budget[i].trim();
                            if (element.includes("-") && element.split("-").length === 2) {
                                if (!element.split("-")[0].includes(" ") && !element.split("-")[0].includes(".") && !element.split("-")[1].includes(".")) {
                                    value = element;
                                    console.log('deliverTo', value);
                                    break;
                                }
                            } else {
                                value = ' ';
                            }
                        }
                    }

                    sourceFields[mapping.destination] = value;
                }
            }
        });
    } else if (selectedProcess === 'Hardcopy') {
        // Implement the logic for the Hardcopy process
        // check if isDragAndDropChecked is true
        if (isDragAndDropChecked) {
            // Implement the logic for the drag and drop option
            console.log('Drag and drop option selected');
            dragNDropFieldsMappings.forEach((mapping) => {
                // Handle the custom function for extension user bemsId and selectedSiteRequesting values
                if (mapping.customFunction) {
                    const customValues = mapping.customFunction(bemsId, selectedSiteRequesting);
                    Object.assign(sourceFields, customValues);
                } else {
                    const sourceElement = document.querySelector(mapping.source);
                    if (sourceElement) {
                        let value = sourceElement.textContent.trim();

                        // handle #priorityComboboxInput to format text to capitalize first letter
                        if (mapping.destination === '#priorityComboboxInput') {
                            value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                        }

                        // Handle the conditional mapping for the specific source field
                        if (mapping.source === 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(1) td:nth-child(11) span select option:checked') {
                            if (value === 'S') {
                                value = 'ST LOUIS';
                            } else if (value === 'A') {
                                value = 'SEATTLE';
                            } else if (value === 'E') {
                                value = 'EVERETT';
                            }
                        }

                        // // Handle the conditional mapping if #suppCode is empty
                        // if (mapping.destination === '#suppCode' && !value) {
                        //     mapping.source = 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) > td:nth-child(4)'
                        // }

                        // Handle the conditional mapping if disclosureValueComboboxInput contains COM or MIL
                        if (mapping.destination === '#disclosureValueComboboxInput' && value.includes('COM')) {
                            value = 'COM';
                        } else if (mapping.destination === '#disclosureValueComboboxInput' && value.includes('MIL')) {
                            value = 'MIL';
                        }

                        // Handle the date and time splitting for customerRequestDate
                        if (mapping.destination === '#customerRequestTime') {
                            const [dateString, timeString] = value.split(' ');
                            // console.log('time value', value);
                            if (mapping.destination === '#customerRequestTime') {
                                value = timeString;
                            }
                        }
                        // Handle the date and time splitting for orderTime
                        if (mapping.destination === '#orderTime') {
                            const [dateString, timeString] = value.split(' ');
                            if (mapping.destination === '#orderTime') {
                                value = timeString;
                            }
                        }
                        // Handle buLocDept to only get the buLocDept value
                        if (mapping.destination === '#buLocDept') {
                            budget = value.split(',');
                            // value = budget[budget.length - 1].trim();
                            for (let i = 0; i < budget.length; i++) {
                                let element = budget[i].trim();
                                if (element.includes("-") && element.split("-").length === 3) {
                                    // If the first element is 2 characters long, then it is the buLocDept value
                                    if (element.split("-")[0].length === 2) {
                                        value = element;
                                        console.log('buLocDept', value);
                                        break;
                                    }
                                }
                            }
                        }
                        // Handle deliverTo to only get the mailstop value
                        if (mapping.destination === '#deliverTo') {
                            budget = value.split(',');
                            for (let i = 0; i < budget.length; i++) {
                                let element = budget[i].trim();
                                if (element.includes("-") && element.split("-").length === 2) {
                                    if (!element.split("-")[0].includes(" ") && !element.split("-")[0].includes(".") && !element.split("-")[1].includes(".")) {
                                        value = element;
                                        console.log('deliverTo', value);
                                        break;
                                    }
                                } else {
                                    value = ' ';
                                }
                            }
                        }

                        if (mapping.destination === '#orderComments') {
                            console.log('orderComments', value);
                        }

                        sourceFields[mapping.destination] = value;
                    }
                }
            });
        } else {
            console.log('Drag and drop option not selected');
            hardcopyFieldsMappings.forEach((mapping) => {
                // Handle the custom function for extension user bemsId and selectedSiteRequesting values
                if (mapping.customFunction) {
                    const customValues = mapping.customFunction(bemsId, selectedSiteRequesting);
                    Object.assign(sourceFields, customValues);
                } else {
                    const sourceElement = document.querySelector(mapping.source);
                    if (sourceElement) {
                        let value = sourceElement.textContent.trim();

                        // handle #priorityComboboxInput to format text to capitalize first letter
                        if (mapping.destination === '#priorityComboboxInput') {
                            value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
                        }

                        // Handle the conditional mapping for the specific source field
                        if (mapping.source === 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(1) td:nth-child(11) span select option:checked') {
                            if (value === 'S') {
                                value = 'ST LOUIS';
                            } else if (value === 'A') {
                                value = 'SEATTLE';
                            } else if (value === 'E') {
                                value = 'EVERETT';
                            }
                        }

                        // // Handle the conditional mapping if #suppCode is empty
                        // if (mapping.destination === '#suppCode' && !value) {
                        //     mapping.source = 'table#bodyTable tr:not([style*="display: none"]) > td:first-child > table tr:nth-child(2) > td:nth-child(4)'
                        // }

                        // Handle the conditional mapping if disclosureValueComboboxInput contains COM or MIL
                        if (mapping.destination === '#disclosureValueComboboxInput' && value.includes('COM')) {
                            value = 'COM';
                        } else if (mapping.destination === '#disclosureValueComboboxInput' && value.includes('MIL')) {
                            value = 'MIL';
                        }

                        // Handle the date and time splitting for customerRequestDate
                        if (mapping.destination === '#customerRequestTime') {
                            const [dateString, timeString] = value.split(' ');
                            // console.log('time value', value);
                            if (mapping.destination === '#customerRequestTime') {
                                value = timeString;
                            }
                        }
                        // Handle the date and time splitting for orderTime
                        if (mapping.destination === '#orderTime') {
                            const [dateString, timeString] = value.split(' ');
                            if (mapping.destination === '#orderTime') {
                                value = timeString;
                            }
                        }
                        // Handle buLocDept to only get the buLocDept value
                        if (mapping.destination === '#buLocDept') {
                            budget = value.split(',');
                            // value = budget[budget.length - 1].trim();
                            for (let i = 0; i < budget.length; i++) {
                                let element = budget[i].trim();
                                if (element.includes("-") && element.split("-").length === 3) {
                                    // If the first element is 2 characters long, then it is the buLocDept value
                                    if (element.split("-")[0].length === 2) {
                                        value = element;
                                        console.log('buLocDept', value);
                                        break;
                                    }
                                }
                            }
                        }
                        // Handle deliverTo to only get the mailstop value
                        if (mapping.destination === '#deliverTo') {
                            budget = value.split(',');
                            for (let i = 0; i < budget.length; i++) {
                                let element = budget[i].trim();
                                if (element.includes("-") && element.split("-").length === 2) {
                                    if (!element.split("-")[0].includes(" ") && !element.split("-")[0].includes(".") && !element.split("-")[1].includes(".")) {
                                        value = element;
                                        console.log('deliverTo', value);
                                        break;
                                    }
                                } else {
                                    value = ' ';
                                }
                            }
                        }

                        sourceFields[mapping.destination] = value;
                    }
                }
            });
        }
    } else if (selectedProcess === 'HAS') {
        console.log('getSourceFields called with HAS process')
        // Implement the logic for the HAS process
        HASFieldsMappings.forEach((mapping) => {
            // Handle the custom function for extension user bemsId and selectedSiteRequesting values
            if (mapping.customFunction) {
                let customValues;
                if (Array.isArray(mapping.source)) {
                    // Handle the custom function for multiple source fields
                    customValues = mapping.customFunction(mapping.source);
                } else {
                    // Handle the custom function for single source field
                    customValues = mapping.customFunction(bemsId, selectedSiteRequesting);
                }
                Object.assign(sourceFields, customValues);
            } else {
                const sourceElement = document.querySelector(mapping.source);
                if (sourceElement) {
                    let value = sourceElement.textContent.trim();

                    // handle drawingNumber to only get the drawingNumber value
                    if (mapping.source === '#txtDrawNo1') {
                        const inputElement = document.querySelector('#txtDrawNo1');
                        if (inputElement) {
                            value = inputElement.value.split(' ')[0];
                        }
                        console.log('drawingNumber: ', value);
                    }
                    // handle sheetId to only get the sheetId value
                    if (mapping.source === '#txtSheet1') {
                        const inputElement = document.querySelector('#txtSheet1');
                        if (inputElement) {
                            value = inputElement.value;
                        }
                    }
                    // handle revision to only get the revision value
                    if (mapping.source === '#txtRev1') {
                        const inputElement = document.querySelector('#txtRev1');
                        if (inputElement) {
                            value = inputElement.value;
                        }
                    }
                    // handle disclosureValueComboboxInput to only get the value
                    if (mapping.destination === '#disclosureValueComboboxInput') {
                        // check if the checkbox is checked
                        if (sourceElement.checked) {
                            value = 'MIL';
                        } else {
                            value = 'COM';
                        }
                    }
                    // Handle BuLocDept to only get the buLocDept value without whitespaces
                    if (mapping.destination === '#buLocDept') {
                        budget = value.replace(/\s+/g, '');
                        value = budget;
                    }
                    // Handle convCenterProdComboboxInput
                    if (mapping.destination === '#convCenterProdComboboxInput') {
                        if (value === 'CATIA V5 - CATDrawing, CATPart' || value === 'CATIA V5 - CATDrawing') {
                            value = 'CATIA VERSION - 5';
                        } else if (value === 'Geometry - TIFF') {
                            value = 'TIFF FILE';
                        } else {
                            value = "";
                        }
                    }
                    // handle customerRequestDate to only get the drawingNumber value
                    if (mapping.source === '#requireddt') {
                        const inputElement = document.querySelector('#requireddt');
                        if (inputElement) {
                            value = inputElement.value;
                        }
                    }


                    sourceFields[mapping.destination] = value;
                }
            }
        });
    }
}

function setDestinationFields(destinationFields, selectedProcess, isDragAndDropChecked) {
    if (selectedProcess === 'AdHoc') {
        adHocFieldsMappings.forEach((mapping) => {
            const destinationElement = document.querySelector(mapping.destination);
            if (destinationElement && destinationFields[mapping.destination]) {
                // Set the value of dropdown fields by selecting the corresponding option
                if (destinationElement.tagName === 'SELECT') {
                    const optionToSelect = Array.from(destinationElement.options).find(option => option.value === destinationFields[mapping.destination]);
                    if (optionToSelect) {
                        optionToSelect.selected = true;

                        // Dispatch a change event to simulate a user selection
                        const changeEvent = new Event('change', { bubbles: true, cancelable: true });
                        destinationElement.dispatchEvent(changeEvent);
                    }
                } else {
                    destinationElement.value = destinationFields[mapping.destination];
                }

                // Dispatch an input event to simulate user input
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                destinationElement.dispatchEvent(inputEvent);
            }
        });
    } else if (selectedProcess === 'Hardcopy') {
        // Implement the logic for the Hardcopy process
        // check if isDragAndDropChecked is true
        if (isDragAndDropChecked) {
            // Implement the logic for the drag and drop option
            console.log('Drag and drop option selected');
            dragNDropFieldsMappings.forEach((mapping) => {
                const destinationElement = document.querySelector(mapping.destination);
                if (destinationElement && destinationFields[mapping.destination]) {
                    // Set the value of dropdown fields by selecting the corresponding option
                    if (destinationElement.tagName === 'SELECT') {
                        const optionToSelect = Array.from(destinationElement.options).find(option => option.value === destinationFields[mapping.destination]);
                        if (optionToSelect) {
                            optionToSelect.selected = true;

                            // Dispatch a change event to simulate a user selection
                            const changeEvent = new Event('change', { bubbles: true, cancelable: true });
                            destinationElement.dispatchEvent(changeEvent);
                        }
                    } else {
                        destinationElement.value = destinationFields[mapping.destination];
                    }

                    // Dispatch an input event to simulate user input
                    const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                    destinationElement.dispatchEvent(inputEvent);
                }
            });
        } else {
            console.log('Drag and drop option not selected');
            hardcopyFieldsMappings.forEach((mapping) => {
                const destinationElement = document.querySelector(mapping.destination);
                if (destinationElement && destinationFields[mapping.destination]) {
                    // Set the value of dropdown fields by selecting the corresponding option
                    if (destinationElement.tagName === 'SELECT') {
                        const optionToSelect = Array.from(destinationElement.options).find(option => option.value === destinationFields[mapping.destination]);
                        if (optionToSelect) {
                            optionToSelect.selected = true;

                            // Dispatch a change event to simulate a user selection
                            const changeEvent = new Event('change', { bubbles: true, cancelable: true });
                            destinationElement.dispatchEvent(changeEvent);
                        }
                    } else {
                        destinationElement.value = destinationFields[mapping.destination];
                    }

                    // Dispatch an input event to simulate user input
                    const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                    destinationElement.dispatchEvent(inputEvent);
                }
            });
        }
    } else if (selectedProcess === 'HAS') {
        // Implement the logic for the HAS process
        HASFieldsMappings.forEach((mapping) => {
            const destinationElement = document.querySelector(mapping.destination);
            if (destinationElement && destinationFields[mapping.destination]) {
                // Set the value of dropdown fields by selecting the corresponding option
                if (destinationElement.tagName === 'SELECT') {
                    const optionToSelect = Array.from(destinationElement.options).find(option => option.value === destinationFields[mapping.destination]);
                    if (optionToSelect) {
                        optionToSelect.selected = true;

                        // Dispatch a change event to simulate a user selection
                        const changeEvent = new Event('change', { bubbles: true, cancelable: true });
                        destinationElement.dispatchEvent(changeEvent);
                    }
                } else {
                    destinationElement.value = destinationFields[mapping.destination];
                }

                // Dispatch an input event to simulate user input
                const inputEvent = new Event('input', { bubbles: true, cancelable: true });
                destinationElement.dispatchEvent(inputEvent);
            }
        });
    }
}

function updateElementsForSelectedProcess(selectedProcess) {
    console.log('updateElementsForSelectedProcess called with:', "selectedProcess: ", selectedProcess);
    if (selectedProcess === 'AdHoc') {
        // Implement the logic for the Ad Hoc process
        console.log('Ad Hoc process selected');
    } else if (selectedProcess === 'Hardcopy') {
        // Implement the logic for the Hardcopy process
        console.log('Hardcopy process selected');
    } else if (selectedProcess === 'HAS') {
        // Implement the logic for the HAS process
        console.log('HAS process selected');
    }
}

function updateElementsForDragAndDrop(dragAndDropEnabled) {
    console.log('updateElementsForDragAndDrop called with:', dragAndDropEnabled);
    if (dragAndDropEnabled) {
        // Implement the logic for enabling the drag and drop option
        console.log('Drag and drop enabled');
    } else {
        // Implement the logic for disabling the drag and drop option
        console.log('Drag and drop disabled');
    }
}
