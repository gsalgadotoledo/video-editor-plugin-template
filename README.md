# Hello World plugin for Video Batch

A small JavaScript plugin you can copy and rename. It needs no build step or npm dependencies.

## Try it

1. In Video Batch, open **Plugins** and paste this repository's Git URL under **Instalar desde Git**. The editor installs it in your user plugin folder and activates it immediately. You can also drag a local copy of this folder into the Plugins screen.
2. Open the command palette with **Command Shift P** (macOS) or **Ctrl Shift P** (Windows).
3. Run **extension.run** with:
   - `plugin`: `com.example.hello-world`
   - `command`: `hello.greet`
   - `args`: `{"name":"Ada"}`
4. The result is `{"message":"Hello, Ada!"}`.

Run `npm run check` to check the JavaScript and the example command without opening the editor.

## Make your own plugin

1. Use this repository as a GitHub template, then clone your new repository.
2. Change the reverse-domain `id`, `name`, `description`, command name and activation event in `plugin.json`.
3. Rename the command in `src/index.js`. The command names in both files must match.
4. Add editor command permissions in `plugin.json` only if your plugin calls editor commands through `ctx.commands.execute(...)`.
5. Test with `npm run check`, then install your repository from the Plugins screen.

The plugin runs in the editor's JavaScript extension host. `activate()` returns its command implementations; a command's `run(args, ctx)` receives user arguments and the editor context.

## Español

Esta plantilla crea un plugin JavaScript sin dependencias. Usa **Use this template** en GitHub, cambia el `id` y el comando en `plugin.json` y `src/index.js`, comprueba con `npm run check` e instálalo pegando la URL de tu repositorio en la pestaña **Plugins** del editor.

## License

MIT. See [LICENSE](LICENSE).
