select *
from aluno a
where a.data_nascimento between '2000-01-01' and '2000-12-31'

union all

select * 
from aluno al
where al.nome like '% Gomes';



-- SELECT *
-- FROM
-- 	disciplina d, professor p
-- WHERE
-- 	d.cpf_professor = p.cpf;

-- SELECT *
-- FROM disciplina d
-- JOIN professor p ON d.cpf_professor = p.cpf;


