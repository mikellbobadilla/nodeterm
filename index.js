const parser = require('./controllers/commands.js')

function app() {
  console.dir(parser)
}

app()

// parser.add_argument('-v', '--version', { action: 'version', version })
// parser.add_argument('-s', '--size', {
//   help: 'set font size (default: 12)',
//   type: 'int',
// })

// parser.add_argument('-b', {
//   help: 'Add a second number',
//   type: 'int',
//   action: 'store',
// })

// // function num(n) {
// //   return n
// // }

// // process.stdin.write(parser.parse_args())
// const arg = parser.parse_args()

// function font({ s, size }) {
//   return `font ${s || size || 12}`
// }

// // console.dir(arg.a + arg.b)
// console.log(font(arg))

// console.dir(h)
