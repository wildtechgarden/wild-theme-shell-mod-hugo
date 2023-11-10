window.onload = ";(function attachShadowRoots(root) { \
	root.querySelectorAll(\"template[shadowrootmode]\").forEach(function(template) { \
		var mode = template.getAttribute(\"shadowrootmode\"); \
		var shadowRoot = template.parentNode.attachShadow(mode); \
		shadowRoot.appendChild(template.content); \
		template.remove(); \
		attachShadowRoots(shadowRoot); \
	}); \
})(document);"
