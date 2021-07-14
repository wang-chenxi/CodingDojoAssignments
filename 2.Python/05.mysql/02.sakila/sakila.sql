SELECT first_name, last_name, email, address
from customer 
join address on address.address_id = customer.address_id
join city on city.city_id = address.city_id
where city.city_id = 312;

select title, description, release_year, rating, special_features, category.name
from film
join film_category on film.film_id = film_category.film_id
join category on category.category_id = film_category.category_id
where category.name = "Comedy";

select actor.actor_id, actor.first_name, actor.last_update, film.title, film.description, film.release_year 
from film 
join film_actor on film_actor.film_id = film.film_id
join actor on film_actor.actor_id = actor.actor_id
where actor.actor_id = 5;

select first_name, last_name, email, address.address 
from customer
join address on address.address_id = customer.address_id
join city on address.city_id = city.city_id
where store_id =1 and city.city_id in (1,42,312,459);

select title, description, release_year,rating, special_features
from film
join film_actor on film.film_id = film_actor.film_id
join actor on actor.actor_id = film_actor.actor_id
where actor.actor_id = 15 and film.rating ="G" and film.special_features like"%Behind the scenes%";

select film.film_id, film.title, actor.actor_id, actor.first_name
from actor
join film_actor on film_actor.actor_id = actor.actor_id
join film on film.film_id = film_actor.film_id
where film.film_id = 1;

select title, description, release_year, special_features, category.name
from film
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
where rental_rate = 2.99 and category.name ="Drama";

select title, description, release_year, special_features, category.name, actor.first_name, actor.last_name
from film
join film_category on film.film_id = film_category.film_id
join category on film_category.category_id = category.category_id
join film_actor on film_actor.film_id = film.film_id
join actor on film_actor.actor_id = actor.actor_id
where category.name ="Action" and actor.first_name ="SANDRA" and actor.last_name="KILMER";