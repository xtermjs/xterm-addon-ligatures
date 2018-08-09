import * as cp from 'child_process';
import * as path from 'path';
import { assert } from 'chai';

describe('typings', () => {
  it('compiles successfully', function (): void {
    this.timeout(10000);
    const result = cp.spawnSync('tsc', { cwd: path.resolve('./fixtures/typings-test')});
    assert.equal(result.status, 0, `build did not succeed:\nstdout: ${result.stdout.toString()}\nstderr: ${result.stderr.toString()}\n`);
  });
});
