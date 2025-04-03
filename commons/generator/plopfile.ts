import { NodePlopAPI } from "plop";
import { commonPackage } from "./templates/common-package/commonPackage";
import { ROOT_MONOREPO } from "./core/consts/root";
import setLowercaseHelper from "./core/helpers/lowercase";
export default function (plop: NodePlopAPI) {
	setLowercaseHelper(plop);

	plop.setGenerator("basics", {
		description: "Skeleton plopfile",
		prompts: [], //Cria perguntas
		actions: [], //Executa ações
	});

	commonPackage(plop);
}
