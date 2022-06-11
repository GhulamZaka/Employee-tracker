
INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Legal'),
  ('Finance');

INSERT INTO role (title, Salary, department_id)
VALUES
  ('Sales Lead', 10000, 1),
  ('Salesperson', 8000, 1),
  ('Software Engineer', 120000, 2),
  ('Lead Engineer', 150000, 2),
  ('Lawyer', 190000, 3),
  ('Legal Team Lead', 250000, 3),
  ('Acountant', 125000, 4),
  ('Acount Manager', 160000, 4);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('John', 'Doe', 1, null),
  ('Ghulam', 'Zaka', 2, 1),
  ('David', 'Phii', 3, 4),
  ('Hua', 'Kim', 4, null),
  ('Lisa', 'Tera', 5, null),
  ('Tom', 'Jerry', 6, 5),
  ('Henry', 'lie', 7, 8),
  ('James', 'Kol', 8, null);
 