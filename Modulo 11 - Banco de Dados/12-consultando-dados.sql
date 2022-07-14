SELECT *
FROM
	aluno
WHERE
	-- nome LIKE '% da %'
    -- data_nascimento > '2000-01-01'
    -- data_nascimento BETWEEN '2000-01-01' AND '2000-12-31'
    data_nascimento IN('2000-01-01', '2000-12-31')