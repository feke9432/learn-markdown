var fs = require('fs');

var config = fs.readFileSync(__dirname + '/日语平假名和片假名一览表.txt', "utf-8");

var html = fs.readFileSync(__dirname + '/index.html', "utf-8");

var arr = changeFile(config);

var nextHtml = changeHtml(html, arr);

fs.writeFileSync(__dirname + '/index01.html', nextHtml);

function changeFile(str) {
    return str.split(' ').filter(x => x !== '' && !/[a-z]+/.test(x)).map(x => x.replace('\r\n\r\n', ''))
}

function changeHtml(html, arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i%2 === 0 ) {
            console.log(arr[i]);
            html = html.replace(arr[i], arr[i + 1])
        }
    }
    html = html.replace('あ', 'ア')
    return html
}