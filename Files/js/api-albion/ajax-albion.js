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

// https://www.albion-online-data.com/api/v2/stats/prices/T1_WOOD
function getCurrentPriceByItem(item, cities) {
	var data;
	$.ajax({
		url: "https://www.albion-online-data.com/api/v2/stats/prices/"+item+"?locations="+cities[0]+","+cities[1]+","+cities[2]+","+cities[3]+","+cities[4]+","+cities[5],
		data: data,
		async: false,
		success: function (json) {
			data = json;
		}
	});
	return data;
};