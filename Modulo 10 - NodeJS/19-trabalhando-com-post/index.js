import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
const PORT = 3000;
const BASE = 'https://subtitle2.downsub.com'
let users = [
    { id: 1, name: 'Pablo Henrique', age: 22 },
    { id: 2, name: 'Juber Elias', age: 47 }
]

// o request vai ser usado o json
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em ${BASE}:${PORT}`);
});

app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express</h2>');
});

app.post('/users', (request, response) => {
    const newUser = request.body;

    users.push(newUser);

    return response.status(StatusCodes.CREATED).send(newUser);
});


// https://subtitle2.downsub.com/?title=[Português brasileiro] Why we make bad financial choices -- even when we know better [DownSub.com]&url=eyJjdCI6Ik5jNDhjb1RzbVBmMUwxNEF3MHZsSWZtTFwvUnQ5ak1XazlhV3lNVmRGWHlIXC9yTVVnbUtxRUZiVTFzUnVcL3VFTm0zNnRURkpGWkk5bGVHam80ZXJUeWVhZSt3OGhQSHo3czhjVG1sNHExblc0PSIsIml2IjoiYzg4MjFiZDEyNDk2MDA0ZjE1ZTc0NTJlYjQxNmMwNjMiLCJzIjoiYzRjNzA0MzkwYTRiMTg2ZCJ9&type=txt&removetags=0


// https://subtitle2.downsub.com/?title=%5BPortugu%C3%AAs%20brasileiro%5D%20Why%20we%20make%20bad%20financial%20choices%20--%20even%20when%20we%20know%20better%20%5BDownSub.com%5D&url=eyJjdCI6Ik5jNDhjb1RzbVBmMUwxNEF3MHZsSWZtTFwvUnQ5ak1XazlhV3lNVmRGWHlIXC9yTVVnbUtxRUZiVTFzUnVcL3VFTm0zNnRURkpGWkk5bGVHam80ZXJUeWVhZSt3OGhQSHo3czhjVG1sNHExblc0PSIsIml2IjoiYzg4MjFiZDEyNDk2MDA0ZjE1ZTc0NTJlYjQxNmMwNjMiLCJzIjoiYzRjNzA0MzkwYTRiMTg2ZCJ9&type=txt&removetags=0