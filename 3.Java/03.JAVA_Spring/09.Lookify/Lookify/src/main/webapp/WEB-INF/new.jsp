<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
		<nav class="bg-dark text-light p-3 d-flex gap-5">
		<a href="/dashboard" class="btn btn-success">Dashboard</a>
		</nav>
		<main class="bg-primary d-flex flex-column align-items-center" style="height:90vh; padding:5vh">
		<form:form action="/songs/new" method="post" modelAttribute="newSong" class="form d-flex flex-column gap-2 p-5 w-100 bg-dark">
    <h1 class="row fw-bold text-success">Add A New Song</h1>
    <div class="row form-control bg-success">
        <form:label path="title" class="col-sm-5 bg-success text-light">Title</form:label>
        <form:input path="title" class="col-sm-6 text-success"/>
        <br/>
        <form:errors path="title" class="text-warning"/>
    </div>
    <div class="row form-control bg-success">
        <form:label path="artist" class="col-sm-5 bg-success text-light">Artist</form:label>
        <form:input path="artist" class="col-sm-6 text-success"/>
        <br/>
        <form:errors path="artist" class="text-warning"/>
    </div>
    <div class="row form-control bg-success">
        <form:label path="rating" class="col-sm-5 bg-success text-light">Rating</form:label>
        <form:input path="rating" class="col-sm-6 text-success" />
        <br/>
        <form:errors path="rating" class="text-warning"/>
    </div>
    <input type="submit" value="Submit" class="row btn btn-success w-25"/>
</form:form>
		</main>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>