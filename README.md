# unplugin-isolated-decl-using-ts-plugin

```shell
npm i
```

```shell
npm run build
```

Check content inside `dist` folder:

Using `@rollup/plugin-typescript` the declaration files are located
in the original position relative to the source folder (src)

```text
dist
dist/a
dist/a/index.js
dist/a/Models
dist/a/Models/model.d.ts
dist/a/ComponentA
dist/a/ComponentA/ComponentA
dist/a/ComponentA/ComponentA/index.js
dist/a/ComponentA/ComponentA.d.ts <---
dist/a/index.d.ts

dist/b
dist/b/ComponentB
dist/b/ComponentB/ComponentB
dist/b/ComponentB/ComponentB/index.js
dist/b/ComponentB/ComponentB.d.ts <---
dist/b/index.js
dist/b/index.d.ts
```

[Github issue](https://github.com/unplugin/unplugin-isolated-decl/issues/23)
