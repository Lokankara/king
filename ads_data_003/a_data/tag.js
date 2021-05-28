var somplo_config_ = 
{
	placement_id : 448792013,
	cachebuster : '1622146560626',
	template_code : '',
}
if (somplo_config_.template_code !== '') {
	var ifr = document.createElement('iframe');
	ifr.src = "about:blank";
	ifr.display = "none";
	document.documentElement.appendChild(ifr);
	ifr.contentWindow.document.write(somplo_config_.template_code);ifr.contentWindow.document.close();
}