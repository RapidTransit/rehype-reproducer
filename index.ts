import pug from 'pug';
import {rehype} from "rehype";
import rehypeFormat from "rehype-format";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";

let compiledTemplate = pug.compileFile('./layout.pug', {
    pretty: '  ',
    doctype: 'html',
});

let pugResult = compiledTemplate({css: ['app'], js:['app']});

console.log("PUG RESULT", pugResult);

rehype().use(rehypeFormat).use(rehypeParse).use(rehypeStringify).process(pugResult).then(result => {
    console.log("REHYPE RESULT", result.toString());
}).catch(err => {
    console.error(err);
});