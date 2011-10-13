// ==UserScript==
// @name       SIOZ-PRZEK-ZGLOSZ
// @namespace  https://sioz.softnet.com.pl/
// @version    0.1
// @description  udoskonalenie formularza przekazania zgłoszenia
// @include    https://sioz.softnet.com.pl/firma/main.php?mode=przek_zglosz*
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @copyright  2011+, Łukasz Czerpak
// ==/UserScript==

$('input[type=checkbox][name^="pracownik_"]').change(function() {
    $("input[name=r_przek]").filter("[value=1]").attr('checked', true);
});

$("select[name=grupa]").change(function() {
    $("input[name=r_przek]").filter("[value=2]").attr('checked', true);
});
