function askLanguage() {
    let lang = prompt('Какой язык вы используете, ru или en?');
    switch (lang) {
        case 'ru':
            alert('Привет, прекрасный мир!');
            break;
        case 'en':
            alert('Hello beautiful world!');
            break;
    }
}
