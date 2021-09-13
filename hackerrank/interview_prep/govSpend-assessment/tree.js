t = {
    "value": 5,
    "left": {
        "value": 2,
        "left": {
            "value": 10,
            "left": null,
            "right": null
        },
        "right": {
            "value": 4,
            "left": null,
            "right": null
        }
    },
    "right": {
        "value": -3,
        "left": null,
        "right": null
    }
};

function treePaths(t) {
    let result = [];
    let path = new Array(100);
    //Recursive function to traverse the tree
    function recursive (node, path, pathLength) {
        if (node === null) return;
        //Add the current node and increment the length
        path[pathLength] = node.value;
        pathLength++;
        //If a leaf, go ahead and add it to the result array
        if (node.left === null && node.right === null) {
            logPath(path, pathLength)
        //Otherwise, traverse the left and right nodes
        } else {
            recursive(node.left, path, pathLength);
            recursive(node.right, path, pathLength);
        };
    };
    
    function logPath(path, length) {
        let pathResult = '';
        for (let i = 0; i < length; i++) {
            if (i === 0) {
                pathResult += path[i];
            } else {
                pathResult += `->${path[i]}`
            }
        };
        result.push(pathResult);
    };
    recursive(t, path, 0);
    return result;
}

console.log(treePaths(t))