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
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">

</head>
<body>
	<div class="container">
		<nav></nav>
		<main>
	<form:form action="/languages/edit/${language.id}" method="post" modelAttribute="language" class="form d-flex flex-column gap-2 p-5" style="background:lightblue">
    <input type="hidden" name="_method" value="put">
    <h1 class="row">Edit Your Language</h1>
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
<a href="/languages/${language.id}" class="btn btn-warning m-5 w-25">Cancel</a>
		</main>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>