DELIMITER $

CREATE TRIGGER aluno_ai AFTER INSERT 
ON aluno
FOR EACH ROW

BEGIN
	IF NEW.ra IS NOT NULL THEN
		INSERT INTO aluno_curso(ra_aluno, codigo_curso, data_matricula)
		VALUES(NEW.ra, 1, '2022-01-01');
	END IF;
END$
DELIMITER ;

-- INSERT INTO aluno(ra, nome, data_nascimento)
-- VALUES(12379, 'João Noma', '1999-01-02')

select * from aluno_curso where ra_aluno = 12379;