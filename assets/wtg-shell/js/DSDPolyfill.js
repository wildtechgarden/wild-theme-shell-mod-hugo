/* cspell:ignore DCOM */

function attachShadowRoots(root) {
	var shadowRootTemplates = root.querySelectorAll("template[shadowrootmode]")

	if (!shadowRootTemplates) {
		return
	}

	shadowRootTemplates.forEach(function(template) {
		var mode = template.getAttribute("shadowrootmode");
		var shadowRootParent = template.parentNode

		if (!shadowRootParent) {
			return
		}

		var shadowRoot = shadowRootParent.attachShadow({ "mode": mode});

		shadowRoot.appendChild(template.content);
		template.remove();
		attachShadowRoots(shadowRoot);
	});
}

function initiateAttachShadowRoots(event) {
	var root = event.currentTarget

	if (root == window) {
		root = document
	}

	attachShadowRoots(root)
}

addEventListener("load", initiateAttachShadowRoots);
