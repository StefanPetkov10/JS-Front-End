
function solve(names) {
    let result = {};

    for (let name of names) {
        result[name] = name.length;
    }

    for (let name in result) {
        console.log(`Name: ${name} -- Personal Number: ${result[name]}`);
    }
}

solve(['Peter', 'George', 'Bill']);
// Name: Peter -- Personal Number: 5
