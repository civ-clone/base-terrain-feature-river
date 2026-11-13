# base-terrain-feature-river

The `River` terrain feature: a river running across a square, whatever its terrain.

`River` extends `Watercourse` from `@civ-clone/base-terrain-feature`, so it sits alongside a square's resource
rather than standing in for one, and `isResource` says no to it.

For example: Civ2's rivers, which run over most land terrains and keep a square's special.

This is not `@civ-clone/base-terrain-river`, Civ1's River *terrain*. The two share a class name, so a game registers one
or the other, never both: a save records a class by name, and `core-save-game` refuses a name two registered classes
claim.

This package only declares the class: it has no `main` and registers nothing, so installing it changes no game.
A game's rules register it and give it its yields.

```ts
import River from '@civ-clone/base-terrain-feature-river/River';
import { instance as availableTerrainFeatureRegistryInstance } from '@civ-clone/core-terrain-feature/AvailableTerrainFeatureRegistry';

availableTerrainFeatureRegistryInstance.register(River);
```

Part of the Civ2 work (civ-clone/web-renderer#1008).
