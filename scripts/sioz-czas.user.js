// ==UserScript==
// @name           SIOZ-CZAS
// @version    0.5
// @namespace      http://sioz.softnet.pl/
// @include        https://sioz.softnet.com.pl/firma/main.php*
// @include        https://sioz.softnet.com.pl/firma/notka_w.php*
// @require        http://code.jquery.com/jquery-1.6.4.min.js  
// @copyright  2011+, Łukasz Czerpak
// ==/UserScript==

function applyCzasMod(fieldName) {
    var czasField = $('input[name=' + fieldName + ']');
    
    czasField.attr('readonly', true);
    czasField.after('&nbsp;&nbsp;&nbsp;Godziny: <input type="text" name="' + fieldName + 'H" value="0" size="6">\
Minuty: <input type="text" name="' + fieldName + 'M" value="0" size="6">');
    
    czasField.closest('tr').next().replaceWith('');
    
    var czasHField = $('input[name=' + fieldName + 'H]');
    var czasMField = $('input[name=' + fieldName + 'M]');
    
    czasHField.change(function() {
        var value = parseInt(czasHField.val()) + parseInt(czasMField.val())/60;
        czasField.val(value.toFixed(2));
    });
    
    czasMField.change(function() {
        var value = parseInt(czasHField.val()) + parseInt(czasMField.val())/60;
        czasField.val(value.toFixed(2));
    });
}

$(document).ready(function() 
{
	if($('input[name=czas]').length > 0) {
		applyCzasMod('czas');
	}

	if($('input[name=czasp]').length > 0) {
		applyCzasMod('czasp');
	}

	if($('input[name=czas_b]').length > 0) {
		applyCzasMod('czas_b');
	}

	if($('input[name=czas_z]').length > 0) {
		applyCzasMod('czas_z');
	}
});


