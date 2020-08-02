import 'reflect-metadata'
import execa from 'execa'
import { join } from 'path'
import getPort from 'get-port'
import { configure } from 'japa'
import sourceMapSupport from 'source-map-support'

process.env.NODE_ENV = 'testing'
process.env.ADONIS_ACE_CWD = join(__dirname, '..')
process.env.DB_CONNECTION = 'sqlite'
process.env.DB_HOST = '0.0.0.0'
process.env.DB_USER = 'adonis'
process.env.DB_PASSWORD = 'adonis'
process.env.DB_NAME = 'test'
sourceMapSupport.install({ handleUncaughtExceptions: false })

async function runMigrations () {
  await execa.node('ace', ['migration:run'], {
    stdio: 'inherit',
  })
}

async function rollbackMigrations () {
  await execa.node('ace', ['migration:rollback'], {
    stdio: 'inherit',
  })
}

async function startHttpServer () {
  const { Ignitor } = await import('@adonisjs/core/build/src/Ignitor')
  process.env.PORT = String(await getPort())
  await new Ignitor(__dirname).httpServer().start()
}

/**
 * Configure test runner
 */
configure({
  files: [
    'build/test/**/*.spec.js',
  ],
  before: [
    runMigrations,
    startHttpServer,
  ],
  after: [
    rollbackMigrations,
  ],
})
