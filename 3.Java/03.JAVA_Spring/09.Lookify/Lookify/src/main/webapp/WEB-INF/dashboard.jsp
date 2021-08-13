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
		<nav class="bg-dark text-light p-3 d-flex gap-5">
		<a class="btn btn-success" href="/songs/new">Add New</a>
		<a class="btn btn-success" href="/search/topTen">Top Songs</a>
		<form action="/dashboard/search" method=POST>
		<c:choose>
		<c:when test="${not empty keyword}">
		<input type="text" name="artist" value="${keyword}"/>
		<input type="submit" value="New Search" class="btn btn-success"/>
		<a href="/dashboard" class="btn btn-success">Dashboard</a>
		</c:when>
		<c:otherwise>
		<input type="text" name="artist"/>
		<input type="submit" value="Search Artist" class="btn btn-success"/>
		</c:otherwise>
		</c:choose>
		</form>
		</nav>
		<main class="bg-primary d-flex flex-column align-items-center" style="height:90vh; padding:5vh">
		<table class="table table-dark text-success">
		<thead>
		<th>Name</th>
		<th>Rating</th>
		<th>Actions</th>
		</thead>
		<tbody>
		<c:forEach var="song" items="${songs}">
		<tr>
		<td>
		<a href="/songs/${song.id}" class="text-success fw-bold">${song.title}</a>
		</td>
		<td>${song.rating}</td>
		<td>
		<a href="/songs/delete/${song.id}" class="btn btn-warning" onclick="return confirm('Are you sure you want to delete this item?');">
		Delete
		</a>
		</td>
		</tr>
		</c:forEach>
		</tbody>
		</table>
		</main>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>