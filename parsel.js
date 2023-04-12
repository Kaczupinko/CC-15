const htmlparser2 = require('htmlparser2');
const axios = require('axios');
const { DomHandler, Parser } = htmlparser2;
const fs = require('fs');

function processASTNode(node) {
    if (node.type === 'text') {
        return node.data;
    } else if (node.type === 'tag') {
        const attrs = Object.keys(node.attribs || {})
            .map(attr => `${attr}="${node.attribs[attr]}"`)
            .join(' ');
        const children = node.children.map(processASTNode).join('');
        return `<${node.name}${attrs ? ' ' + attrs : ''}>${children}</${node.name}>`;
    } else {
        return '';
    }
}

async function fetchHTML(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching HTML:', error);
        return '';
    }
}

function htmlToAST(html) {
    const handler = new DomHandler();
    const parser = new Parser(handler);
    parser.parseComplete(html);
    return handler.dom;
}

(async () => {
    const url = 'https://przeprogramowani.pl/o-nas';
    const html = await fetchHTML(url);
    const ast = htmlToAST(html);

    const htmlString = ast.map(processASTNode).join('');
    console.log(htmlString);

    fs.writeFile('przeprogramowani.html', htmlString, (err) => {
        if (err) throw err;
        console.log('Plik został zapisany');
    });
})();




