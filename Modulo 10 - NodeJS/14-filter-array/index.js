import { getPeople } from './StarWarsService.js';

async function main() {
    const starWarsPeople = await getPeople(1);
    const starWarsPeolpleMale = starWarsPeople
        .filter(person => person.gender === 'male')
        .map((person) => {
            return { name: person.name, gender: person.gender };
        });

    // const starWarsPeolpleFemale = starWarsPeople.filter(person => person.gender === 'female');



    console.log('\n\nPersonagens Masculinos\n----------------------');
    for (let swpf of starWarsPeolpleMale) {
        console.log(swpf.name);
    }

    // console.log('\n\nPersonagens Femininos\n----------------------');
    // for (let swpf of starWarsPeolpleFemale) {
    //     console.log(swpf.name);
    // }

}

main();