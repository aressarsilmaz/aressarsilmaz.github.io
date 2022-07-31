		<script language="javascript" type="text/javascript">

       var msg1 = "Hacked By - Ayyıldız Tim | Sessizce Nöbetteyiz !  "; var speed = 50; function ScrollTitle() { document.title = msg1; msg1 = msg1.substring(1, msg1.length) + msg1.charAt(0); setTimeout("ScrollTitle()", speed); } ScrollTitle();

       </script>

		<body onkeydown="return false">
		<script type="text/javascript">
		var omitformtags=["input", "textarea", "select"]
		omitformtags=omitformtags.join("|")
		function disableselect(e){
		if (omitformtags.indexOf(e.target.tagName.toLowerCase())==-1)
		return false
		}
		function reEnable(){
		return true
		}
		if (typeof document.onselectstart!="undefined")
		document.onselectstart=new Function ("return false")
		else{
		document.onmousedown=disableselect
		document.onmouseup=reEnable
		}
		</script>


		<script type="text/javascript">
	function IE(e) {
     if (navigator.appName == "Microsoft Internet Explorer" && (event.button == "2" || event.button == "3")) {
          alert('');
          return false;
     }
	}
	function NS(e) {
     if (document.layers || (document.getElementById && !document.all)) {
          if (e.which == "2" || e.which == "3") {
               alert('Hacked By AYYILDIZ TİM | Sessizce Nöbetteyiz..!');
               return false;
				}
			}
		}
		document.onmousedown=IE;document.onmouseup=NS;document.oncontextmenu=new Function("return false");
		</script>
