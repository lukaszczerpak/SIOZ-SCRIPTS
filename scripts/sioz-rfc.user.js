// ==UserScript==
// @name           SIOZ-RFC
// @version    0.1
// @namespace      http://sioz.softnet.pl/
// @include        https://sioz.softnet.com.pl/firma/notka_w.php*
// @require        http://code.jquery.com/jquery-1.6.4.min.js  
// @copyright  2011+, Łukasz Czerpak
// ==/UserScript==
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
