import { NodePlopAPI } from "plop";

export default function setLowercaseHelper(plop: NodePlopAPI) {
	plop.setHelper("lowercase", (text: string) => {
		return text.toLowerCase();
	});
}
