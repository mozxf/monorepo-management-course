import React from "react";
import { httpClient } from "@company/commons-http-client";

export default function app() {
	const url = "https://api.github.com/users/omariosouto";
	httpClient.get(url).then((data) => console.log(data));

	return <h1>Hello World</h1>;
}
