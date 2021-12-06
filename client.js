$(document).ready(function () {
    function getUsers() {
        $.get('/getusers', function (string_data) {
            
            createTable('#table',string_data);
        })
    }
    getUsers();
})

function createTable(selector,jsondata){
    var data = JSON.parse(jsondata);
            var columns = [];
            var header = $('<tr/>');

            for (var i = 0; i < data.length; i++) {
                var row = data[i];

                for (var k in row) {
                    if ($.inArray(k, columns) == -1) {
                        columns.push(k);

                        // Creating the header
                        header.append($('<th/>').html(k));
                    }
                }
            }

            // Appending the header to the table
            $(selector).append(header);

            for (var i = 0; i < data.length; i++) {
                var row = $('<tr/>');
                for (var colIndex = 0; colIndex < columns.length; colIndex++) {
                    var val = data[i][columns[colIndex]];

                    // If there is any key, which is matching
                    // with the column name
                    if (val == null) val = "";
                    row.append($('<td/>').html(val));
                }

                // Adding each row to the table
                $(selector).append(row);
            }
}
