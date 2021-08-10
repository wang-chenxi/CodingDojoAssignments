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
		<main class="d-flex align-items-center justify-content-center">
		<div class="p-5 m-5 border border-warning bg-warning border-3">
		<h2>Submitted Info</h2>
		<table class="table">
  <tbody>
    <tr>
      <th scope="row">Name: </th>
      <td><c:out value="${name}"/></td>
    </tr>
    <tr>
      <th scope="row">Dojo Location: </th>
      <td><c:out value="${location}"/></td>
    </tr>
    <tr>
      <th scope="row">Favorite Language: </th>
      <td><c:out value="${language}"/></td>
    </tr>
    <tr>
      <th scope="row">Comment: </th>
      <td><c:out value="${comment}"/></td>
    </tr>
  </tbody>
</table>
<a href="/" class="btn btn-primary">Go Back</a>
		</div>
		</main>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>