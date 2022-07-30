select 
		ad.ra_aluno,
		a.nome,
		min(ad.nota),
		max(ad.nota)
	from 
		aluno_disciplina ad
	inner join
		aluno a on a.ra = ad.ra_aluno
	where
		ad.codigo_disciplina = 10 and
        ad.ra_aluno in (
        select
			al.ra
		from
			aluno al
		where al.nome like '%ana%'
        )
	group by
		ad.ra_aluno
	having
		avg(ad.nota) >= 6.0