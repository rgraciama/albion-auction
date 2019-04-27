const ITEM_FILE = "https://raw.githubusercontent.com/broderickhyman/ao-bin-dumps/master/formatted/items.txt"

var array_item = array_item || [];

jQuery.get(ITEM_FILE, function (data) {
    //alert(data);
    //process text file line by line
    //$('#div').html(data.replace('n',''));
    array_item = data.split(":");
});

function getItemSelectorList() {
    array_item.forEach(function (element) {
        slot = element.split(/\n/g);
        if (slot.length === 2) {
            slot = slot[0];
        }
        $('#item-selector').append("<option data-tokens='" + slot + "'>" + slot + "</option>");
    });

}