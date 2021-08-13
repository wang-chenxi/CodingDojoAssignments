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
		<h1>${dojo.name} Location Ninjas</h1>
		<table class="table table-dark text-success">
		<thead>
		<th>First Name</th>
		<th>Last Name</th>
		<th>Age</th>
		</thead>
		<tbody>
		<c:forEach var="ninja" items="${dojo.ninjas}">
		<tr>
		<td>${ninja.firstName}</td>
		<td>${ninja.lastName}</td>
		<td>${ninja.age}</td>
		</tr>
		</c:forEach>
		</tbody>
		</table>
		<img src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2021/03/Every-Ninja-Theory-Game-Ranked-According-To-Metacritic.jpg" style="width:100%"/>
		</main>
	</div>
	<script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>