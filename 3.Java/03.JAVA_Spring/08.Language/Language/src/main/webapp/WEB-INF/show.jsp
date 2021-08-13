<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
		<main class="m-5 p-5" style="background:lightblue">
		<h1>
		<c:out value="${language.name}"/>
		</h1>
		<h2>
		Creator: <c:out value ="${language.creator}"/>
		</h2>
		<h2>
		Version: <c:out value ="${language.version}"/>
		</h2>
		<h2>
		Created At: <c:out value ="${language.createdAt}"/>
		</h2>
		<a href="/languages/edit/${language.id}" class="btn btn-warning">Edit</a>
		<a href="/languages" class="btn btn-warning">Back to index</a>
		</main>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>