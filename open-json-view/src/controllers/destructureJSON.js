function displayHierarchy(data, depth = 0) {
    const container = document.getElementById('display-value')
    data.forEach(item => {
        const folderContainer = document.createElement('div');
        folderContainer.className = 'folder';

        // Create and display the current item with proper indentation
        const indentation = ' '.repeat(depth * 4);
        const itemName = document.createTextNode(`${indentation}${item.id} --- ${item.value || ''}`);
        folderContainer.appendChild(itemName);

        // If the current item has children, recursively display them
        if (item.children && item.children.length > 0) {
            displayHierarchy(item.children, folderContainer, depth + 1);
        }

        // Prepend the current folder to the specified container
        container.insertBefore(folderContainer, container.firstChild);
    });
}