/* 
<html>
 <head>
 <title>Tab in the browser</title>
 </head>
 <body>
 <h1>DOM</h1>
 <div>
 <p>Hello web!</p>
 <a href="https://google.com">Here's a link!</a>
 </div>
 </body>
</html>

the most outer element, html, is at the top of the tree. The
next levels, head and body, are its children. head has only one child: title.
body has two children: h1 and div. And div has two children: p and a.
These are typically used for paragraphs and links (or buttons)
 */

// selecting page elements
document.querySelector();
document.querySelectorAll();
// the first "querySelectorAll()" will return the first element within the document that matches the query selectors.