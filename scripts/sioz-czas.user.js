// ==UserScript==
// @name           SIOZ-CZAS
// @version    0.1
// @namespace      http://sioz.softnet.pl/
// @include        https://sioz.softnet.com.pl/firma/main.php?mode=przek_zlec*
// @require        http://code.jquery.com/jquery-1.6.4.min.js  
// @copyright  2011+, Łukasz Czerpak
// ==/UserScript==

var czasField = $('input[name=czas]');

czasField.attr('disabled', true);
czasField.after('&nbsp;&nbsp;&nbsp;Godziny: <input type="text" name="czasH" value="0" size="6">\
Minuty: <input type="text" name="czasM" value="0" size="6">');

czasField.closest('tr').next().replaceWith('');

var czasHField = $('input[name=czasH]');
var czasMField = $('input[name=czasM]');

czasHField.change(function() {
    var value = parseInt(czasHField.val()) + parseInt(czasMField.val())/60;
    czasField.val(value.toFixed(2));
});

czasMField.change(function() {
    var value = parseInt(czasHField.val()) + parseInt(czasMField.val())/60;
    czasField.val(value.toFixed(2));
});
