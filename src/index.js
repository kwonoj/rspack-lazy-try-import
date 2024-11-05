let devUIImport;
if (Date.now()) {
    console.log('loading ui');
    devUIImport = import(/* webpackChunkName: "devui" */ './render');
    console.log('dynamic import created', devUIImport);
}

(async function initApp() {
    let devUI;
    if (true) {
        console.log('found dynamic import to devUI, loading');
        const devUIModule = await import(/* webpackChunkName: "devui" */ './render');
        console.log('devUI loaded', devUIModule);
        devUI = devUIModule.default;
        devUI.render();
        console.log('rendered devUI');
    }
})();
