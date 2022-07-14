-- select *
-- from
-- 	professor p
-- inner join
-- 	disciplina d on d.cpf_professor = p.cpf

-- select *
-- from
-- 	professor p
-- left join
-- 	disciplina d on d.cpf_professor = p.cpf


select *
from
	professor p
right join
	disciplina d on d.cpf_professor = p.cpf