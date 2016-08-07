const fs = require('fs');

const configFile = process.argv[2];

function injectEnv(configFile) {
  if (!configFile) {
    console.warn('Config file is not specified. Skipped.')
    return;
  }

  const fileContent = fs.readFileSync(configFile, 'utf8');

  const replaced = fileContent.replace(/<#([^#]*)#>/g, (_, envVar) => {
    if (process.env[envVar]) {
      return process.env[envVar]
    }
    else {
      throw new ReferenceError('No env variable:' + envVar);
    }
  });

  fs.writeFileSync(configFile, replaced, 'utf8');
  console.log('Env variables injected');
}

injectEnv(configFile);