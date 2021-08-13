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
		<h1>New Dojo</h1>
		<form:form action="/dojos/new" method="POST" modelAttribute="newDojo" class="form d-flex flex-column gap-2 p-5 w-100 bg-dark">
		<div class="row form-control bg-success">
        <form:label path="name" class="col-sm-5 bg-success text-light">Name:</form:label>
        <form:input path="name" class="col-sm-6 text-success"/>
        <br/>
        <form:errors path="name" class="text-warning"/>
    </div>
    <input type="submit" value="Submit" class="row btn btn-success w-25"/>
		</form:form>
		<img src= "https://terrieschauer.com/wp-content/uploads/2018/05/dojo-1210x423.jpg" style="width:100%"></img>
		</main>
	</div>
	<script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>