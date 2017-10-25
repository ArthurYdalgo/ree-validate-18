const Rollup = require('rollup');
const Uglify = require('uglify-js');
const flow = require('rollup-plugin-flow');
const fs = require('fs');
const path = require('path');
const buble = require('rollup-plugin-buble');
const nodeResolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const replace = require('rollup-plugin-replace');
const chalk = require('chalk');
const version = require('../package.json').version;

const outputFolder = path.join(__dirname, '/../', 'dist');

async function main () {
  console.log(chalk.cyan('Generating main builds...'));
  const bundle = await Rollup.rollup({
    input: 'src/index.js',
    plugins: [
      flow({ pretty: true }),
      replace({ __VERSION__: version }),
      nodeResolve(),
      commonjs(),
      buble()
    ],
  });

  const { code } = await bundle.generate({
    format: 'umd',
    name: 'ReeValidate',
    banner:
    `/**
 * ree-validate v${version}
 * (c) ${new Date().getFullYear()} Moeen Basra
 * @license MIT
 */`
  });

  const output = path.join(outputFolder, 'ree-validate.js');
  fs.writeFileSync(output, code);
  console.log(chalk.green('Output File:') + ' ree-validate.js');
  fs.writeFileSync(path.join(outputFolder, 'ree-validate.min.js'), Uglify.minify(code, {
    compress: true,
    mangle: true,
  }).code);
  console.log(chalk.green('Output File:') + ' ree-validate.min.js');
}

async function minimal () {
  console.log(chalk.cyan('Generating minimal builds...'));

  const bundle = await Rollup.rollup({
    input: 'src/index.minimal.js',
    plugins: [
      flow({ pretty: true }),
      replace({ __VERSION__: version }),
      nodeResolve(),
      commonjs(),
      buble()
    ],
  });

  const { code } = await bundle.generate({
    format: 'umd',
    name: 'ReeValidate',
    banner:
`/**
 * ree-validate v${version}
 * (c) ${new Date().getFullYear()} Moeen Basra
 * @license MIT
 */`
  });

  let output = path.join(outputFolder, 'ree-validate.minimal.js');
  fs.writeFileSync(output, code);
  console.log(chalk.green('Output File:') + ' ree-validate.minimal.js');
  fs.writeFileSync(path.join(outputFolder, 'ree-validate.minimal.min.js'), Uglify.minify(code, {
    compress: true,
    mangle: true,
  }).code);
  console.log(chalk.green('Output File:') + ' ree-validate.minimal.min.js');
}

async function build () {
  try {
    await main();
    await minimal();
  } catch (err) {
    console.log(chalk.red(err));
    throw err;
  }
}

build();
