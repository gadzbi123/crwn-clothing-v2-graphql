module.exports = {
  projects: {
    app: {
      schema: ["src/schema.graphql", "directives.graphql"],
      documents: ["**/*.{graphql,js,ts,jsx,tsx}" /* "my/fragments.graphql"*/],
    },
    db: {
      schema: "src/generated/db.graphql",
      documents: ["src/db/**/*.graphql" /* "my/fragments.graphql"*/],
      extensions: {
        codegen: [
          {
            generator: "graphql-binding",
            language: "typescript",
            output: {
              binding: "src/generated/db.ts",
            },
          },
        ],
      },
    },
  },
};
