# RxJS in Deno

This repo contains 5 deno tasks to try importing rxjs in deno.  
From the second task on it also shows a bug in the deno linter with the new `npm:` style imports. 

## Usage 

Simply run the following commands: 

```
// Works (but unrelated to `npm:` style imports)
deno task rxjs-01

// Works
deno task rxjs-02

// Broken in Linter, but works when running
deno task rxjs-03

// Broken in Linter, but works when running
deno task rxjs-04

// Broken in Linter, but works when running
deno task rxjs-05
```


