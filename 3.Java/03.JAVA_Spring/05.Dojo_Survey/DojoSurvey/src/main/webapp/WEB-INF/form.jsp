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
		<main>
		<form class="p-5 m-5 border border-warning bg-warning border-3" action="/process" method="POST">
		<div class="row mb-3">
		<label for="name" class="col-sm-5 col-form-label">Your Name:</label>
		<input type = "text" name ="name" class="col-sm-6" required/>
		</div>
		<div class="row mb-3">
		<label for="location" class="col-sm-5 col-form-label">Dojo Location:</label>
		  <select id="location" name="location" class="col-sm-6" required>
		    <option value="San Jose">San Jose</option>
		    <option value="Seattle">Seattle</option>
		    <option value="Beijing">Beijing</option>
		    <option value="Tokyo">Tokyo</option>
		  </select>
		</div>
		<div class="row mb-3">
		<label for="language" class="col-form-label col-sm-5">Favorite Language:</label>
		  <select id="language" name="language" class="col-sm-6" required>
		    <option value="Python">Python</option>
		    <option value="Java">Java</option>
		    <option value="C#">C#</option>
		    <option value="I like nothing!">I like nothing!</option>
		  </select>
		</div>
		  <label for="comment" class="form-label">Comment(optional):</label>
		  <div class="row mb-3">
		  		  <input type="textarea" name="comment" id="comment" class="col-sm-11" style="height:15vh"/>
		  </div>
		  <input type="submit" value="submit" class="btn btn-primary"/>
		</form>
		</main>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>