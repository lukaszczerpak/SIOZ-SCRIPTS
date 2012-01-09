// ==UserScript==
// @name           SIOZ-RFC
// @version    0.2
// @namespace      http://sioz.softnet.pl/
// @include        https://sioz.softnet.com.pl/firma/notka_w.php*
// @require        http://code.jquery.com/jquery-1.6.4.min.js  
// @copyright  2011+, Łukasz Czerpak
// ==/UserScript==

(function(){
  //boilerplate greasemonkey to wait until jQuery is defined...
  function GM_wait()
  {
    if(typeof unsafeWindow.jQuery == 'undefined')
      window.setTimeout(GM_wait,100);
    else
      unsafeWindow.jQuery(function() { letsJQuery(unsafeWindow.jQuery); });
  }
  GM_wait();

  function letsJQuery($)
  {
	$('input[name=rfc]').click(function ()
							 {
								 var thisCheck = $(this);
								 if (thisCheck.is(':checked')) {
									 var v = "\
OPIS ZMIANY\n\
-----------\n\n\n\
PRZYCZYNA ZMIANY\n\
----------------\n\n\n\
SCENARIUSZ TESTU\n\
----------------\n\n\n\
SCENARIUSZ WYCOFANIA ZMIANY\n\
---------------------------\n\
Wycofanie wersji programu\n\
\n\
WPŁYW ZMIANY NA INNE ELEMENTY SYSTEMU\n\
-------------------------------------\n\
brak wpływu\n\
";
								 }
								 else {
									 var v = "";
								 }
								 $('textarea[name=notka]').attr('value', v);
							 });
  }
})();

