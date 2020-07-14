import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_MILLISECONDS'] = '500'
  const ip = path.join(__dirname, '..', 'dist', 'index.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }
  // eslint-disable-next-line no-console
  console.log(cp.execSync(`node ${ip}`, options).toString())
})
