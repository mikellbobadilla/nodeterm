const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')

urls = [
  {
    id: 1,
    route: '',
    output: './assets/index.html',
  },
  {
    id: 2,
    route: 'about',
    output: './assets/about.html',
  },
  {
    id: 3,
    route: 'contact',
    output: './assets/contact.html',
  },
]

function webServer(req, res) {
  const pathURL = path.basename(req.url)
  const id = url.parse(req.url, true).query.id

  console.log(`Request: ${req.url} - ${pathURL} - ${id}`)

  urls.forEach((el) => {
    
  })
}
