(function() {
	if(confirm("Are you sure you want to nuke this site? (Changes are only visible on this device. To revert the changes, please refresh the page)")) {
		let num = 0;
		document.write(`<div id="times">Times nuked: ${num}</div>`);
		document.title = "NUKED";
		var link = document.querySelector("link[rel*='icon']") || document.createElement("link");
		link.type = "image/x-icon";
		link.rel = "shortcut icon";
		link.href = "https://cordx.wtf/u/favicon";
		setInterval(()=> {
			document.title = "NUKED";
			link.href = "https://cordx.wtf/u/favicon";
			num++;
			document.getElementById("times").innerHTML=`Times nuked: ${num.toLocaleString()}`;
			document.write("<input type='button' value='☢ nuked ☢' style='border-radius: 5px; margin: 2px; font-weight: 700; background-color: red; border: 2px solid darkred; font-family: sans-serif; text-transform: uppercase; color: white; font-size: 15px;' onclick='window.open(`https://cordx.wtf/u/googlesearch`)'>");
		});
	}else{}
})();