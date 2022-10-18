import bodyParser from 'body-parser'
import express    from 'express'

import config     from '@bot/config'
import initBot    from '@bot/init-bot'
import { log }    from '@bot/debug'

const app = express()

const { port, bots: botConfigs } = config

const jiraConfig = botConfigs.find((conf) => conf.routeName === 'jira')

// to support JSON-encoded bodies
app.use(bodyParser.json())
// to support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }))

app.use(initBot(jiraConfig))

app.listen(port, () => {
  log(new Date(), `Express server is up. Port: ${port}`)
})
