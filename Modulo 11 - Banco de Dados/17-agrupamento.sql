select 
	ad.ra_aluno,
	min(ad.nota),
    max(ad.nota)
from 
	aluno_disciplina ad
where
	ad.codigo_disciplina = 10
group by
	ad.ra_aluno
having
	avg(ad.nota) >= 6.0
