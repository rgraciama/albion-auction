//Control time
var toCaerleon = false;
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date + ' ' + time;
var cities = ["Caerleon", "Martlock", "Bridgewatch", "Lymhurst", "Fort Sterling", "Thetford"];

//Items to search
var array_resources = ["T1_WOOD", "T2_WOOD", "T3_WOOD", "T4_WOOD", "T5_WOOD",
    "T1_ROCK", "T2_ROCK", "T3_ROCK", "T4_ROCK", "T5_ROCK",
    "T1_HIDE", "T2_HIDE", "T3_HIDE", "T4_HIDE", "T5_HIDE",
    "T2_CLOTH", "T3_CLOTH", "T4_CLOTH", "T5_CLOTH",
    "T2_FIBER", "T3_FIBER", "T4_FIBER", "T5_FIBER"
];

var array_mount = ['T6_MOUNTUPGRADE_GIANTSTAG_XMAS', 'UNIQUE_MOUNTUPGRADE_RAM_XMAS', 'T5_MOUNTUPGRADE_HORSE_CURSE', 'T8_MOUNTUPGRADE_HORSE_CURSE', 'T8_MOUNTUPGRADE_COUGAR_KEEPER', 'T5_MOUNTUPGRADE_HORSE_MORGANA', 'T8_MOUNTUPGRADE_HORSE_MORGANA', 'T8_MOUNTUPGRADE_COMMAND_MAMMOTH', 'T3_FISH_FRESHWATER_MOUNTAIN_RARE', 'T5_FISH_FRESHWATER_MOUNTAIN_RARE', 'T7_FISH_FRESHWATER_MOUNTAIN_RARE', 'QUESTITEM_CARAVAN_TRADEPACK_MOUNTAIN_LIGHT', 'QUESTITEM_CARAVAN_TRADEPACK_MOUNTAIN_MEDIUM', 'QUESTITEM_CARAVAN_TRADEPACK_MOUNTAIN_HEAVY', 'T2_MOUNT_MULE', 'T3_MOUNT_HORSE', 'T4_MOUNT_HORSE', 'T5_MOUNT_HORSE', 'T6_MOUNT_HORSE', 'T7_MOUNT_HORSE', 'T8_MOUNT_HORSE', 'T5_MOUNT_ARMORED_HORSE', 'T6_MOUNT_ARMORED_HORSE', 'T7_MOUNT_ARMORED_HORSE', 'T8_MOUNT_ARMORED_HORSE', 'T3_MOUNT_OX', 'T4_MOUNT_OX', 'T5_MOUNT_OX', 'T6_MOUNT_OX', 'T7_MOUNT_OX', 'T8_MOUNT_OX', 'T4_MOUNT_GIANTSTAG', 'T6_MOUNT_GIANTSTAG', 'T6_MOUNT_DIREWOLF', 'T6_MOUNT_DIREWOLF_WHITE', 'T7_MOUNT_DIREBOAR', 'T7_MOUNT_SWAMPDRAGON', 'T8_MOUNT_DIREBEAR', 'T8_MOUNT_MAMMOTH_TRANSPORT', 'T5_MOUNT_MOABIRD_FW_BRIDGEWATCH', 'T5_MOUNT_DIREBEAR_FW_FORTSTERLING', 'T5_MOUNT_DIREBOAR_FW_LYMHURST', 'T5_MOUNT_RAM_FW_MARTLOCK', 'T5_MOUNT_SWAMPDRAGON_FW_THETFORD', 'T8_MOUNT_MAMMOTH_BATTLE@1', 'T7_MOUNT_SWAMPDRAGON_BATTLE', 'T7_MOUNT_ARMORED_SWAMPDRAGON_BATTLE', 'T6_MOUNT_SIEGE_BALLISTA', 'T5_MOUNT_HORSE_UNDEAD@1', 'T8_MOUNT_HORSE_UNDEAD@1', 'T5_MOUNT_COUGAR_KEEPER@1', 'T8_MOUNT_COUGAR_KEEPER@1', 'T5_MOUNT_ARMORED_HORSE_MORGANA@1', 'T8_MOUNT_ARMORED_HORSE_MORGANA@1', 'T5_MOUNT_HORSE_ARENA@1', 'T5_MOUNT_COUGAR_ARENA@1', 'T5_MOUNT_HORSE_UNDEAD_HALLOWEEN@1', 'T5_MOUNT_COUGAR_TOURNAMENT@1', 'UNIQUE_MOUNT_DONKEY_HALLOWEEN', 'UNIQUE_MOUNT_RAM_XMAS', 'T6_MOUNT_GIANTSTAG_XMAS@1', 'UNIQUE_MOUNT_TELLAFRIEND', 'UNIQUE_MOUNT_DONKEY_UNIQUE_TELLAFRIEND', 'UNIQUE_MOUNT_RAM_TELLAFRIEND', 'UNIQUE_MOUNT_PIG_TELLAFRIEND', 'UNIQUE_MOUNT_PONY_TELLAFRIEND', 'UNIQUE_MOUNT_YAK_TELLAFRIEND', 'UNIQUE_MOUNT_IMPALA_TELLAFRIEND', 'UNIQUE_MOUNT_MOABIRD_TELLAFRIEND', 'UNIQUE_MOUNT_BAT_TELLAFRIEND', 'UNIQUE_MOUNT_GIANTTOAD_TELLAFRIEND', 'UNIQUE_MOUNT_BLOODHOUND_TELLAFRIEND', 'UNIQUE_MOUNT_TIGER_TELLAFRIEND', 'UNIQUE_MOUNT_TRANSPORT_RAM_TELLAFRIEND', 'UNIQUE_MOUNT_PANDA_TELLAFRIEND', 'UNIQUE_MOUNT_BERNARD_TELLAFRIEND', 'UNIQUE_MOUNT_GIANTSTAG_TELLAFRIEND', 'UNIQUE_MOUNT_DIREFOX_TELLAFRIEND', 'UNIQUE_MOUNT_HUSKYSLEIGH_TELLAFRIEND', 'UNIQUE_MOUNT_DIREWOLF_GREY_TELLAFRIEND', 'UNIQUE_MOUNT_TIGER_WHITE_TELLAFRIEND', 'UNIQUE_MOUNT_HOUSEPIG', 'T5_MOUNT_ARMORED_HORSE_SKIN_01', 'T6_MOUNT_ARMORED_HORSE_SKIN_01', 'T7_MOUNT_ARMORED_HORSE_SKIN_01', 'T8_MOUNT_ARMORED_HORSE_SKIN_01', 'T6_MOUNT_DIREWOLF_SPECTER', 'UNIQUE_MOUNT_BAT_PERSONAL', 'T7_MOUNT_MONITORLIZARD_ADC', 'T7_MOUNT_HUSKY_ADC', 'T6_MOUNT_FROSTRAM_ADC', 'T7_MOUNT_TERRORBIRD_ADC', 'UNIQUE_MOUNT_BEAR_KEEPER_ADC', 'UNIQUE_MOUNT_BLACK_PANTHER_ADC', 'T6_MOUNT_CHAMELEON_ADC', 'UNIQUE_MOUNT_RHINO_SEASON_CRYSTAL', 'UNIQUE_MOUNT_RHINO_SEASON_GOLD', 'UNIQUE_MOUNT_RHINO_SEASON_SILVER', 'UNIQUE_MOUNT_RHINO_SEASON_BRONZE', 'UNIQUE_MOUNT_TOWER_CHARIOT_CRYSTAL', 'UNIQUE_MOUNT_TOWER_CHARIOT_GOLD', 'UNIQUE_MOUNT_TOWER_CHARIOT_SILVER', 'UNIQUE_MOUNT_RHINO_TELLAFRIEND', 'UNIQUE_MOUNT_HORSE_FOUNDER_LEGENDARY', 'UNIQUE_MOUNT_OX_FOUNDER_LEGENDARY', 'UNIQUE_MOUNT_HORSE_STARTERPACK', 'UNIQUE_MOUNT_CART_STARTERPACK', 'UNIQUE_MOUNT_GIANTSTAG_FOUNDER_EPIC', 'UNIQUE_FURNITUREITEM_ADC_STATUE_MOUNTED_DIREWOLF_A', 'UNIQUE_FURNITUREITEM_ADC_STATUE_MOUNTED_DIREWOLF_B', 'T1_FACTION_MOUNTAIN_TOKEN_1'];

var array_farm = ['T1_FARM_CARROT_SEED', 'T2_FARM_BEAN_SEED', 'T3_FARM_WHEAT_SEED', 'T4_FARM_TURNIP_SEED', 'T5_FARM_CABBAGE_SEED', 'T6_FARM_POTATO_SEED', 'T7_FARM_CORN_SEED',
    'T2_FARM_AGARIC_SEED', 'T3_FARM_COMFREY_SEED', 'T4_FARM_BURDOCK_SEED', 'T5_FARM_TEASEL_SEED', 'T6_FARM_FOXGLOVE_SEED', 'T7_FARM_MULLEIN_SEED',
    'T3_FARM_OX_BABY', 'T4_FARM_OX_BABY', 'T5_FARM_OX_BABY', 'T6_FARM_OX_BABY',
    'T3_FARM_HORSE_GROWN', 'T4_FARM_HORSE_GROWN', 'T5_FARM_HORSE_GROWN', 'T6_FARM_HORSE_GROWN',
    'T6_FARM_DIREWOLF_BABY',
    'T5_FARM_COUGAR_BABY',
    'T4_FARM_GIANTSTAG_BABY', 'T6_FARM_GIANTSTAG_BABY', 'T5_FARM_MOABIRD_FW_BRIDGEWATCH_BABY',
    'T5_FARM_DIREBEAR_FW_FORTSTERLING_BABY', 'T5_FARM_DIREBOAR_FW_LYMHURST_BABY', 'T5_FARM_RAM_FW_MARTLOCK_BABY', 'T5_FARM_SWAMPDRAGON_FW_THETFORD_BABY', 'T6_FARM_DIREWOLF_GROWN',
    'T5_FARM_COUGAR_GROWN', 'T4_FARM_GIANTSTAG_GROWN', 'T6_FARM_GIANTSTAG_GROWN', 'T5_FARM_MOABIRD_FW_BRIDGEWATCH_GROWN', 'T5_FARM_DIREBEAR_FW_FORTSTERLING_GROWN',
    'T5_FARM_DIREBOAR_FW_LYMHURST_GROWN', 'T5_FARM_RAM_FW_MARTLOCK_GROWN', 'T5_FARM_SWAMPDRAGON_FW_THETFORD_GROWN',
    'T3_FARM_CHICKEN_BABY', 'T4_FARM_GOAT_BABY', 'T5_FARM_GOOSE_BABY', 'T6_FARM_SHEEP_BABY', 'T7_FARM_PIG_BABY', 'T8_FARM_COW_BABY', 'T3_FARM_CHICKEN_GROWN',
    'T4_FARM_GOAT_GROWN', 'T5_FARM_GOOSE_GROWN', 'T6_FARM_SHEEP_GROWN', 'T7_FARM_PIG_GROWN', 'T8_FARM_COW_GROWN'
];
var city2 = "City";
var city1 = "Caerleon";

function main() {
    searchBestOption();
    writeLabels();
    $('#table-prices').DataTable();

}

function swapCities() {
    swap = city1;
    city1 = city2;
    city2 = swap;
    toCaerleon = !toCaerleon;
    $('#table-prices').DataTable().destroy();
    clearTableRows();
    searchBestOption();
    writeLabels();
    $('#table-prices').DataTable().draw();
}

function clearTableRows() {
    $('#tbody_rows').html("");
}

function searchBestOption() {

    for (var x = 0; x < array_resources.length; x++) {
        //call api
        var data = getCurrentPriceByItem(array_resources[x], cities);
        //generate row in table
        generateRowInTable(data);
    }
    /*
        for (x = 0; x < array_mount.length; x++) {
            var data = getCurrentPriceByItem(array_mount[x], cities);
            generateRowInTable(data);
        }
        */
}

function writeLabels() {
    if (toCaerleon) {
         $('#title').html("From * to Caerleon");
    } else {
        $('#title').html("From Caerleon to *");
    }
   
    $('#h-buy1').html("Buy " + city1);
    $('#h-buy2').html("Buy "+ city2);
    $('#h-sell1').html("Sell " + city1);
    $('#h-sell2').html("Sell " + city2);
    $('#h-per').html("% prof " + city1);
}

function generateRowInTable(data) {
    if (data != null && data.length > 1) {
        var cityOrder = [];
        for (var x = 0; x < data.length; x++) {
            cityOrder.push(data[x].city);
        }
        caerleon_posCity = cityOrder.indexOf("Caerleon");
        caerleon_time = new Date(data[caerleon_posCity].sell_price_min_date.replace("T", " "));
        caerleon_buyMax = data[caerleon_posCity].buy_price_max;
        caerleon_sellMin = data[caerleon_posCity].sell_price_min;
        for (var x = 0; x < data.length; x++) {
            if (caerleon_posCity != x) {


                city_time = new Date(data[x].sell_price_min_date.replace("T", " "));
                diffTime = Math.abs(caerleon_time - city_time) / 1000 / 60 / 60;
                diffTimeRound = Math.round(diffTime * 100) / 100;
                diffCurrTime = Math.abs((new Date(dateTime) - 7200000) - caerleon_time) / 1000 / 60 / 60;
                diffCurrTimeRound = Math.round(diffCurrTime * 100) / 100;
                city_buyMax = data[x].buy_price_max;
                city_sellMin = data[x].sell_price_min;

                if (toCaerleon) {
                    buy_max_1 = caerleon_buyMax;
                    buy_max_2 = city_buyMax;
                    sell_min_1 = caerleon_sellMin;
                    sell_min_2 = city_sellMin;
                } else {
                    buy_max_1 = city_buyMax;
                    buy_max_2 = caerleon_buyMax;
                    sell_min_1 = city_sellMin;
                    sell_min_2 = caerleon_sellMin;
                }

                min_profit = (sell_min_1 === 0 || buy_max_2 === 0) ? 0 : buy_max_2 - sell_min_1;
                minPercent = min_profit === 0 ? 0 : min_profit / sell_min_1;
                minPercentRound = Math.round(minPercent * 100) / 100;


                profit = sell_min_2 - sell_min_1;
                percent = profit / sell_min_1;
                percentRound = Math.round(percent * 100) / 100;

                styleRow = (min_profit > 0) ? "style='background:springgreen;'" : "";
                styleRow = (min_profit > 0 && diffCurrTime > 10) ? "style='background:yellow;'" : styleRow;

                strRow = "<tr " + styleRow + ">";
                strRow += "<td>" + data[x].item_id + "</td>"
                strRow += "<td>" + data[x].item_id + "</td>"
                strRow += "<td>" + min_profit + "</td>"
                strRow += "<td>" + minPercentRound + "</td>"
                strRow += "<td>" + profit + "</td>"
                strRow += "<td>" + percentRound + "</td>"
                strRow += "<td>" + buy_max_1 + "</td>"
                strRow += "<td>" + buy_max_2 + "</td>"
                strRow += "<td>" + sell_min_1 + "</td>"
                strRow += "<td>" + sell_min_2 + "</td>"
                strRow += "<td>" + diffTimeRound + "</td>"
                strRow += "<td>" + diffCurrTimeRound + "</td>"
                strRow += "</tr>";
                $('#tbody_rows').append(strRow);
                /*
                                min_profit = (caerleon_sellMin===0||city_buyMax===0)?0:city_buyMax-caerleon_sellMin;
                                minPercent = min_profit===0?0:min_profit/caerleon_sellMin;
                                minPercentRound = Math.round(minPercent * 100) / 100;
                
                                profit = caerleon_sellMin - city_sellMin;
                                percent = profit / caerleon_sellMin;
                                percentRound = Math.round(percent * 100) / 100;
                
                                styleRow = (min_profit>0)?"style='background:springgreen;'":"";
                                styleRow = (min_profit>0&&diffCurrTime>10)?"style='background:yellow;'":styleRow;
                
                                strRow = "<tr "+styleRow+">";
                                strRow += "<td>" + data[x].item_id + "</td>"
                                strRow += "<td>" + data[x].city + "</td>"
                                strRow += "<td>" + min_profit + "</td>"
                                strRow += "<td>" + minPercentRound + "</td>"
                                strRow += "<td>" + profit + "</td>"
                                strRow += "<td>" + percentRound + "</td>"
                                strRow += "<td>" + caerleon_buyMax + "</td>"
                                strRow += "<td>" + city_buyMax + "</td>"
                                strRow += "<td>" + caerleon_sellMin + "</td>"
                                strRow += "<td>" + city_sellMin + "</td>"
                                strRow += "<td>" + diffTimeRound + "</td>"
                                strRow += "<td>" + diffCurrTimeRound +"</td>"
                                strRow += "</tr>";
                                $('#tbody_rows').append(strRow);*/
            }
        }

        //        time1 = new Date(data[0].sell_price_min_date.replace("T", " "));
        //      time2 = new Date(data[1].sell_price_min_date.replace("T", " "));
        //    diffTime = Math.abs(time1-time2)/1000/60/60;
        //  diffTimeRound = Math.round(diffTime * 100) / 100;

        //diffCurrTime = Math.abs((new Date(dateTime)-7200000)-time1)/1000/60/60;
        //diffCurrTimeRound = Math.round(diffCurrTime * 100) / 100;
        /*
                if (data[0].city === city1) {
                    
                    buy_max_1 = data[0].buy_price_max;
                    buy_max_2 = data[1].buy_price_max;
                    sell_min_1 = data[0].sell_price_min;
                    sell_min_2 = data[1].sell_price_min;
                    
                } else {
                    buy_max_1 = data[1].buy_price_max;
                    buy_max_2 = data[0].buy_price_max;
                    sell_min_1 = data[1].sell_price_min;
                    sell_min_2 = data[0].sell_price_min;
                }
                
                min_profit = (sell_min_1===0||buy_max_2===0)?0:buy_max_2-sell_min_1;
                minPercent = min_profit===0?0:min_profit/sell_min_1;
                minPercentRound = Math.round(minPercent * 100) / 100;
                
        
                profit = sell_min_2 - sell_min_1;
                percent = profit / sell_min_1;
                percentRound = Math.round(percent * 100) / 100;
        
                styleRow = (min_profit>0)?"style='background:springgreen;'":"";
                styleRow = (min_profit>0&&diffCurrTime>10)?"style='background:yellow;'":styleRow;
        
                strRow = "<tr "+styleRow+">";
                strRow += "<td>" + data[0].item_id + "</td>"
                strRow += "<td>" + min_profit + "</td>"
                strRow += "<td>" + minPercentRound + "</td>"
                strRow += "<td>" + profit + "</td>"
                strRow += "<td>" + percentRound + "</td>"
                strRow += "<td>" + buy_max_1 + "</td>"
                strRow += "<td>" + buy_max_2 + "</td>"
                strRow += "<td>" + sell_min_1 + "</td>"
                strRow += "<td>" + sell_min_2 + "</td>"
                strRow += "<td>" + diffTimeRound + "</td>"
                strRow += "<td>" + diffCurrTimeRound +"</td>"
                strRow += "</tr>";
                $('#tbody_rows').append(strRow);
                */
    }
}

//UTILS TO EXTRACT INFO
/*
var farm = $('.text')
var str="";
for (x=0;x<farm.length;x++) {
  str+="'"+farm.get(x).textContent+"',";
}
*/


//data[0].sell_price_min_date