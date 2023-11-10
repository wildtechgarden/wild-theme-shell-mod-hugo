function attachShadowRoots(root) { /* eslint-disable-line no-unused-vars */
	root.querySelectorAll("template[shadowrootmode]").forEach(function(template) {
		var mode = template.getAttribute("shadowrootmode");
		var shadowRoot = template.parentNode.attachShadow({ "mode": mode});
		shadowRoot.appendChild(template.content);
		template.remove();
		attachShadowRoots(shadowRoot);
	});
}
