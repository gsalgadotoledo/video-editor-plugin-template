// The editor loads activate() when hello.greet runs.
// Add permissions to plugin.json only when your code needs editor commands,
// files or network access.
export function activate() {
  return {
    commands: {
      'hello.greet': {
        run(args = {}) {
          const name = String(args.name ?? 'world').trim() || 'world';
          return { message: `Hello, ${name}!` };
        },
      },
    },
  };
}
