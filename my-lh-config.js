module.exports = {
    extends: 'lighthouse:default',
    settings: {
        onlyCategories: ['performance', 'pwa'],
        formFactor: 'mobile'
    }
}