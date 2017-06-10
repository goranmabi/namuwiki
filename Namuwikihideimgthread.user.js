// ==UserScript==
// @name          Namuwiki hide img discuss thread
// @description	  Hide hidden discuss thread in namuwiki.
// @author        mabi
// @include       https://namu.wiki/topic/*
// @run-at        document-end
// @version       0.2
// ==/UserScript==
(function() {
$('img').each(function( index ) {
	$(this).parent().parent().remove();
});
})();