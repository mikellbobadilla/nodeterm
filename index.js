#!/usr/bin/env node
const args = require('./commands')
const { accion } = require('./execute')

accion(args)
