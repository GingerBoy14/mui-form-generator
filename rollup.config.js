import peerDepsExternal from "rollup-plugin-peer-deps-external";
import babel from '@rollup/plugin-babel'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");

export default {
	input: "src/index.ts",
	output: [
		{
			file: packageJson.main,
			format: "cjs",
			sourcemap: true
		},
		{
			file: packageJson.module,
			format: "esm",
			sourcemap: true
		}
	],

	external: [
		'react',
		'react-hook-form',
		'@material-ui/core',
		'@material-ui/pickers'
	],
	plugins: [
		babel({
			exclude: "node_modules/**"
		}),
		peerDepsExternal(),
		resolve(),
		commonjs(),
		postcss(),
		terser(),
	],
};
