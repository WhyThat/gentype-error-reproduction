# genType Import Issue Demonstration

This repository demonstrates an issue encountered with genType when generating TypeScript definitions from ReScript, specifically regarding the import of types across files in a React project setup.

## Overview

The project contains two ReScript components, Working.res and NotWorking.res, which are both exported from an index.res file. While genType generates the correct TypeScript typings for these components individually, it fails to import a specific type (not_imported) used in NotWorking.res into the TypeScript definition file generated for index.res.
Issue Description

In this demonstration, Working.res and NotWorking.res define components with props that include types defined within the same file. When these components are exported through index.res using @genType annotations, the generated TypeScript file for index.res (index.gen.ts) does not import the not_imported type from NotWorking.gen.ts, leading to TypeScript errors due to the undefined type.
Reproducing the Issue

## To reproduce the issue:

Clone this repository.

```sh
npm install
npm run res:build
npm run ts:check
```

### Expected Behavior

The `index.gen.tsx` file should include all necessary type imports to ensure that the TypeScript compiler recognizes all types used in the prop definitions of the exported components.

### Actual Behavior

The generated `index.gen.tsx `file omits the import for the not_imported type, resulting in a TypeScript error due to the undefined type when attempting to use the NotWorking component.
