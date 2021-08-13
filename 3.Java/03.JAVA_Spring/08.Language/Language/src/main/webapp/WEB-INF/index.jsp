<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page isErrorPage="true" %>    
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>     
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
<title>Language</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

</head>
<body>
	<div class="container">
		<nav></nav>
		<main class="d-flex flex-column align-items-center justify-content-center">
		<h1 class="mt-5">Languages</h1>
		<table class="table table-success m-5">
		<thead>
		<th>Name</th>
		<th>Creator</th>
		<th>Version</th>
		<th>Action</th>
		</thead>
		<tbody>
		<c:forEach var="language" items="${languages}">
		<tr>
		<td>
		<a href="/languages/${language.id}"><c:out value="${language.name}"/></a>
		</td>
		<td>
		<c:out value="${language.creator}"/>
		</td>
		<td>
		<c:out value="${language.version}"/>
		</td>
		<td>
		<a href="/languages/edit/${language.id}" class="btn btn-warning">Edit</a>
		<a href="/languages/delete/${language.id}" class="btn btn-warning">Delete</a>
		</td>
		</tr>
		</c:forEach></tbody>
		</table>
		<form:form action="/languages/process" method="post" modelAttribute="newLanguage" class="form d-flex flex-column gap-2 p-5 w-100" style="background:lightblue">
    <h1 class="row">Submit New Language</h1>
    <div class="row form-control">
        <form:label path="name" class="col-sm-5">Name</form:label>
        <form:input path="name" class="col-sm-6"/>
        <form:errors path="name" class="text-danger"/>
    </div>
    <div class="row form-control">
        <form:label path="creator" class="col-sm-5">Creator</form:label>
        <form:input path="creator" class="col-sm-6"/>
        <form:errors path="creator" class="text-danger"/>
    </div>
    <div class="row form-control">
        <form:label path="version" class="col-sm-5">Version</form:label>
        <form:input path="version" class="col-sm-6"/>
                <form:errors path="version" class="text-danger"/>
    </div>
  
    <input type="submit" value="Submit" class="btn btn-warning"/>
</form:form>
		</main>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>