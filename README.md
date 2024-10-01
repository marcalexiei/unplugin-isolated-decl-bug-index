# unplugin-isolated-decl-bug-index

```shell
npm i
```

```shell
npm run build
```

Check content inside `dist` folder:

> [!WARNING]
> the `index.d.ts` of the entry points are located inside a `index` folder which break his resolution (All reference inside the file have `./{...}`).

> [!NOTE]
>
> - JS files are created in the right folders
> - I'm using `preserveModules` as output option

```text
dist/a
dist/a/index.js
dist/a/ComponentA
dist/a/ComponentA/ComponentA
dist/a/ComponentA/ComponentA/index.js
dist/a/ComponentA/ComponentA/index.d.ts
dist/a/index
dist/a/index/index.d.ts <---- should be dist/a/index.d.ts

dist/b
dist/b/ComponentB
dist/b/ComponentB/ComponentB
dist/b/ComponentB/ComponentB/index.js
dist/b/ComponentB/ComponentB/index.d.ts
dist/b/index.js
dist/b/index
dist/b/index/index.d.ts <---- should be dist/b/index.d.ts
```
