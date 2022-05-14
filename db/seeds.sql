INSERT INTO department (id, name)
VALUES (1, "Engineering" ),
       (2, "Finance" ),
       (3, "Legal" ),
       (4, "Sales" );
       
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Software Engineer", 30.000, 1  ),
       (2, "Accountant", 35.000, 2 ),
       (3, "Solicitor", 40.000, 3 ),
       (4, "Kokib", 60.000, 4);
       

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Sanyiah", "Zulfiqar", 2, 9),
       (2, "Sam", "Zulfiqar",4, 2),
       (3, "Miski", "Jasmine", 3, 3),
       (4, "Yasmina", "Hussain", 1, 4);
       
