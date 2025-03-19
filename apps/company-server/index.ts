import http from "http";
import { httpClient } from "@company/commons-http-client";

console.log("Hello World");

const app = http.createServer(async (req, res) => {
	const url = "https://api.github.com/users/omariosouto";
	const payload = await httpClient.get(url);
	console.log(payload);
	res.write(
		JSON.stringify({ message: "Hello World, Node.JS Server", payload })
	);
	// res.write(JSON.stringify(payload));
	res.end();
});

app.listen(3002);
