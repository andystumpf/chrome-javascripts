//  create a Chrome Bookmark with the following URL
//javascript:(function () {   const d = document;   const z = d.createElement('scr' + 'ipt');   const b = d.body;   const l = d.location;   try {     if (!b) throw 0;     z.setAttribute(       'src',       l.protocol + '//content.s3.amazonaws.com/execyte.js?t=' + new Date().getTime()     );     b.appendChild(z);   } catch (e) {     alert('Please wait until the page has loaded.');   } })();

(function () {
    const Team = prompt('Team');
    if (!Team) return;
    const featuresAdd = [000];
    const featuresRemove = [001];


 featuresAdd.forEach((feature) =>
        fetch('https://website.com/Team/Add', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                feature,
                Teams: `[${Team}]`,
            }),
        })
    );
    featuresRemove.forEach((feature) =>
        fetch('https://website.com/Team/Add', {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'include',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                feature,
                Teams: `[${Team}]`,
            }),
        })
     );
})();