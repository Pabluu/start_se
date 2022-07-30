-- INSERT INTO aluno_curso(ra_aluno, codigo_curso, data_matricula)
	-- values(11232, 1, '2022-01-01');

DELIMITER  $$

CREATE TRIGGER aluno_curso_bi BEFORE INSERT
ON aluno_curso
FOR EACH ROW
BEGIN
	IF NEW.ra_aluno > 0 THEN
		SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Novas matrículas estão bloqueadas';
    END IF;
END$$

DELIMITER ;


-- DROP TRIGGER aluno_curso_bi;