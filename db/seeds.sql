
INSERT INTO department (name)
VALUES
  ('Sales'),
  ('Engineering'),
  ('Legal'),
  ('Finance');

INSERT INTO role (title, department_id, Salary)
VALUES
  ('Sales Lead', 1, 10000),
  ('Salesperson', 1, 8000),
  ('Software Engineer', 2, 120000),
  ('Lead Engineer', 2, 150000),
  ('Lawyer', 3, 190000),
  ('Legal Team Lead', 3, 250000),
  ('Acountant', 4, 125000),
  ('Account Manager', 4, 160000);



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
 