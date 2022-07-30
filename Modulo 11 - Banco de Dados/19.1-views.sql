select *
from alunos_aprovados_por_curso aapc
where
	aapc.nome like('Maria%') and
    aapc.cod_curso = 1