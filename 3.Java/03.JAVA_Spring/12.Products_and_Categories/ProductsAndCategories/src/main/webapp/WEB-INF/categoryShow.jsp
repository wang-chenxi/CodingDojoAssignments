<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!-- Formatting (dates) --> 
<%@taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
<link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
</head>
<body>
	<div class="container">
		<nav></nav>
		<main>
		<h1>${category.name}</h1>
		<div class="d-flex">
			<div class="col-sm-6">
				<h2>Products:</h2>
				<ul>
				<c:forEach var="product" items="${category.products}">
				<li class="m-2">${product.name} <a href="/categories/${category.id}/delete/${product.id}" class="btn btn-warning">Delete</a></li>
				</c:forEach>
				</ul>
			</div>
		<form action="/categories/${category.id}" method="post" class="form d-flex flex-column gap-2 p-5 bg-dark col-sm-6">
    <div class="row form-control bg-success">
        <label class="col-sm-2 bg-success text-light">Add Product: </label>
        <select name="product_id" class="col-sm-3 text-success">
        <c:forEach var="product" items="${products}">
        <option value="${product.id}"> ${product.name}</option>
        </c:forEach>
        </select>
        <br/>
        <form:errors path="dojo" class="text-warning"/>
    </div>
    
    <input type="submit" value="Add" class="row btn btn-success w-25"/>
</form>
		</div>
		</main>
	</div>
	<script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>