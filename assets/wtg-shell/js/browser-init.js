/* cspell:ignore topHtmls shadowroot */

function browserInit(root) { /* eslint-disable-line no-unused-vars */
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

	function jsAttrsHandler(root) {
		var attrsToChange = []
		var numAttrsToChange = 0

		function findJSAttrs(root) {
			if (typeof root !=  "object") {
				return
			}

			if (root.hasChildNodes()) {
				root.childNodes.forEach(function (childNode) {
					var siblingNode = childNode.nextSibling

					if (!siblingNode) {
						return
					}

					while (siblingNode) {
						findJSAttrs(siblingNode)
						siblingNode = siblingNode.nextSibling
					}

					if (typeof childNode.getAttributeNames != "function") {
						return
					}

					var attrNames = childNode.getAttributeNames()

					if (!attrNames || attrNames.length < 1) {
						return
					}

					for(var i = 0; i < attrNames.length; i++) {
						var attrName = attrNames[i]
						if (attrName.startsWith("data-js-")) {
							var JSAttr = childNode.getAttributeNode(attrName)
							attrsToChange[numAttrsToChange] = JSAttr
							numAttrsToChange += 1
						}
					}
				})
			}
		}

		findJSAttrs(root)

		if(numAttrsToChange > 0) {
			attrsToChange.forEach(function (attr) {
				if (!attr) {
					return
				}
				var parentNode = attr.ownerElement

				if (!parentNode) {
					return
				}

				var attrName = attr.name
				var attrValue = attr.value
				var newAttrName = attrName.replace("data-js-", "")
				parentNode.setAttribute(newAttrName, attrValue)
				parentNode.removeAttribute(attrName)
			})
		}
	}

	function activateScripts(root) {
		var noJSClasses = root.getElementsByClassName("no-js")

		if (!noJSClasses) {
			return
		}

		for (var i = 0; i < noJSClasses.length; i++) {
			var classNode = noJSClasses.item(i).getAttributeNode("class")

			if (!classNode) {
				continue
			}

			var classValue = classNode.value
			classValue = classValue.replace("no-js", "")

			if (classValue != "") {
				noJSClasses.item(i).setAttribute("class", classValue)
			} else {
				noJSClasses.item(i).removeAttribute("class")
			}
		}

		jsAttrsHandler(root)
	}

	activateScripts(root)
	attachShadowRoots(root)
}
