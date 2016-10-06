var axios = require('axios')

var data = {
title:"myTitle",
content:"myContent"
}
axios.post('http://localhost:3000/posts',data)
