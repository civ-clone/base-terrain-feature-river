import { Land } from '@civ-clone/core-terrain/Types';
import River from '../River';
import RuleRegistry from '@civ-clone/core-rule/RuleRegistry';
import TerrainFeature from '@civ-clone/core-terrain-feature/TerrainFeature';
import Watercourse from '@civ-clone/base-terrain-feature/lib/Watercourse';
import { expect } from 'chai';
import isResource from '@civ-clone/base-terrain-feature/lib/isResource';

class Ground extends Land {}

describe('River', (): void => {
  it('should be a watercourse, not a resource', (): void => {
    const terrain = new Ground(new RuleRegistry()),
      river = new River(terrain);

    expect(river).to.be.instanceOf(Watercourse);
    expect(river).to.be.instanceOf(TerrainFeature);
    expect(river.terrain()).to.equal(terrain);
    expect(river.clone()).to.be.instanceOf(River);
    expect(isResource(river)).to.be.false;
  });
});
