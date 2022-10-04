# DamageInc - Dev Demo

This is a NextJS, Typescript, React project.

## Getting started
To get started with this project, follow the instructions below.

### Installing dependencies
Install all dependencies by running `yarn install`.

### Configure SSL
1. First you have to install [mkcert](https://github.com/FiloSottile/mkcert)
2. Then, run `mkcert -cert-file .\internals\cert\cert.crt -key-file .\internals\cert\cert.key local.dmginc.gg`
3. Go to your hostfile
   3.1. `/etc/hosts` for OSX and `C:\Windows\System32\Drivers\etc\hosts` for windows
   3.2. paste the following contents at the bottom of the file: `127.0.0.1   local.dmginc.gg`


## Running the project
In order to run the project, you can run `yarn dev` in the root of the project. This will start a dev proxy and the project you are working on.
Then, the project will be available on `https://local.dmginc.gg` or `https://local.dmginc.gg`. This is dependent of the environment defined in `dev-proxy.yml`. In order to run it with the production url, set the `env` to `production`.