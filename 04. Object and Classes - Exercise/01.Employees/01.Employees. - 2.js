//(arr) => arr.map(n => `Name: ${n} -- Personal Number: ${n.length}`).join('\n');

function solve(names) {
    let result = names.map((name) => {
        return `Name: ${name} -- Personal Number: ${name.length}`;
    });
}
solve(['Peter', 'George', 'Bill']);
// Name: Peter -- Personal Number: 5