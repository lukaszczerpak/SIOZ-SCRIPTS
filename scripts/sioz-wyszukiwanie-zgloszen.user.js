// ==UserScript==
// @name       SIOZ-WYSZUKIWANIE-ZGLOSZEN
// @namespace  https://sioz.softnet.com.pl/
// @version    0.5
// @description  udoskonalenie formularza wyszukiwania
// @include    https://sioz.softnet.com.pl/firma/main.php?mode=archiwum*
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @copyright  2011+, Łukasz Czerpak
// ==/UserScript==

function applyOnChange($, valueFieldname, includeFieldname)
{
    $("input[name=" + valueFieldname + "]").focus(function() {
        var value = $("input[name=" + valueFieldname + "]").val();
        $("input[name=" + includeFieldname + "]").attr('checked', true);
    });
    $("input[name=" + valueFieldname + "]").blur(function() {
        var value = $("input[name=" + valueFieldname + "]").val();
        $("input[name=" + includeFieldname + "]").attr('checked', value.length != 0);
    });
}

function applyOnSelect($, valueFieldname, includeFieldname)
{
    $("select[name=" + valueFieldname + "]").change(function() {
        $("input[name=" + includeFieldname + "]").attr('checked', true);
    });
}

function applyOnChange2($, valueFieldname, includeFieldname, includeValue)
{
    $("input[name=" + valueFieldname + "]").focus(function() {
        $("input[name=" + includeFieldname + "]").filter("[value=" + includeValue + "]").attr('checked', true);
    });
}

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
	applyOnSelect($, 'od_nazwa', 'methoda');
	applyOnChange($, 'sl_klucz', 'slowo');
	applyOnChange($, 'nr_wersji', 'wersja');
	applyOnSelect($, 'rodzaj_val', 'rodzaj');
	applyOnSelect($, 'kategoria', 'kateg');
	applyOnSelect($, 'naz_system', 'system');
	applyOnSelect($, 'id_osoby', 'kier');
	applyOnChange($, 'od', 'zakres');
	applyOnChange($, 'do', 'zakres');
	applyOnChange2($, 'nr_zglosz', 'method', 2);
  }
})();
