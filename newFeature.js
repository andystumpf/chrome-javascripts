//1. Create a new bookmark.
//2. Add this script to the bookmark url
//3. Add execute.js to S3 bucket or change the location to a public facing URL where execute.js can be found.

javascript: (function () { const d = document; const z = d.createElement('scr' + 'ipt'); const b = d.body; const l = d.location; try { if (!b) throw 0; z.setAttribute('src', l.protocol + '//content.s3.amazonaws.com/execute.js?t=' + new Date().getTime()); b.appendChild(z); } catch (e) { alert('Please wait until the page has loaded.'); } })();