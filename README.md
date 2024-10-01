# unplugin-isolated-decl-nested-wrong-path

```shell
npm i
```

```shell
npm run build
```

Check content inside `dist` folder:

> [!WARNING]
> `dist/a/ComponentA/ComponentA/index.d.ts` file imports `MyModel` from `dist/a/Models/model/index.d.ts` with the wrong reference path:
>
> In the emitted structure `ComponentA` imports `dist/a/Models/model`
> referencing it with one `../` so the lookup ends up in `dist/a/ComponentA/` rather than `dist/a`. Another pair of `../` is required to correctly resolve the requested file.
>

> [!NOTE]
>
> - I'm using `preserveModules` as output option

```text
dist
dist/a
dist/a/index.js
dist/a/Models
dist/a/Models/model
dist/a/Models/model/index.d.ts
dist/a/ComponentA
dist/a/ComponentA/ComponentA
dist/a/ComponentA/ComponentA/index.js
dist/a/ComponentA/ComponentA/index.d.ts 
                             ^ this file contains the invalid path to the Models file
dist/a/index.d.ts

dist/b
not relevant for this bug
```

[Github issue](https://github.com/unplugin/unplugin-isolated-decl/issues/23)
