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
        customFunction: (bemsId, siteRequesting) => {
            return { '#ordDeskUser': bemsId };
        },
    },
    {
        destination: '#siteRequestingComboboxInput',
        customFunction: (bemsId, siteRequesting) => {
            return { '#siteRequestingComboboxInput': siteRequesting };
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
        customFunction: (bemsId, siteRequesting) => {
            return { '#ordDeskUser': bemsId };
        },
    },
    {
        destination: '#siteRequestingComboboxInput',
        customFunction: (bemsId, siteRequesting) => {
            return { '#siteRequestingComboboxInput': siteRequesting };
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
        customFunction: (bemsId, siteRequesting) => {
            return { '#ordDeskUser': bemsId };
        },
    },
    {
        destination: '#siteRequestingComboboxInput',
        customFunction: (bemsId, siteRequesting) => {
            return { '#siteRequestingComboboxInput': siteRequesting };
        },
    },
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
        const { bemsId, siteRequesting, selectedProcess, isDragAndDropChecked } = message;
        const sourceFields = {};
        getSourceFields(bemsId, siteRequesting, selectedProcess, isDragAndDropChecked, sourceFields);
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
        const pageType = adHocElement === null ? 'AdHoc' : 'Hardcopy';
        console.log("from content.js pageType:", pageType)
        sendResponse({ pageType });
    }
});

function getSourceFields(bemsId, siteRequesting, selectedProcess, isDragAndDropChecked, sourceFields) {
    if (selectedProcess === 'AdHoc') {
        console.log('getSourceFields called with adhoc process')
        // Implement the logic for the Ad Hoc process
        adHocFieldsMappings.forEach((mapping) => {
            // Handle the custom function for extension user bemsId and siteRequesting values
            if (mapping.customFunction) {
                const customValues = mapping.customFunction(bemsId, siteRequesting);
                Object.assign(sourceFields, customValues);
            } else {
                const sourceElement = document.querySelector(mapping.source);
                if (sourceElement) {
                    let value = sourceElement.textContent.trim();

                    // handle #priorityComboboxInput to format text to captialize first letter
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
                                value = element;
                                console.log('deliverTo', value);
                                break;
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
                // Handle the custom function for extension user bemsId and siteRequesting values
                if (mapping.customFunction) {
                    const customValues = mapping.customFunction(bemsId, siteRequesting);
                    Object.assign(sourceFields, customValues);
                } else {
                    const sourceElement = document.querySelector(mapping.source);
                    if (sourceElement) {
                        let value = sourceElement.textContent.trim();

                        // handle #priorityComboboxInput to format text to captialize first letter
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
                                    value = element;
                                    console.log('deliverTo', value);
                                    break;
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
                // Handle the custom function for extension user bemsId and siteRequesting values
                if (mapping.customFunction) {
                    const customValues = mapping.customFunction(bemsId, siteRequesting);
                    Object.assign(sourceFields, customValues);
                } else {
                    const sourceElement = document.querySelector(mapping.source);
                    if (sourceElement) {
                        let value = sourceElement.textContent.trim();

                        // handle #priorityComboboxInput to format text to captialize first letter
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
                                    value = element;
                                    console.log('deliverTo', value);
                                    break;
                                }
                            }
                        }

                        sourceFields[mapping.destination] = value;
                    }
                }
            });
        }
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
    }
}

function updateElementsForSelectedProcess(selectedProcess) {
    console.log('updateElementsForSelectedProcess called with:', selectedProcess);
    if (selectedProcess === 'AdHoc') {
        // Implement the logic for the Ad Hoc process
        console.log('Ad Hoc process selected');
    } else if (selectedProcess === 'Hardcopy') {
        // Implement the logic for the Hardcopy process
        console.log('Hardcopy process selected');
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
