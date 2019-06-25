function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('div#nested div.target');
}

function increaseRankBy(n) {
    const list =  document.getElementById('app').querySelectorAll('ul.ranked-list');
    for (let i=0; i<list.length; i++) {
        list[i].innerHTML = (i + 1).toString();
    }
}

function deepestChild() {
    let node = document.getElementById('grand-node');
    let child = node.children[0];

    while (child) {
        node = child;
        child = node.children[0];
    }
    return node
}