# vue-recheck-authorize-app

#### Package: [vue-recheck-authorizer](https://github.com/ReCheck-io/vue-recheck-authorizer)

## To start/build project you need env file with the following config

*Each (production/development) scripts loads file for itself*

`.env.production.local` for production settings/scripts
`.env.development.local` for development settings/scripts

Example `.env.production.local` file:
```bash
# production (logs disabled) or debug (logs enabled)
VUE_APP_LOGGER_MODE=production

# api endpoint,network needed for init function
VUE_APP_API_ENV=https://beta.recheck.io,ae
```

> [More about env variables in Vuejs](https://cli.vuejs.org/guide/mode-and-env.html#:~:text=When%20running%20vue%2Dcli%2Dservice,defaults%20to%20%22development%22%20otherwise.) 


## Project setup
```bash
npm install

### Compiles and hot-reloads for development
npm run dev

### Compiles and minifies for production
npm run build

### Lints and fixes files
npm run lint
```
