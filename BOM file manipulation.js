// getting browser data
console.dir(window);

// getting history data
console.dir(history);

// navigating through window history data
window.history.go(-1);
// -1 to go back in history
window.history.go(1);
// 1 to go forward in history

/* Window navigator object
In the window object that we just saw, there is a navigator property. This property is particularly interesting because it contains information about the browser we are using, such as what browser it is and what version we are using, and what operating system the browser is running on.
This can be handy for customizing the website for certain operating systems. Imagine a download button that will be different for Windows,
Linux, and macOS.
 */
console.dir(navigator);

// full format
console.dir(window.navigator);

// window location object
console.dir(location);

location.ancestorOrigins.length;
/* This will get the length of the ancestorOrigins object, which represents
how many browsing contexts our page is associated with. This can be
useful to determine whether the web page is framed in an unexpected
context. Not all browsers have this object though; again, this BOM and all
the elements of it vary per browser.
 */

// getting browser link and protocol with the location model
console.log(window.location.href);
console.log(window.location.protocol);