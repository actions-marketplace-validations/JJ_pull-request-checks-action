import * as core from '@actions/core'
import * as github from '@actions/github'
import {checks} from './checks'

async function run(): Promise<void> {
  const context = github.context
  try {
    if (!context.payload.pull_request) {
      core.setFailed('Only available for pull requests')
    }
    const body: string | undefined = context.payload.pull_request?.body
    core.debug(`Got ${body}`)
    const checked: {[id: string]: boolean} = await checks(body)
    core.exportVariable('checked', checked)
    core.setOutput('checked', checked)
  } catch (error: Error | unknown) {
    if (error instanceof Error) {
      core.setFailed(error?.message)
    } else {
      core.setFailed(String(error))
    }
  }
}

run()
