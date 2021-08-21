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
		<h1>Event Belt</h1></main>
		<div class="d-flex justify-content-between flex-wrap">
		<div class="flex-1 col-sm-5">
		<h1>New User</h1>
			<form:form action="/registration" method="POST" modelAttribute="user" class="form d-flex flex-column gap-2 p-5 bg-success">
			<div class="row form-control bg-success">
			<form:label path="firstName" class="col-sm-5 bg-success text-light">First Name:</form:label>
	        <form:input path="firstName" class="col-sm-6 text-success"/>
	        <br/>
	        <form:errors path="firstName" class="text-warning"/>
	        </div>

			<div class="row form-control bg-success">
	        <form:label path="lastName" class="col-sm-5 bg-success text-light">Last Name:</form:label>
	        <form:input path="lastName" class="col-sm-6 text-success"/>
	        <br/>
	        <form:errors path="lastName" class="text-warning"/>
	        </div>

			<div class="row form-control bg-success">
	        <form:label path="email" class="col-sm-5 bg-success text-light">Email:</form:label>
	        <form:input path="email" class="col-sm-6 text-success"/>
	        <br/>
	        <form:errors path="email" class="text-warning"/>
	        </div>

			<div class="row form-control bg-success">
	        <form:label path="location" class="col-sm-5 bg-success text-light">Location:</form:label>
	        <form:input path="location" class="col-sm-2 text-success"/>
			<form:label path="state" class="col-sm-2 bg-success text-light">State: </form:label>
	        <form:select path="state" class="col-sm-2 text-success">
	        <c:forEach var="state" items="${states}">
	        <form:option value="${state.id}"> ${state.state}</form:option>
	        </c:forEach>
	        </form:select>
	        <br/>
	        <form:errors path="location" class="text-warning"/>
	        </div>

	        <div class="row form-control bg-success">
	        <form:label path="password" class="col-sm-5 bg-success text-light">Password:</form:label>
	        <form:input type = "password" path="password" class="col-sm-6 text-success"/>
	        <br/>
	        <form:errors path="password" class="text-warning"/>
	        </div>
	        <div class="row form-control bg-success">
	        <form:label path="passwordConfirmation" class="col-sm-5 bg-success text-light">Confirm password:</form:label>
	        <form:input type="password" path="passwordConfirmation" class="col-sm-6 text-success"/>
	        <br/>
	        <form:errors path="passwordConfirmation" class="text-warning"/>
	        </div>
	        <br/>
	    	<input type="submit" value="Submit" class="row btn btn-warning w-25"/>
			</form:form>
			</div>
		<div class="flex-1 col-sm-5">
		<h1>Login</h1>
			<form action="/login" method="POST" class="form d-flex flex-column gap-2 p-5 bg-success">
			<div class="row form-control bg-success">
	        <label class="col-sm-5 bg-success text-light" for="email">Email:</label>
	        <input name="email" class="col-sm-6 text-success"/>
	        <br/>
	        </div>
	        <div class="row form-control bg-success">
	        <label class="col-sm-5 bg-success text-light" for="password">Password:</label>
	        <input type="password" name="password" class="col-sm-6 text-success"/>
	        <br/>
	        </div>
	        <p class="text-warning">${error}</p>
	    	<input type="submit" value="Login" class="row btn btn-warning w-25"/>
			</form>
		</div>
		</div>
		</main>
	</div>
	<script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>