-- AGREGAÇÃO

-- select 
-- 	max(ad.nota),
--     min(ad.nota),
--     avg(ad.nota),
--     sum(ad.nota)
-- from aluno_disciplina ad
-- where ad.codigo_disciplina = 10

-- ORDENAÇÃO
-- select *
-- from aluno_disciplina ad
-- inner join aluno a on a.ra = ad.ra_aluno
-- where ad.codigo_disciplina = 10
-- order by a.nome

-- DISTINÇÃO
select distinct
	ad.codigo_disciplina, 
    ad.ano
from 
	aluno_disciplina ad
inner join 
	aluno a on a.ra = ad.ra_aluno
where 
	ad.codigo_disciplina = 10