package com.chenxi.productsandcategories.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chenxi.productsandcategories.models.Category;
import com.chenxi.productsandcategories.models.Product;
import com.chenxi.productsandcategories.repositories.CategoryRepository;
import com.chenxi.productsandcategories.repositories.ProductRepository;

@Service
public class MainService {
	
	@Autowired 
	private CategoryRepository categoryRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	//PRODUCT CRUD
	
	public List<Product> findAllProduct() {
		return this.productRepository.findAll();
	}
	
	public List<Product> findByCategoriesNotContains(Category category){
		return this.productRepository.findByCategoriesNotContains(category);
	}
	
	public Product saveProduct(Product product) {
		return this.productRepository.save(product);
	}
	
	public Product findByProductId(Long id) {
		return this.productRepository.findById(id).orElse(null);
	}
	
	public Product addCategory(long productId, long categoryId) {
		Product product = this.findByProductId(productId);
		Category category= this.findByCategoryId(categoryId);
		List<Category> product_Categories = product.getCategories();
		product_Categories.add(category);
		product.setCatogories(product_Categories);
		return this.saveProduct(product);
	}
	
	public Product deleteCategory(long productId, long categoryId) {
		Product product = this.findByProductId(productId);
		Category category= this.findByCategoryId(categoryId);
		List<Category> product_Categories = product.getCategories();
		product_Categories.remove(category);
		product.setCatogories(product_Categories);
		return this.saveProduct(product);
	}
	
	
	//CAT CRUD
	
	public List<Category> findAllCategories(){
		return this.categoryRepository.findAll();
	}
	
	public List<Category> findByProductsNotContains(Product product){
		return this.categoryRepository.findByProductsNotContains(product);
	}
	
	public Category saveCategory(Category category) {
		return this.categoryRepository.save(category);
	}
	
	public Category findByCategoryId(Long id) {
		return this.categoryRepository.findById(id).orElse(null);
	}
	
	public Category addProduct(long productId, long categoryId) {
		Product product = this.findByProductId(productId);
		Category category= this.findByCategoryId(categoryId);
		List<Product> cat_products = category.getProducts();
		cat_products.add(product);
		category.setProducts(cat_products);
		return this.saveCategory(category);
	}
	
	public Category deleteProduct(long productId, long categoryId) {
		Product product = this.findByProductId(productId);
		Category category= this.findByCategoryId(categoryId);
		List<Product> cat_products = category.getProducts();
		cat_products.remove(product);
		category.setProducts(cat_products);
		return this.saveCategory(category);
	}
	
	

}
