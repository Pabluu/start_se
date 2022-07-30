-- listar todas as disciplinas que um determinado aluno
-- foi aprovado, de acordo com o curso selecionado
-- filtros: RA aluno e ID curso

create view alunos_aprovados_por_curso AS 
select
	a.ra,
    a.nome,
    c.codigo 	as cod_curso,
    c.nome 		as curso,
    d.codigo 	as cod_disciplina,
    d.nome 		as disciplina,
    avg(ad.nota) as nota_final
from 
	aluno a
inner join
	aluno_curso ac
on ac.ra_aluno = a.ra

inner join
	curso c
on c.codigo = ac.codigo_curso

inner join
	aluno_disciplina ad 
on ad.ra_aluno = a.ra
    
inner join
	disciplina d
on d.codigo = ad.codigo_disciplina
    
group by
	a.ra,
    a.nome,
    c.codigo, 	
    c.nome ,		
    d.codigo, 	
    d.nome
having
	avg(ad.nota) >= 7.0
    
