var JsonParser = require("vertx-js/json_parser");
var Buffer = require("vertx-js/buffer");
var parser = JsonParser.newParser();
var wsocket;
var serviceLocation = "ws://127.0.0.1:8090/chat/";
var $username;
var $message;
var $chatWindow;
var room = '';
function sendMessage() {
  var date = new Date();
  var msg= '{
              "sender": '+$username.val()+',
              "receiver": '+serviceLocation+',
              "date": [
                {
                  "year": '+date.getFullYear()+',
                  "month": '+date.getMonth()+',
                  "day": '+date.getDate()+',
                  "hours": '+date.getHours()+',
                  "minutes": '+date.getMinutes()+'
                }
              ],
              "text": '+$message.val()+'
            }';
  var msgJson=parser.handle(Buffer.buffer(msg));
  wsocket.send(msgJson);
  $message.val('').focus();
}
