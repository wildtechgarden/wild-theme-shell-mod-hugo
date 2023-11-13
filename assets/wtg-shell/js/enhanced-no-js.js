/* cspell:ignore topHtmls shadowroot */

function jsAttrsHandler(root) {
	var attrsToChange = []
	var numAttrsToChange = 0

	function findJSAttrs(root) {
		if (typeof root != "object") {
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
	var topHtml = ""

	if (root == window) {
		root = document
		topHtml = "html"
	}

	var noJSClasses

	if (typeof(root.getElementsByClassName) != "function") {
		noJSClasses = root.host.getElementsByClassName("no-js")
	} else {
		noJSClasses = root.getElementsByClassName("no-js")
	}

	if (!noJSClasses || noJSClasses.length < 1) {
		if (typeof(root.getAttributeNode) != "function") {
			return
		}
		var rootAttrNode = root.getAttributeNode("class")
		if (rootAttrNode && rootAttrNode.value.includes("no-js")) {
			var rootClassValue = rootAttrNode.value
			rootClassValue = rootClassValue.replace("no-js", "")

			if (rootClassValue != "") {
				root.setAttribute("class", rootClassValue)
			} else {
				root.removeAttribute("class")
			}
			if (typeof(root.shadowRoot) == "object") {
				jsAttrsHandler(root.shadowRoot)
			}
			return
		} else {
			return
		}
	}

	for (var i = 0; i < noJSClasses.length; i++) {
		if ((topHtml != "") && (noJSClasses.item(i).tagName.toLowerCase() != topHtml)) {
			return
		}

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

function activateScriptsEvent(event) { /* eslint-disable no-unused-vars */
	var root = event.currentTarget
	activateScripts(root)
}

function launchOnLoad(element) { /* eslint-disable no-unused-vars */
	if (!element.shadowRoot) {
		return
	}
	activateScripts(element)
}

function launchOnLoadEvent(event) { /* eslint-disable no-unused-vars */
	var root = event.currentTarget

	if (!root.shadowRoot) {
		return
	}
	activateScripts(root)
}

addEventListener("load", activateScriptsEvent);
