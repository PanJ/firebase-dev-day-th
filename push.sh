sleep 1
echo '"\$1"'
curl -X POST -H "Content-Type: application/json" -H "Authorization: key=<key>" -H "Cache-Control: no-cache" -H "Postman-Token: 64044c46-a43a-376e-a0dc-6c584c5faf06" -d "{ \"notification\": {
    \"title\": \"Firebase Dev Day\",
    \"body\": \"It's Today!\",
    \"click_action\" : \"https://securetheweb.in.th\",
    \"icon\": \"/firebase.png\"
  },

  \"to\" : \"$1\"

}" "https://fcm.googleapis.com/fcm/send"
