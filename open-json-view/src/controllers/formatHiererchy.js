export function formatHierarchy(json, parentId = null) {
    let result = [];

    for (let key in json) {
        if (json.hasOwnProperty(key)) {
            let node = {
                id: key,
                parent: parentId,
            };

            if (typeof json[key] === 'object') {
                node.children = formatHierarchy(json[key], key);
            } else {
                node.value = json[key];
            }

            result.push(node);
        }
    }

    return result;
}