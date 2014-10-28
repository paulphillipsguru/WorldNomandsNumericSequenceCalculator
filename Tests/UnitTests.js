exports.config = {
    chromeOnly: true,
    
    capabilities: {
        'browserName': 'chrome'
    },
    specs: [
        'TestItems/*.spec.js'
    ],
    baseUrl:'http://localhost:55342/'
}
