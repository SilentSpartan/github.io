(function(d,h){d.HAPRadioData=function(l,A){function B(){var a=e.path;";"==a.substring(a.length-1)&&(a=a.substring(0,a.length-1));"/"==a.substring(a.length-1)&&(a=a.substring(0,a.length-1));d.radioDataXHR&&d.radioDataXHR.abort();var c=new XMLHttpRequest;c.onerror=function(a){};c.onreadystatechange=function(){if(4===this.readyState){if(200===this.status){if(e.version&&1==e.version)var a=c.responseText.split(","),b=a[6];else a=JSON.parse(c.responseText),b=a.songtitle;v=a;var r=b.split("-");a=h.trim(r[0]);
r=h.trim(r[1]);k={artist:a,title:r,thumb:null};m?m!=b?l.getRadioArtwork?q(a,r):n||h(p).trigger("HAPRadioData.DATA_READY",k):console.log("data hasnt changed"):l.getRadioArtwork?q(a,r):n||h(p).trigger("HAPRadioData.DATA_READY",k)}m=b}else t||(g&&clearInterval(g),g=setInterval(function(){B()},w))};e.version&&1==e.version?c.open("GET",u[f]+a+"/7.html",!0):c.open("GET",u[f]+a+"/stats?sid="+(l.sid||"1")+"&json=1",!0);c.send();d.radioDataXHR=c}function y(){var a=e.path;";"==a.substring(a.length-1)&&(a=a.substring(0,
a.length-1));d.radioXHR&&d.radioXHR.abort();var c=new XMLHttpRequest;c.onerror=function(a){};c.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){if(-1<this.responseText.indexOf('{"icestats":')){var a=JSON.parse(this.responseText);if(void 0===a.icestats.source.length)var b=a.icestats.source;else{var c,d=a.icestats.source.length;for(c=0;c<d;c++)if(0<=a.icestats.source[c].listenurl.indexOf(e.mountpoint)){b=a.icestats.source[c];break}}v=b;if(b.yp_currently_playing)var f=b.yp_currently_playing;
else a=b.artist,b=b.title,a&&b?f=a+"-"+b:b&&(f=b)}else-1<this.responseText.indexOf('class="streamdata"')?-1<this.responseText.indexOf("Mount Point /"+e.mountpoint)&&(b=this.responseText.substr(this.responseText.indexOf("Mount Point /"+e.mountpoint)),b=b.substr(b.indexOf("Current Song:")),b=b.substr(b.indexOf('<td class="streamdata">')+23),b=b.substr(0,b.indexOf("</td>")),HAPUtils.isEmpty(b)||(f=b)):-1<this.responseText.indexOf('class="streamstats"')&&-1<this.responseText.indexOf("Mount Point /"+e.mountpoint)&&
(b=this.responseText.substr(this.responseText.indexOf("Mount Point /"+e.mountpoint)),b=b.substr(b.indexOf("Currently playing:")),b=b.substr(b.indexOf('<td class="streamstats">')+24),b=b.substr(0,b.indexOf("</td>")),HAPUtils.isEmpty(b)||(f=b));f?(b=f.split("-"),a=h.trim(b[0]),b=h.trim(b[1]),k={artist:a,title:b,thumb:null},m?m!=f&&(l.getRadioArtwork?q(a,b):n||h(p).trigger("HAPRadioData.DATA_READY",k)):l.getRadioArtwork?q(a,b):n||h(p).trigger("HAPRadioData.DATA_READY",k),m=f):(k={artist:C,title:D,thumb:null},
n||h(p).trigger("HAPRadioData.DATA_READY",k))}else 404==this.status&&"Not Found"==this.statusText?(console.log(z[x]+" does not exist!"),x++,z[x]?t||(g&&clearInterval(g),y()):(k={artist:C,title:D,thumb:null},n||h(p).trigger("HAPRadioData.DATA_READY",k))):t||(g&&clearInterval(g),g=setInterval(function(){y()},w))};c.open("GET",u[f]+a+z[x],!0);c.send();d.radioXHR=c}function E(){d.radioDataXHR&&d.radioDataXHR.abort();var a=new XMLHttpRequest;a.onerror=function(a){};a.onreadystatechange=function(){if(4===
this.readyState)if(200===this.status){var c=JSON.parse(a.responseText),d=c.artist,b=c.title,f=d+" - "+b,e=c.thumb||null;v=c;k={artist:d,title:b,thumb:e};m?m!=f&&(l.getRadioArtwork&&null==e?q(d,b):n||h(p).trigger("HAPRadioData.DATA_READY",k)):l.getRadioArtwork&&null==e?q(d,b):n||h(p).trigger("HAPRadioData.DATA_READY",k);m=f}else t||(g&&clearInterval(g),g=setInterval(function(){E()},w))};a.open("GET",u[f]+("http://www.radiojar.com/api/stations/"+e.mountpoint+"/now_playing/"),!0);a.send();d.radioDataXHR=
a}function q(a,c){if(!n){a=F(a);c=G(c);var m=u[f]+"https://itunes.apple.com/search?type=jsonp&term=="+encodeURI(a)+"-"+encodeURI(c)+"&media=music&limit=1",b=new XMLHttpRequest;b.onerror=function(a){};b.onreadystatechange=function(){if(4===this.readyState)if(200===this.status){var b=JSON.parse(this.responseText);if(b.resultCount){var d=A.width();d=HAPUtils.closestNumber(l.artworkSize,d);b=b.results[0].artworkUrl100.replace("100x100",d+"x"+d)}else b=e.thumbDefault;k.thumb=b;n||h(p).trigger("HAPRadioData.DATA_READY",
k);g&&clearInterval(g);g=setInterval(function(){p.getData()},w);t=!0}else 403===this.status&&(f++,f>u.length-1&&(f=0),q(a,c))};b.open("GET",m,!0);b.send();d.artworkDataXHR=b}}function F(a){a=a.toLowerCase();a=h.trim(a);a.includes("&")?a=a.substr(0,a.indexOf(" &")):a.includes("feat")?a=a.substr(0,a.indexOf(" feat")):a.includes("ft.")&&(a=a.substr(0,a.indexOf(" ft.")));return a}function G(a){a=a.toLowerCase();a=h.trim(a);a.includes("&")?a=a.replace("&","and"):a.includes("(")?a=a.substr(0,a.indexOf(" (")):
a.includes("ft")&&(a=a.substr(0,a.indexOf(" ft")));return a}var p=this;HAPUtils.isMobile();var e,v,k,m,t,n,z=["/status-json.xsl","/status.xsl"],x=0,u=l.cors.split(",").map(function(a){return a.trim()}),f=0,g,w=l.lastPlayedInterval,C=l.defaultSongArtist,D=l.defaultSongTitle;0==A.length&&(l.getRadioArtwork=!1);this.getData=function(a){a&&(e=a);n=!1;"shoutcast"==e.type?B():"icecast"==e.type?y():"radiojar"==e.type?E():console.log("HAPRadioData unknown radio data!")};this.destroy=function(){n=!0;g&&clearInterval(g);
g=null;d.radioDataXHR&&(d.radioDataXHR.abort(),delete d.radioDataXHR);d.artworkDataXHR&&(d.artworkDataXHR.abort(),delete d.artworkDataXHR);f=0;t=!1;m=null};this.getRadioData=function(){return v}}})(window,jQuery);