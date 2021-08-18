package com.chenxi.productsandcategories.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.chenxi.productsandcategories.models.Category;
import com.chenxi.productsandcategories.models.Product;
import com.chenxi.productsandcategories.services.MainService;



@Controller
public class MainController {
	
	@Autowired
	private MainService service;

	@GetMapping("/products/new")
	public String newProduct(@ModelAttribute("newProduct")Product emptyProduct) {
		return "newProduct.jsp";
	}
	
	@PostMapping("/products/new")
	public String submitProduct(@ModelAttribute("newProduct")Product filledProduct) {
		this.service.saveProduct(filledProduct);
		return "redirect:/products/new";
	}
	
	@GetMapping("categories/new")
	public String newCategory(@ModelAttribute("newCategory")Category emptyCategory) {
		return "newCategory.jsp";
	}
	
	@PostMapping("categories/new")
	public String submitCategory(@ModelAttribute("newCategory") Category filledCategory) {
		this.service.saveCategory(filledCategory);
		return "redirect:/categories/new";
	}
	
	@GetMapping("products/{id}")
	public String product(@PathVariable("id")long id, Model model) {
		model.addAttribute("product", this.service.findByProductId(id));
		//prevent adding duplicated categories
		model.addAttribute("categories", this.service.findByProductsNotContains(this.service.findByProductId(id)));
		return "productShow.jsp";
	}
	
	@PostMapping("products/{id}")
	public String productAddCat(@PathVariable("id")long id, @RequestParam("category_id")long cat_id) {
		this.service.addCategory(id, cat_id);
		return "redirect:/products/" +id;
	}
	
	@GetMapping("products/{id}/delete/{cat_id}")
	public String produceDeleteCat(@PathVariable("cat_id") long cat_id, @PathVariable("id")long id) {
		this.service.deleteCategory(id, cat_id);
		return "redirect:/products/" +id;
	}
	
	
	@GetMapping("categories/{id}")
	public String category(@PathVariable("id")long id, Model model) {
		model.addAttribute("category", this.service.findByCategoryId(id));
		//prevent adding duplicated products
		model.addAttribute("products",this.service.findByCategoriesNotContains(this.service.findByCategoryId(id)));
		return "categoryShow.jsp";
	}
	
	@PostMapping("categories/{id}")
	public String categoryAddProduct(@PathVariable("id")long id,@RequestParam("product_id")Long pro_id) {
		this.service.addProduct(pro_id, id);
		return "redirect:/categories/" +id;
	}
	
	@GetMapping("categories/{id}/delete/{pro_id}")
	public String categoryDeletePro(@PathVariable("pro_id") long pro_id, @PathVariable("id")long id) {
		this.service.deleteProduct(pro_id, id);
		return "redirect:/categories/" +id;
	}
	
	
	
}
