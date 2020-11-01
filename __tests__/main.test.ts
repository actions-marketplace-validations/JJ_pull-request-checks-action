import {checks} from '../src/checks'
import * as fs from 'fs';

test('Parses markdown', async () => {
    fs.readFile('__tests__/example.markdown', "utf8", async (e, data) => {
        if (e) throw e
        var checked = await checks( data )
        await expect(checked).not.toBeNull()
    })
})

