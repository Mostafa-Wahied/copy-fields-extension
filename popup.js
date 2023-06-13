document.getElementById('copyFields').addEventListener('click', () => {
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
            browser.tabs.sendMessage(sourceTab.id, { command: 'getSourceFields' }).then((response) => {
                const { sourceFields } = response;
                browser.tabs.sendMessage(destinationTab.id, { command: 'setDestinationFields', destinationFields: sourceFields });
            });
        }
    });
});
