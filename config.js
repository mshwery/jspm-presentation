System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.8.14",
    "babel-runtime": "npm:babel-runtime@5.8.12",
    "bespoke": "npm:bespoke@1.0.0",
    "bespoke-backdrop": "npm:bespoke-backdrop@1.0.0",
    "bespoke-bullets": "npm:bespoke-bullets@1.1.0",
    "bespoke-classes": "npm:bespoke-classes@1.0.0",
    "bespoke-hash": "npm:bespoke-hash@1.0.2",
    "bespoke-keys": "npm:bespoke-keys@1.0.0",
    "bespoke-progress": "npm:bespoke-progress@1.0.0",
    "bespoke-scale": "npm:bespoke-scale@1.0.1",
    "bespoke-touch": "npm:bespoke-touch@1.0.0",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "del": "npm:del@1.2.0",
    "gulp-autoprefixer": "npm:gulp-autoprefixer@2.3.1",
    "gulp-connect": "npm:gulp-connect@2.2.0",
    "gulp-csso": "npm:gulp-csso@1.0.0",
    "gulp-jade": "npm:gulp-jade@1.1.0",
    "gulp-plumber": "npm:gulp-plumber@1.0.1",
    "gulp-rename": "npm:gulp-rename@1.2.2",
    "gulp-stylus": "npm:gulp-stylus@2.0.5",
    "gulp-uglify": "npm:gulp-uglify@1.2.0",
    "gulp-util": "npm:gulp-util@3.0.6",
    "prism": "github:PrismJS/prism@1.0.1",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.3.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.9.14"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-tty@0.1.0": {
      "tty-browserify": "npm:tty-browserify@0.0.0"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:abbrev@1.0.7": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:accord@0.19.0": {
      "convert-source-map": "npm:convert-source-map@1.1.1",
      "fobject": "npm:fobject@0.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.14",
      "indx": "npm:indx@0.2.3",
      "lodash": "npm:lodash@3.10.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "resolve": "npm:resolve@1.1.6",
      "uglify-js": "npm:uglify-js@2.4.19",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "when": "npm:when@3.7.3"
    },
    "npm:acorn-globals@1.0.5": {
      "acorn": "npm:acorn@2.1.0"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:acorn@2.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:array-union@1.0.1": {
      "array-uniq": "npm:array-uniq@1.0.2"
    },
    "npm:asap@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asn1.js@2.1.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:async@1.4.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:autoprefixer-core@5.2.1": {
      "browserslist": "npm:browserslist@0.4.0",
      "caniuse-db": "npm:caniuse-db@1.0.30000246",
      "num2fraction": "npm:num2fraction@1.1.0",
      "postcss": "npm:postcss@4.1.16",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:babel-runtime@5.8.12": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:basic-auth-connect@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:batch@0.5.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:beeper@1.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:bespoke-backdrop@1.0.0": {
      "bespoke": "npm:bespoke@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bespoke-bullets@1.1.0": {
      "bespoke": "npm:bespoke@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bespoke-classes@1.0.0": {
      "bespoke": "npm:bespoke@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bespoke-hash@1.0.2": {
      "bespoke": "npm:bespoke@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bespoke-keys@1.0.0": {
      "bespoke": "npm:bespoke@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bespoke-progress@1.0.0": {
      "bespoke": "npm:bespoke@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bespoke-scale@1.0.1": {
      "bespoke": "npm:bespoke@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bespoke-touch@1.0.0": {
      "bespoke": "npm:bespoke@1.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:bespoke@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:body-parser@1.2.0": {
      "bytes": "npm:bytes@1.0.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "qs": "npm:qs@0.6.6",
      "raw-body": "npm:raw-body@1.1.4",
      "type-is": "npm:type-is@1.2.0"
    },
    "npm:brace-expansion@1.1.0": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:browserify-aes@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.2",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.7",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:browserslist@0.4.0": {
      "caniuse-db": "npm:caniuse-db@1.0.30000246",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:buffer-crc32@0.2.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:buffer-xor@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.3.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:camelcase-keys@1.0.0": {
      "camelcase": "npm:camelcase@1.1.0",
      "map-obj": "npm:map-obj@1.0.1"
    },
    "npm:chalk@0.5.1": {
      "ansi-styles": "npm:ansi-styles@1.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@0.1.0",
      "strip-ansi": "npm:strip-ansi@0.3.0",
      "supports-color": "npm:supports-color@0.2.0"
    },
    "npm:chalk@1.1.0": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:clean-css@3.3.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "commander": "npm:commander@2.8.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:clone-stats@0.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:clone@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:commander@2.6.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:commander@2.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:compressible@1.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:compression@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@0.3.0",
      "compressible": "npm:compressible@1.0.1",
      "negotiator": "npm:negotiator@0.4.3",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:connect-livereload@0.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:connect-timeout@1.1.0": {
      "debug": "npm:debug@0.8.1"
    },
    "npm:connect@2.17.0": {
      "basic-auth-connect": "npm:basic-auth-connect@1.0.0",
      "body-parser": "npm:body-parser@1.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@1.0.0",
      "compression": "npm:compression@1.0.2",
      "connect-timeout": "npm:connect-timeout@1.1.0",
      "cookie": "npm:cookie@0.1.2",
      "cookie-parser": "npm:cookie-parser@1.1.0",
      "cookie-signature": "npm:cookie-signature@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "csurf": "npm:csurf@1.2.0",
      "debug": "npm:debug@0.8.1",
      "errorhandler": "npm:errorhandler@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "express-session": "npm:express-session@1.2.0",
      "fresh": "npm:fresh@0.2.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "method-override": "npm:method-override@1.0.1",
      "morgan": "npm:morgan@1.1.1",
      "multiparty": "npm:multiparty@2.2.0",
      "on-headers": "npm:on-headers@0.0.0",
      "parseurl": "npm:parseurl@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "pause": "npm:pause@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "qs": "npm:qs@0.6.6",
      "response-time": "npm:response-time@1.0.0",
      "serve-favicon": "npm:serve-favicon@2.0.0",
      "serve-index": "npm:serve-index@1.0.3",
      "serve-static": "npm:serve-static@1.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "type-is": "npm:type-is@1.2.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vhost": "npm:vhost@1.0.0"
    },
    "npm:constantinople@3.0.2": {
      "acorn": "npm:acorn@2.1.0"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:convert-source-map@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:cookie-parser@1.1.0": {
      "cookie": "npm:cookie@0.1.2",
      "cookie-signature": "npm:cookie-signature@1.0.3"
    },
    "npm:cookie-signature@1.0.3": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:create-hmac@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:crypto-browserify@3.9.14": {
      "browserify-aes": "npm:browserify-aes@1.0.2",
      "browserify-sign": "npm:browserify-sign@3.0.2",
      "create-ecdh": "npm:create-ecdh@2.0.1",
      "create-hash": "npm:create-hash@1.1.1",
      "create-hmac": "npm:create-hmac@1.1.3",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:css@1.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "css-parse": "npm:css-parse@1.0.4",
      "css-stringify": "npm:css-stringify@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:csso@1.3.11": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:csurf@1.2.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "scmp": "npm:scmp@0.0.3",
      "uid2": "npm:uid2@0.0.3"
    },
    "npm:dateformat@1.0.11": {
      "get-stdin": "npm:get-stdin@4.0.1",
      "meow": "npm:meow@3.3.0"
    },
    "npm:debug@0.8.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:debug@0.8.1": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:del@1.2.0": {
      "each-async": "npm:each-async@1.1.1",
      "globby": "npm:globby@2.1.0",
      "is-path-cwd": "npm:is-path-cwd@1.0.0",
      "is-path-in-cwd": "npm:is-path-in-cwd@1.0.0",
      "object-assign": "npm:object-assign@2.1.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "rimraf": "npm:rimraf@2.4.2"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.1.0",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:duplexer2@0.0.2": {
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:duplexer@0.1.1": {
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:each-async@1.1.1": {
      "onetime": "npm:onetime@1.0.0",
      "set-immediate-shim": "npm:set-immediate-shim@1.0.1"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:errorhandler@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:es6-promise@2.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:event-stream@3.1.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "duplexer": "npm:duplexer@0.1.1",
      "from": "npm:from@0.1.3",
      "map-stream": "npm:map-stream@0.1.0",
      "pause-stream": "npm:pause-stream@0.0.11",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "split": "npm:split@0.2.10",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-combiner": "npm:stream-combiner@0.0.4",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:express-session@1.2.0": {
      "buffer-crc32": "npm:buffer-crc32@0.2.1",
      "cookie": "npm:cookie@0.1.2",
      "cookie-signature": "npm:cookie-signature@1.0.3",
      "debug": "npm:debug@0.8.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "on-headers": "npm:on-headers@0.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "uid2": "npm:uid2@0.0.3",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "utils-merge": "npm:utils-merge@1.0.0"
    },
    "npm:faye-websocket@0.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:fobject@0.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "graceful-fs": "npm:graceful-fs@3.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "semver": "npm:semver@4.3.6",
      "when": "npm:when@3.7.3"
    },
    "npm:from@0.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:get-stdin@4.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:glob@3.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@0.3.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:glob@5.0.14": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.10",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:globby@2.1.0": {
      "array-union": "npm:array-union@1.0.1",
      "async": "npm:async@1.4.0",
      "glob": "npm:glob@5.0.14",
      "object-assign": "npm:object-assign@3.0.0"
    },
    "npm:graceful-fs@3.0.8": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:gulp-autoprefixer@2.3.1": {
      "autoprefixer-core": "npm:autoprefixer-core@5.2.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.6",
      "object-assign": "npm:object-assign@2.1.1",
      "postcss": "npm:postcss@4.1.16",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through2": "npm:through2@0.6.5",
      "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.1.4"
    },
    "npm:gulp-connect@2.2.0": {
      "connect": "npm:connect@2.17.0",
      "connect-livereload": "npm:connect-livereload@0.3.2",
      "event-stream": "npm:event-stream@3.1.7",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "gulp-util": "npm:gulp-util@2.2.20",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tiny-lr": "npm:tiny-lr@0.0.7"
    },
    "npm:gulp-csso@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "csso": "npm:csso@1.3.11",
      "gulp-util": "npm:gulp-util@3.0.6",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gulp-jade@1.1.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.6",
      "jade": "npm:jade@1.11.0",
      "through2": "npm:through2@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:gulp-plumber@1.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "gulp-util": "npm:gulp-util@3.0.6",
      "through2": "npm:through2@0.6.5"
    },
    "npm:gulp-rename@1.2.2": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:gulp-stylus@2.0.5": {
      "accord": "npm:accord@0.19.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "gulp-util": "npm:gulp-util@3.0.6",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stylus": "npm:stylus@0.52.0",
      "through2": "npm:through2@2.0.0",
      "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.1.4"
    },
    "npm:gulp-uglify@1.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "deap": "npm:deap@1.0.0",
      "gulp-util": "npm:gulp-util@3.0.6",
      "through2": "npm:through2@0.6.5",
      "uglify-js": "npm:uglify-js@2.4.19",
      "vinyl-sourcemaps-apply": "npm:vinyl-sourcemaps-apply@0.1.4"
    },
    "npm:gulp-util@2.2.20": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@0.5.1",
      "dateformat": "npm:dateformat@1.0.11",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
      "lodash.template": "npm:lodash.template@2.4.1",
      "minimist": "npm:minimist@0.2.0",
      "multipipe": "npm:multipipe@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@0.5.1",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl": "npm:vinyl@0.2.3"
    },
    "npm:gulp-util@3.0.6": {
      "array-differ": "npm:array-differ@1.0.0",
      "array-uniq": "npm:array-uniq@1.0.2",
      "beeper": "npm:beeper@1.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "chalk": "npm:chalk@1.1.0",
      "dateformat": "npm:dateformat@1.0.11",
      "lodash._reescape": "npm:lodash._reescape@3.0.0",
      "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.template": "npm:lodash.template@3.6.2",
      "minimist": "npm:minimist@1.1.2",
      "multipipe": "npm:multipipe@0.1.2",
      "object-assign": "npm:object-assign@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "through2": "npm:through2@2.0.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vinyl": "npm:vinyl@0.5.0"
    },
    "npm:has-ansi@0.1.0": {
      "ansi-regex": "npm:ansi-regex@0.2.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:indent-string@1.2.2": {
      "get-stdin": "npm:get-stdin@4.0.1",
      "minimist": "npm:minimist@1.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "repeating": "npm:repeating@1.1.3",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:indx@0.2.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-finite@1.0.1": {
      "number-is-nan": "npm:number-is-nan@1.0.0"
    },
    "npm:is-path-cwd@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:is-path-in-cwd@1.0.0": {
      "is-path-inside": "npm:is-path-inside@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:is-path-inside@1.0.0": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-inside": "npm:path-is-inside@1.0.1"
    },
    "npm:jade@1.11.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "character-parser": "npm:character-parser@1.2.1",
      "clean-css": "npm:clean-css@3.3.6",
      "commander": "npm:commander@2.6.0",
      "constantinople": "npm:constantinople@3.0.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "jstransformer": "npm:jstransformer@0.0.2",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "transformers": "npm:transformers@2.1.0",
      "uglify-js": "npm:uglify-js@2.4.19",
      "void-elements": "npm:void-elements@2.0.1",
      "with": "npm:with@4.0.3"
    },
    "npm:js-base64@2.1.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jstransformer@0.0.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "is-promise": "npm:is-promise@2.0.0",
      "promise": "npm:promise@6.1.0"
    },
    "npm:lodash._baseassign@3.2.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basetostring@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash._createassigner@3.1.1": {
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash._escapehtmlchar@2.4.1": {
      "lodash._htmlescapes": "npm:lodash._htmlescapes@2.4.1"
    },
    "npm:lodash._reunescapedhtml@2.4.1": {
      "lodash._htmlescapes": "npm:lodash._htmlescapes@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash._shimkeys@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.assign@3.2.0": {
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._createassigner": "npm:lodash._createassigner@3.1.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.defaults@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash.escape@2.4.1": {
      "lodash._escapehtmlchar": "npm:lodash._escapehtmlchar@2.4.1",
      "lodash._reunescapedhtml": "npm:lodash._reunescapedhtml@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash.escape@3.0.0": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1"
    },
    "npm:lodash.isobject@2.4.1": {
      "lodash._objecttypes": "npm:lodash._objecttypes@2.4.1"
    },
    "npm:lodash.keys@2.4.1": {
      "lodash._isnative": "npm:lodash._isnative@2.4.1",
      "lodash._shimkeys": "npm:lodash._shimkeys@2.4.1",
      "lodash.isobject": "npm:lodash.isobject@2.4.1"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.template@2.4.1": {
      "lodash._escapestringchar": "npm:lodash._escapestringchar@2.4.1",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
      "lodash.defaults": "npm:lodash.defaults@2.4.1",
      "lodash.escape": "npm:lodash.escape@2.4.1",
      "lodash.keys": "npm:lodash.keys@2.4.1",
      "lodash.templatesettings": "npm:lodash.templatesettings@2.4.1",
      "lodash.values": "npm:lodash.values@2.4.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:lodash.template@3.6.2": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.restparam": "npm:lodash.restparam@3.6.1",
      "lodash.templatesettings": "npm:lodash.templatesettings@3.1.0"
    },
    "npm:lodash.templatesettings@2.4.1": {
      "lodash._reinterpolate": "npm:lodash._reinterpolate@2.4.1",
      "lodash.escape": "npm:lodash.escape@2.4.1"
    },
    "npm:lodash.templatesettings@3.1.0": {
      "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
      "lodash.escape": "npm:lodash.escape@3.0.0"
    },
    "npm:lodash.values@2.4.1": {
      "lodash.keys": "npm:lodash.keys@2.4.1"
    },
    "npm:lodash@3.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:map-stream@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:meow@3.3.0": {
      "camelcase-keys": "npm:camelcase-keys@1.0.0",
      "indent-string": "npm:indent-string@1.2.2",
      "minimist": "npm:minimist@1.1.2",
      "object-assign": "npm:object-assign@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:method-override@1.0.1": {
      "methods": "npm:methods@1.0.0"
    },
    "npm:miller-rabin@2.1.0": {
      "bn.js": "npm:bn.js@3.1.1",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime@1.2.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:minimatch@0.3.0": {
      "lru-cache": "npm:lru-cache@2.6.5",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sigmund": "npm:sigmund@1.0.1"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:morgan@1.1.1": {
      "bytes": "npm:bytes@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:multiparty@2.2.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.1.13",
      "stream-counter": "npm:stream-counter@0.2.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:multipipe@0.1.2": {
      "duplexer2": "npm:duplexer2@0.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:nopt@2.0.0": {
      "abbrev": "npm:abbrev@1.0.7",
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:noptify@0.0.3": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "nopt": "npm:nopt@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:optimist@0.3.7": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wordwrap": "npm:wordwrap@0.0.2"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.7": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:parse-asn1@3.0.1": {
      "asn1.js": "npm:asn1.js@2.1.3",
      "browserify-aes": "npm:browserify-aes@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parseurl@1.0.1": {
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-is-inside@1.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:pause-stream@0.0.11": {
      "through": "npm:through@2.3.8"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:postcss@4.1.16": {
      "es6-promise": "npm:es6-promise@2.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:process-nextick-args@1.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:process@0.11.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@2.0.0": {
      "is-promise": "npm:is-promise@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:promise@6.1.0": {
      "asap": "npm:asap@1.0.0"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:raw-body@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "bytes": "npm:bytes@0.3.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@1.1.13": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:readable-stream@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "process-nextick-args": "npm:process-nextick-args@1.0.2",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "util-deprecate": "npm:util-deprecate@1.0.1"
    },
    "npm:repeating@1.1.3": {
      "is-finite": "npm:is-finite@1.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:replace-ext@0.0.1": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:rimraf@2.4.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.14",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sax@0.5.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:semver@4.3.6": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:send@0.3.0": {
      "buffer-crc32": "npm:buffer-crc32@0.2.1",
      "debug": "npm:debug@0.8.0",
      "fresh": "npm:fresh@0.2.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "mime": "npm:mime@1.2.11",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "range-parser": "npm:range-parser@1.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:serve-favicon@2.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fresh": "npm:fresh@0.2.2",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:serve-index@1.0.3": {
      "batch": "npm:batch@0.5.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "negotiator": "npm:negotiator@0.4.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:serve-static@1.1.0": {
      "parseurl": "npm:parseurl@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "send": "npm:send@0.3.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:sha.js@2.4.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:sigmund@1.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:source-map@0.1.34": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.1.43": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:split@0.2.10": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "through": "npm:through@2.3.8",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.13"
    },
    "npm:stream-combiner@0.0.4": {
      "duplexer": "npm:duplexer@0.1.1"
    },
    "npm:stream-counter@0.2.0": {
      "readable-stream": "npm:readable-stream@1.1.13",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:strip-ansi@0.3.0": {
      "ansi-regex": "npm:ansi-regex@0.2.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:stylus@0.52.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "css-parse": "npm:css-parse@1.7.0",
      "debug": "npm:debug@0.8.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@3.2.11",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "sax": "npm:sax@0.5.8",
      "source-map": "npm:source-map@0.1.43",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:supports-color@0.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:through2@0.5.1": {
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@3.0.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:through2@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@2.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.1"
    },
    "npm:tiny-lr@0.0.7": {
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "debug": "npm:debug@0.8.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "faye-websocket": "npm:faye-websocket@0.4.4",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "noptify": "npm:noptify@0.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "qs": "npm:qs@0.5.6",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:transformers@2.1.0": {
      "css": "npm:css@1.0.8",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "promise": "npm:promise@2.0.0",
      "uglify-js": "npm:uglify-js@2.2.5",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:type-is@1.2.0": {
      "mime": "npm:mime@1.2.11"
    },
    "npm:uglify-js@2.2.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "optimist": "npm:optimist@0.3.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.43",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:uglify-js@2.4.19": {
      "async": "npm:async@0.2.10",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.34",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0",
      "yargs": "npm:yargs@3.5.4"
    },
    "npm:uglify-to-browserify@1.0.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:uid2@0.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vinyl-sourcemaps-apply@0.1.4": {
      "source-map": "npm:source-map@0.1.43"
    },
    "npm:vinyl@0.2.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vinyl@0.5.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "clone": "npm:clone@1.0.2",
      "clone-stats": "npm:clone-stats@0.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "replace-ext": "npm:replace-ext@0.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:void-elements@2.0.1": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:when@3.7.3": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:window-size@0.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "tty": "github:jspm/nodelibs-tty@0.1.0"
    },
    "npm:with@4.0.3": {
      "acorn": "npm:acorn@1.2.2",
      "acorn-globals": "npm:acorn-globals@1.0.5"
    },
    "npm:yargs@3.5.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "camelcase": "npm:camelcase@1.1.0",
      "decamelize": "npm:decamelize@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "window-size": "npm:window-size@0.1.0",
      "wordwrap": "npm:wordwrap@0.0.2"
    }
  }
});

