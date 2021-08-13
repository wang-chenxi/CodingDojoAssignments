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
		<h1>New Ninja</h1>
		<form:form action="/ninjas/new" method="post" modelAttribute="newNinja" class="form d-flex flex-column gap-2 p-5 w-100 bg-dark">
    <div class="row form-control bg-success">
        <form:label path="dojo" class="col-sm-5 bg-success text-light">Dojo: </form:label>
        <form:select path="dojo" class="col-sm-6 text-success">
        <c:forEach var="dojo" items="${dojos}">
        <form:option value="${dojo.id}"> ${dojo.name}</form:option>
        </c:forEach>
        </form:select>
        <br/>
        <form:errors path="dojo" class="text-warning"/>
    </div>
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
        <form:label path="age" class="col-sm-5 bg-success text-light">Age</form:label>
        <form:input path="age" class="col-sm-6 text-success" />
        <br/>
        <form:errors path="age" class="text-warning"/>
    </div>
    <input type="submit" value="Create" class="row btn btn-success w-25"/>
</form:form>
<img src="https://media-exp1.licdn.com/dms/image/C561BAQFegvHvzTJ8Pg/company-background_10000/0/1562853449773?e=2159024400&v=beta&t=3YDOP3cBo3wpGBRIjO-Xc7xQs6lGpmorc_HCah48v3w" style="width:100%"/>
		</main>
	</div>
	<script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>