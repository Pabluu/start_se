import { getPeople } from './StarWarsService.js';

async function main() {
    const starWarsPeople = await getPeople(1);
    const totalHeight = starWarsPeople.reduce((total, person) => {
        total += Number(person.height / starWarsPeople.length / 100);

        return total;
    }, 0);

    console.log(`Media da altura: ${totalHeight.toFixed(2)} cm²`);
}

main();