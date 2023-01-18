javascript:(function() {
  try {
    const a = document.createElement('a');
    const dom = document.querySelector('main > .flex-1 > .h-full .flex');
    const template = document.createElement('template');
    const title = document.title;
    template.innerHTML = dom.innerHTML;
    ['.items-end', 'img', 'svg', 'button', ':empty'].forEach(selector => {
      template.content.querySelectorAll(selector).forEach(node => {
        node.remove();
      });
    });
    const divs = template.content.querySelectorAll('body > .w-full:nth-child(2n+2)');
    divs.forEach(div => {
        const h3 = document.createElement("h3");
        h3.classList.add("custom-h3");
        h3.innerText = "Response";
        div.prepend(h3);
    });
    const divs2 = template.content.querySelectorAll('body > .w-full:nth-child(2n+1)');
    divs2.forEach(div => {
        const h3 = document.createElement("h3");
        h3.classList.add("customprompt-h3");
        h3.innerText = "Prompt";
        div.prepend(h3);
    });

    a.href = URL.createObjectURL(new Blob([`<!DOCTYPE html>
<html>
<head>
  <title>Chat GPT: ${title}</title>
  <meta name="generator" content="chatGPT Saving Bookmark"/>
<style>

body {
  font-size: 16px;
  font-family: Arial, sans-serif !important;
  line-height: 28px;
  color: whitesmoke !important;
}
body > .w-full {
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
body > .w-full:nth-child(2n+1)::before {
    content: "Prompt";
    display: block;
    font-weight: bold;
    margin-bottom: 2px;
    font-size: 16px;
    background: none;
    font-family: Arial, sans-serif !important;
    line-height: 18px;
    color: whitesmoke !important;
}
body > .w-full:nth-child(2n+2)::before {
    content: "AI";
    display: block;
    font-weight: bold;
    margin-bottom: 2px;
    font-size: 16px;
    background: none;
    font-family: Arial, sans-serif !important;
    line-height: 18px;
    color: whitesmoke !important;
}
/* prompt */
body > .w-full:nth-child(2n+1) {
  background: #3B3F41;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

/* response */
body > .w-full:nth-child(2n+2) {
  background: #52575A;
  margin: 10px;
}
p{
    color: whitesmoke;
}
a, a:visited {
  color: #7792cd;
}
pre {
  margin: 0 0 1em 0;
  display: inline-block;
  width: 100%;
}
pre code.hljs {
  margin-bottom: 1em;
  border-radius: 5px;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.flex-col {
  max-width: 850px;
  margin: 0px auto;
}
</style>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/styles/default.min.css"/>
</head>
<body>${template.innerHTML}</body></html>`], {type: 'text/html'}));
    const non_letters_re = /[^\p{L}\p{N}]+/gu;
    const trailing_dash_re = /(^-)|(-$)/g;
    a.download = title.toLowerCase()
      .replace(non_letters_re, "-")
      .replace(trailing_dash_re, '') + '.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  } catch(e) {
    alert(e.message);
  }
})();
