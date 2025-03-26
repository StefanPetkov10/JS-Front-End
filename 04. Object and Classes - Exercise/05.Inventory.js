function inventory(data) {
    let registry = [];

    for (let row of data) {
        let [name, level, items] = row.split(' / ');
        quantity = Number(level);

        let hero = {
            name,
            level,
            items
            //items: items.split(', ').sort((a, b) => a.localeCompare(b))
        };

        registry.push(hero);
    }

    registry.sort(compsreLevels);

    for (let hero of registry) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

    function compsreLevels(a, b) {
        return a.level - b.level;
    }
}

inventory(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara'
 ]
    );
        