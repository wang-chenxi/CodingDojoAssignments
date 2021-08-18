package com.chenxi.productsandcategories.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.chenxi.productsandcategories.models.Category;
import com.chenxi.productsandcategories.models.Product;

@Repository
public interface CategoryRepository extends CrudRepository<Category, Long>{

	public List<Category> findAll();

    // Retrieves a list of any categories a particular product
    // does not belong to.
    List<Category> findByProductsNotContains(Product product);
    //products keyword is from the model's member variable

	
}
