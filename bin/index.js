#!/usr/bin/env node
const args = require('./arguments')
const { apply } = require('../controller/apply')

apply(args)
