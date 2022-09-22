import { expect } from 'chai';
import { takeSnapshot, SnapshotRestorer } from '@nomicfoundation/hardhat-network-helpers';

describe('Main', () => {
  let snapshot: SnapshotRestorer;

  before(async () => {
    snapshot = await takeSnapshot();
  });

  beforeEach(async () => {
    await snapshot.restore();
  });

  it('test', async () => {
    expect(true);
  });
});
