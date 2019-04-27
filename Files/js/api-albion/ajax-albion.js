/* get historical prices by item */
function getHistoricalPricesByItem(item) {
	var data;
	$.ajax({
		url: "https://www.albion-online-data.com/api/v1/stats/charts/" + item,
		data: data,
		async: false,
		success: function (json) {
			data = json;
		}

	});
	return data;
};


function getCurrentPriceByItem(item) {
	var data;
	$.ajax({
		url: "https://www.albion-online-data.com/api/v2/stats/view/" + item,
		data: data,
		async: false,
		success: function (json) {
			data = json;
		}
	});
	return data;
};