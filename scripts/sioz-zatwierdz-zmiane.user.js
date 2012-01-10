// ==UserScript==
// @name       SIOZ-ZATWIERDZ-ZMIANE
// @namespace  https://sioz.softnet.com.pl/
// @version    0.1
// @description  udoskonalenie formularza zatwierdzenia zmiany
// @include    https://sioz.softnet.com.pl/firma/main.php?mode=zatwierdz_zmiane*
// @require    http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js
// @require    https://raw.github.com/lukaszczerpak/SIOZ-SCRIPTS/master/js/jquery-ui-1.8.13.custom.min.js
// @require    https://raw.github.com/lukaszczerpak/SIOZ-SCRIPTS/master/js/ui.dropdownchecklist-1.4-min.js
// @resource   ddclCSS  https://raw.github.com/lukaszczerpak/SIOZ-SCRIPTS/master/css/ui.dropdownchecklist.themeroller.css
// @copyright  2012+, Lukasz Czerpak
// ==/UserScript==

// Load UI Styles
(function() {
    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = GM_getResourceText ('ddclCSS');
    head.appendChild(style);
})();

$(document).ready(function() 
{
    var fieldName = 'cmdb';
    var cmdbField = $('input[name=' + fieldName + ']');
    
    cmdbField.attr('readonly', true);
    cmdbField.after('<br/><select id="cmdb-select" multiple="multiple">\
<option value="P11/321">P11/321 - jakis element konfiguracji 1</option>\
<option value="P11/322">P11/322 - jakis element konfiguracji 2</option>\
<option value="P11/323">P11/323 - jakis element konfiguracji 3</option>\
</select>');
    $('#cmdb-select').dropdownchecklist({ icon: {}, textFormatFunction: function(options) {
        var selectedOptions = options.filter(":selected");
        arr = selectedOptions.map(function() { return $(this).val(); }).get();
        cmdbField.val(arr.join(", "));
        return "Wybierz...";
    } });	
});

