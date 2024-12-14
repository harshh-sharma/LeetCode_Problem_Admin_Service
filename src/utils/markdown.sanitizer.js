const marked = require('marked');
const sanitizedHtmlLibrary = require('sanitize-html');
const turndown = require('turndown');

function sanitizeMarkdownContent(markdownContent){
    const turndownService = new turndown();

    const convertedHtml = marked.parse(markdownContent);

    const sanitizedHtml = sanitizedHtmlLibrary(convertedHtml,{
        allowedTags:sanitizedHtmlLibrary.allowedTags.concat(['img'])
    })

    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;