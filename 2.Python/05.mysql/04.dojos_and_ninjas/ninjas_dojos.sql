insert into dojos (name, created_at, updated_at)
values('dojo1', now(),now()), ('dojo2', now(),now()), ('dojo3', now(),now());
# Query: Delete the 3 dojos you just created
delete from dojos where id = 1;
delete from dojos where id = 2;
delete from dojos where id = 3;
# Query: Create 3 more dojos
insert into dojos (name, created_at, updated_at)
values('dojo1', now(),now()), ('dojo2', now(),now()), ('dojo3', now(),now());
# Query: Create 3 ninjas that belong to the first dojo
insert into ninjas(first_name, last_name,age, created_at, updated_at,dojos_id)
values
('Chenxi','Wang',30,now(),now(),1),
('Richard','Liu',30,now(),now(),1),
('Tom','Wang',30,now(),now(),1);
# Query: Create 3 ninjas that belong to the second dojo
insert into ninjas(first_name, last_name,age, created_at, updated_at,dojos_id)
values
('Chenxi','Wang',30,now(),now(),2),
('Richard','Liu',30,now(),now(),2),
('Tom','Wang',30,now(),now(),2);
# Query: Create 3 ninjas that belong to the third dojo
insert into ninjas(first_name, last_name,age, created_at, updated_at,dojos_id)
values
('Chenxi','Wang',30,now(),now(),3),
('Richard','Liu',30,now(),now(),3),
('Tom','Wang',30,now(),now(),3);
# Query: Retrieve all the ninjas from the first dojo
select * from ninjas where dojos_id =1;
# Query: Retrieve all the ninjas from the last dojo
select * from ninjas where dojos_id =3;
# Query: Retrieve the last ninja's dojo
select * from dojos join ninjas on ninjas.dojos_id = dojos.id where ninjas.id =3;