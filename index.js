// console.log("index.js");

// // var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// // or
// var client  = mqtt.connect('wss://test.mosquitto.org:8081/mqtt')

// // var client  = mqtt.connect({ host:'mqtt.eclipse.org/mqtt', port: 443})
// // or
// // var client  = mqtt.connect('wss://mqtt.eclipse.org:443/mqtt')

// client.on('connect', function () {
//     console.log('connected')
//   client.subscribe('james/messages', function (err) {
//     if (!err) {
//       client.publish('james/messages', 'Hello mqtt')
//     }
//   })
// })

// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString())
// //   client.end()
// })

// var pub_button = document.getElementById('pub-button');
// var pub_input = document.getElementById('pub-input');
// $("sub-buttonr").on('click',function(){
//   // console.log('clicked');
//   // console.log(pub_input.value);
//   client.publish('james/messages', pub_input.value);
// })

var address = $('#address').val();
var client = mqtt.connect(address)
var d = new Date();
var time = d.toUTCString();
$(document).ready(function () {
    $('#btn-connect').on('click', function () {
        $('#connection').val("Connecting...")
        client.on('connect', function () {
            console.log('connected')
            $('#connection').val("Connected")
        })

        // $("#dis-button").on('click', function () {
        //     client.end();
        //     setTimeout(function () {
        //         $("#connection").val("Disconnecting...")
        //         setTimeout(function () {
        //             $("#connection").val("press connect again")
        //         }, 1000)
        //     }, 1000)
        // })

        $('#pub-button').on('click', function () {
            var topic = $('#pub-topic').val();
            var payload = $('#pub-payload').val();
            var time = d.toUTCString();
            client.publish(topic, payload);
            $('#tbody').prepend('<tr><td>' + topic + '</td><td>' + payload + '</td><td>' + time + '</td></tr>')
        })
        $("#sub-button").on('click', function () {
            var sub_topic = $('#sub-topic').val();
            client.subscribe(sub_topic);
            $('#tbody1').prepend('<tr><td>' + sub_topic + '</td><td>' + time + '</td></tr>')


        })
          
            var topic = $('#pub-topic').val();
            var payload = $('#pub-payload').val();  
            var time = d.toUTCString();
            client.on('message', function (topic, payload) { 
            $('#tbody2').prepend('<tr><td>' + topic + '</td><td>' + payload + '</td><td>' + time + '</td></tr>')
        })



    })
})