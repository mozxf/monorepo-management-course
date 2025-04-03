import { NodePlopAPI } from "plop";
import path from "path";
import { ROOT_MONOREPO } from "../../core/consts/root";
export function commonPackage(plop: NodePlopAPI) {
	plop.setGenerator("common-package", {
		description:
			"Create a new common package boilerplate inside 'commons' folder",
		prompts: [
			{
				type: "input",
				name: "packageName",
				message: "What's the package name?",
				default: "my-package",
			},
		], //Cria perguntas
		actions: [
			{
				type: "add",
				path: path.resolve(
					ROOT_MONOREPO,
					"commons",
					"{{ lowercase packageName}}",
					"package.json"
				),
				templateFile: "templates/common-package/package.json.hbs",
			},
			{
				type: "add",
				path: path.resolve(
					ROOT_MONOREPO,
					"commons",
					"{{ lowercase packageName}}",
					"src",
					"index.ts"
				),
			},
		], //Executa ações
	});
}
