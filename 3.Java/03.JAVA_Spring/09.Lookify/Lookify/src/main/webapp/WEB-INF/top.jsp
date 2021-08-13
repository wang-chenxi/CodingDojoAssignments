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
		<a href="/dashboard" class="btn btn-success">Dashboard</a>
		</nav>
		<main class="bg-primary d-flex flex-column align-items-center" style="height:90vh; padding:5vh">
		<h1 class="text-light">Top Ten Songs</h1>
		<table class="table table-dark text-success">
		<thead>
		<th>Rating</th>
		<th>Title</th>
		<th>Artist</th>
		</thead>
		<tbody>
		<c:forEach var="song" items="${songs}">
		<tr>
		<td>
		${song.rating}
		</td>
		<td>
		<a href="/songs/${song.id}" class="text-success fw-bold">${song.title}</a>
		</td>
		<td>
		${song.artist}
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