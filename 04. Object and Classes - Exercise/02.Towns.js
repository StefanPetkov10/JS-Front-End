 function solve(towns) {
    let result = [];

    for (let item of towns) {
        let [name, latitude, longtude] = item.split(' | ');

        let town = {
            town: name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longtude).toFixed(2)
        };

        result.push(town);

        console.log(town);
    }
    
    //return result;
 }

console.log(solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']));