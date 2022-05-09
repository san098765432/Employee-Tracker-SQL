INSERT INTO department (id, name)
VALUES (001, "Engineering", ),
       (002, "Finance", ),
       (003, "Legal", ),
       (004, "Sales", );
       
INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Software Engineer", "30,000","1",  ),
       (002, "Accountant","35,000", "2", ),
       (003, "Solicitor","40,000", "3", ),
       (004, "Kokib", "60,000", "4", );
       

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Sanyiah", "Zulfiqar", "2", "30,000", "9", ),
       (002, "Sam", "Zulfiqar","4", "35,000", "2",),
       (003, "Miski" "Jasmine", "5", "40,000", "1",),
       (004, "Yasmina", "Hussain","9", "60,000", "4", );
       
