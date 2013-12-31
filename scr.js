function selectText(element) {
    var doc = document
        , text = $('div.paste > pre')[0]
        , range, selection
    ;    
    if (doc.body.createTextRange) { //ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) { //all others
        selection = window.getSelection();        
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}
$(document).ready(function() {
     
        $(document).keydown(function (e){
            var s = '';
            if (e.ctrlKey){
				if(e.which==65){
					selectText();
					e.preventDefault();
				}
			}
        });
		chrome.runtime.sendMessage({injected: "true"});
});