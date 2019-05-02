//VARS FROM WEBPAGE solo si no existen
var Current_PricesLabels = Current_PricesLabels || [];
var Current_PricesMin = Current_PricesMin || [];

var Current_SeriesXy = Current_SeriesXy || [];

var URL_IMAGES = URL_IMAGES || "https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/";
var Current_InfoCities = Current_InfoCities || [];
Current_InfoCities.cities = [];

var cities = ["Caerleon", "Martlock", "Bridgewatch", "Lymhurst", "Fort Sterling", "Thetford"];

/* Add a basic data series with six labels and values */
var dataChart = {
  series: [[
    { x: 1, y: 100 },
    { x: 2, y: 50 },
    { x: 3, y: 25 },
    { x: 5, y: 12.5 },
    { x: 8, y: 6.25 }
  ], [{ x: 1, y: 2 }]]
};
var myChart = new Chartist.Line('#chart1', dataChart, {
  axisX: {
    type: Chartist.AutoScaleAxis,
    onlyInteger: true
  }
});

function main() {
  var item_name = $("#item-selector").val().replace(" ", "").toLowerCase().trim();

  if (item_name !== "") {
    //resetValues();
    getChartInfo(item_name);
    drawChart();
    rowsOnTable();
    drawImageItem(item_name);
    writeHorizontalFormat();
  } else {
    alert("Insert item name");
  }
  //change title
  $("#title").text($("#item-selector").val());
}

/* Set some base options (settings will override the default settings in Chartist.js *see default settings*). We are adding a basic label interpolation function for the xAxis labels. */
var options = {
  axisX: {
    labelInterpolationFnc: function (value) {
      return 'Calendar Week ' + value;
    }
  }
};

function writeHorizontalFormat() {
  $('.ct-label.ct-horizontal.ct-end').each(function () {
    var text = Math.floor($(this).text());
    var strDate = new Date(text).getDate();
    var d = new Date(text);
    var strDate = d.getDate() + "|" + (d.getMonth() + 1) + "|" + d.getFullYear() + " " +
      d.getHours() + ":" + d.getMinutes();
    $(this).text(strDate);
  });
}

/* Now we can specify multiple responsive settings that will override the base settings based on order and if the media queries match. In this example we are changing the visibility of dots and lines as well as use different label interpolations for space reasons. */
var responsiveOptions = [
  ['screen and (min-width: 300px) and (max-width: 600px)', {
    showPoint: false,
    axisX: {
      labelInterpolationFnc: function (value) {
        return 'Week ' + value;
      }
    }
  }],
  ['screen and (max-width: 600px)', {
    showLine: false,
    axisX: {
      labelInterpolationFnc: function (value) {
        return 'W' + value;
      }
    }
  }]
];


function getChartInfo(item) {
  //get Mastery points from summoner
  Current_InfoCities = [];
  Current_InfoCities.cities = [];
  var JSONitemPrices = getHistoricalPricesByItem(item);

  debugger;
  JSONitemPrices.forEach(function (valor, indice, array) {
    //recorre
    if (cities.includes(valor.location)) {
      var infoCity = new Object();
      infoCity.city = valor.location;
      Current_InfoCities.cities.push(valor.location);
      if (valor.data.timestamps.length > 10) {
        infoCity.pricesX = valor.data.timestamps.slice(1,10);
        infoCity.pricesY = valor.data.prices_min.slice(1,10);
        //infoCity.pricesX = valor.data.timestamps.slice(valor.data.timestamps.length - 10, valor.data.timestamps.length - 1);
        //infoCity.pricesY = valor.data.prices_min.slice(valor.data.timestamps.length - 10, valor.data.timestamps.length - 1);
      } else {
        infoCity.pricesX = valor.data.timestamps;
        infoCity.pricesY = valor.data.prices_min;
      }
      Current_InfoCities.push(infoCity);

    }
  });
  currentSeriesXy();
}

function currentSeriesXy() {
  Current_SeriesXy = []

  for (x = 0; x < cities.length; x++) {
    Current_SeriesXy.push(addSerieToData(Current_InfoCities[Current_InfoCities.cities.indexOf(cities[x])].pricesX, Current_InfoCities[Current_InfoCities.cities.indexOf(cities[x])].pricesY));
  }

}

/**
 * Agregar rows a la tabla de index.html
 */
function rowsOnTable() {
  //clear table
  $('#table-prices').DataTable().destroy();
  $('#tbody-rows').html("");
  var str = "";
  var posCityCaerleon = Current_InfoCities.cities.indexOf("Caerleon");
  //var maxLengthCaerleon = Current_InfoCities[posCityCaerleon].pricesX.length;
  for (x = 0; x < cities.length; x++) {
    str += "<tr>";
    str += "<td>" + cities[x] + "</td>";
    var posCity = Current_InfoCities.cities.indexOf(cities[x]);
    str += "<td>" + Current_InfoCities[posCity].pricesY[0] + "</td>";
    str += "<td>" + (Current_InfoCities[posCityCaerleon].pricesY[0] - Current_InfoCities[posCity].pricesY[0]) + "</td>";
    //var maxLength = Current_InfoCities[posCity].pricesX.length;
    //str += "<td>" + Current_InfoCities[posCity].pricesY[maxLength - 1] + "</td>";
    //str += "<td>" + (Current_InfoCities[posCityCaerleon].pricesY[maxLengthCaerleon - 1] - Current_InfoCities[posCity].pricesY[maxLength - 1]) + "</td>";
    str += "</tr>";
  }
  $('#tbody-rows').append(str);
  $('#table-prices').DataTable().draw();
}

function addSerieToData(arrayX, arrayY) {
  current_serie = [];
  for (i = arrayX.length - 1; i > 1; i--) {
    slot = {
      x: arrayX[i],
      y: arrayY[i]
    };
    current_serie.push(slot);
  }
  return current_serie;


}

function drawChart() {
  debugger;
  myChart.update({
    series: [Current_SeriesXy[0], Current_SeriesXy[1], Current_SeriesXy[2], Current_SeriesXy[3], Current_SeriesXy[4], Current_SeriesXy[5]]
  }, {
      axisX: {
        type: Chartist.AutoScaleAxis,
        onlyInteger: true
      }
    });

}

function getImagesHtmlWithLevelChamps(item_name) {
  item_name = item_name.toUpperCase();
  return "<img src='" + URL_IMAGES + item_name + "' style='height:50px; width:50px' data-src='" + URL_IMAGES + item_name + "' title=" + item_name + ">";
}

function drawImageItem(item_name) {
  jQuery("#icon-item").html(getImagesHtmlWithLevelChamps(item_name));
}