import { getPeople } from './StarWarsService.js';

async function main() {
    const starWarsPeople = await getPeople(1);
    const starWarsPeopleNames = starWarsPeople
        .map((person) => {
            // const name = person.name;
            // const height = person.height;
            const {name:nome, height:altura} = person;
            return { nome, altura };
        });

    for (let desc of starWarsPeopleNames) {
        console.log(`Nome: ${desc.nome}
Altura: ${desc.altura/100} cm.\n`);
    }
}

main();