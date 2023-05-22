(function(App) {
    const text = App.hello();
    const text2 = App.helloEnglish();
    document.write(text,text2);
})(window.App || (window.App = {}));