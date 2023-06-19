console.log('popup.js loaded');
const processDropdown = document.querySelector('#processDropdown');
const hardcopyOptions = document.querySelector('#hardcopyOptions');
const dragAndDropCheckbox = document.querySelector('#dragAndDropCheckbox');

processDropdown.addEventListener('change', () => {
    const selectedProcess = processDropdown.value;
    console.log('Process dropdown change event triggered:', selectedProcess);
    browser.storage.local.set({ selectedProcess });

    // For updating the hardcopy options display
    updateHardcopyOptionsDisplay(selectedProcess);

    // Show or hide the hardcopy options based on the selected process
    hardcopyOptions.style.display = selectedProcess === 'Hardcopy' ? 'block' : 'none';

    // Send a message to content.js to update the behavior or order of the elements
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        console.log('Selected tabs:', tabs);
        browser.tabs.sendMessage(tabs[0].id, { command: 'updateProcess', selectedProcess });
    });
});

dragAndDropCheckbox.addEventListener('change', () => {
    const dragAndDropEnabled = dragAndDropCheckbox.checked;
    console.log('Drag and drop checkbox change event triggered:', dragAndDropEnabled);
    browser.storage.local.set({ dragAndDropEnabled });

    // Send a message to content.js to update the behavior or order of the elements
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
        browser.tabs.sendMessage(tabs[0].id, { command: 'updateDragAndDrop', dragAndDropEnabled });
    });
});

// Get the selected process from storage and set the dropdown value
browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
    const currentTab = tabs[0];

    if (currentTab) {
        browser.tabs.sendMessage(currentTab.id, { command: 'getPageType' }).then((response) => {
            const { pageType } = response;

            if (pageType === 'AdHoc') {
                processDropdown.value = 'AdHoc';
            } else {
                processDropdown.value = 'Hardcopy';
            }

            // For updating the hardcopy options display
            updateHardcopyOptionsDisplay(processDropdown.value);
        });
    }
});

document.getElementById('copyFields').addEventListener('click', () => {
    const bemsId = document.querySelector('#bemsId').value;
    const siteRequesting = document.querySelector('#siteRequesting').value;
    const selectedProcess = processDropdown.value;
    const dragAndDropCheckbox = document.querySelector('#dragAndDropCheckbox');
    const isDragAndDropChecked = dragAndDropCheckbox && dragAndDropCheckbox.checked;

    browser.tabs.query({}).then((tabs) => {
        let sourceTab;
        let destinationTab;

        tabs.forEach((tab) => {
            if (tab.url.includes('adads')) {
                sourceTab = tab;
            } else if (tab.url.includes('eimmt')) {
                destinationTab = tab;
            }
        });

        if (sourceTab && destinationTab) {
            browser.tabs.sendMessage(sourceTab.id, { command: 'getSourceFields', bemsId, siteRequesting, selectedProcess, isDragAndDropChecked }).then((response) => {
                const { sourceFields } = response;
                browser.tabs.sendMessage(destinationTab.id, { command: 'setDestinationFields', destinationFields: sourceFields, selectedProcess, isDragAndDropChecked });
            });
        }
    });
});


function updateHardcopyOptionsDisplay(selectedProcess) {
    hardcopyOptions.style.display = selectedProcess === 'Hardcopy' ? 'block' : 'none';
}

