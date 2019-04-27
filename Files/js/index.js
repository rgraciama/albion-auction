//VARS FROM WEBPAGE solo si no existen
var Current_PricesLabels_1 = Current_PricesLabels_1 || [];
var Current_PricesMin_1 = Current_PricesMin_1 || [];
var Current_PricesMax_1 = Current_PricesMax_1 || [];

var Current_PricesLabels_2 = Current_PricesLabels_2 || [];
var Current_PricesMin_2 = Current_PricesMin_2 || [];
var Current_PricesMax_2 = Current_PricesMax_2 || [];

var URL_IMAGES = URL_IMAGES || "https://albiononline2d.ams3.cdn.digitaloceanspaces.com/thumbnails/orig/";

/* Add a basic data series with six labels and values */
var dataChart = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
};
var myChart = new Chartist.Line('#chart1', dataChart, {
  fullWidth: true,
  chartPadding: {
    right: 40
  },
  axisY: {
    onlyInteger: true,
    offset: 20
  }
});

function main() {
  var item_name = $("#item-selector").val().replace(" ", "").toLowerCase().trim();

  if (item_name !== "") {
    resetValues();
    getChartInfo(item_name);
    drawChart();
    drawImageItem(item_name);
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

  var JSONitemPrices = getHistoricalPricesByItem(item);

  JSONitemPrices.forEach(function (valor, indice, array) {
    console.log("En el índice " + indice + " hay este valor: " + valor);
    if (valor.location === "Caerleon") {
      if (valor.data.timestamps.length > 20) {
        Current_PricesLabels_1 = (valor.data.timestamps).slice(1, 20);
        Current_PricesMin_1 = valor.data.prices_min.slice(1, 20);
        Current_PricesMax_1 = valor.data.prices_max.slice(1, 20);
      } else {
        Current_PricesLabels_1 = valor.data.timestamps;
        Current_PricesMin_1 = valor.data.prices_min;
        Current_PricesMax_1 = valor.data.prices_max;
      }
      $('#city1').html(valor.location);
      $('#priceMin1').html(Current_PricesMin_1[0]);
      $('#priceMax1').html(Current_PricesMax_1[0]);
    }

    if (valor.location === "Martlock") {
      if (valor.data.timestamps.length > 20) {
        Current_PricesLabels_2 = (valor.data.timestamps).slice(1, 20);
        Current_PricesMin_2 = valor.data.prices_min.slice(1, 20);
        Current_PricesMax_2 = valor.data.prices_max.slice(1, 20);
      } else {
        Current_PricesLabels_2 = valor.data.timestamps;
        Current_PricesMin_2 = valor.data.prices_min;
        Current_PricesMax_2 = valor.data.prices_max;
      }
      $('#city2').html(valor.location);
      $('#priceMin2').html(Current_PricesMin_2[0]);
      $('#priceMax2').html(Current_PricesMax_2[0]);
    }

    $('#table-prices').DataTable().destroy();
    $('#table-prices').DataTable().draw();
    //$('#table-prices').ajax.reload();
    //$('#table-prices').reload();
  });


  
}

function drawChart() {
  myChart.update({
    // A labels array that can contain any sort of values
    labels: Current_PricesLabels,
    // Our series array that contains series objects or in this case series data arrays
    series: [{
      name: 'priceMin',
      data: Current_PricesMin_1,
    },
    {
      name: 'PriceMax',
      data: Current_PricesMax_1
    },
    {
      name: 'priceMin',
      data: Current_PricesMin_2,
    },
    {
      name: 'PriceMax',
      data: Current_PricesMax_2
    }
    ]
  });

}

function resetValues() {

  Current_PricesLabels = [];
  Current_PricesLabels_2 = [];
  Current_PricesMin_1 = [];
  Current_PricesMin_2 = [];
  Current_PricesMax_1 = [];
  Current_PricesMax_2 = [];
  drawChart();
}

function getImagesHtmlWithLevelChamps(item_name) {
  item_name = item_name.toUpperCase();
  return "<img src='" + URL_IMAGES + item_name + "' style='height:50px; width:50px' data-src='" + URL_IMAGES + item_name + "' title=" + item_name + ">";
}

function drawImageItem(item_name) {
  jQuery("#icon-item").html(getImagesHtmlWithLevelChamps(item_name));
}