import express from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();
const PORT = 3000;
let users = [
    { id: 1, name: 'Pablo Henrique', age: 22 },
    { id: 2, name: 'Juber Elias', age: 47 }
]

// o request vai ser usado o json
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// GET => OBTER DADOS
app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express</h2>');
});

app.get('/users', (request, response) => {
    return response.send(users);
});

app.get('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const user = users.
        find((user) => {
            return (user.id === Number(userId));
        });
    // .name;

    return response.send(user);
});

// POST => CADASTRAR UM NOVO
app.post('/users', (request, response) => {
    const newUser = request.body;

    users.push(newUser);

    return response.status(StatusCodes.CREATED).send(newUser);
});

// PUT => ATUALIZAR
app.put('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const updatedUser = request.body;

    users = users.map(user => {
        if (Number(userId) === user.id) {
            return updatedUser;
        }

        return user;
    });

    return response.send(updatedUser);
});


app.delete('/users/:userId', (request, response) => {
    const userId = request.params.userId;

    users = users.filter((user) => user.id !== Number(userId));

    return response.status(StatusCodes.NO_CONTENT).send();
})