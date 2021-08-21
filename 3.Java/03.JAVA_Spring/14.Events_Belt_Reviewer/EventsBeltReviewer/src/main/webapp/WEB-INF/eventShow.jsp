<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
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
    <meta charset="ISO-8859-1" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1"
    />
    <title>Insert title here</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="/css/main.css" />
	<style>
		.board{
    height: 250px;
    overflow: scroll;
    overflow-x: hidden;
    border: solid 3px lightseagreen;
    padding: 20px;
    background: navajowhite;}
	.message{
    height: 100px;
    border: solid 3px lightseagreen;
    padding: 20px;
    background: navajowhite;}
	</style>
    <!-- change to match your file/naming structure -->
  </head>
  <body>
    <div class="container">
      <nav
        class="d-flex justify-content-between align-items-center bg-primary p-3"
      >
		<a href="/events" class="btn btn-warning" style="height: fit-content"
          >Back to Dashboard</a
        >
		<a href="/logout" class="btn btn-warning" style="height: fit-content"
          >Log Out</a
        >
      </nav>
      <main>
        <h1 class="mt-5 mb-5">${event.name}</h1>
        <div class="d-flex justify-content-between">
          <div class="col-sm-4 ">
            <h5>Host: ${event.host.firstName} ${event.host.lastName}</h5>
            <h5>Date: ${event.date}</h5>
            <h5>Location: ${event.location}, ${event.state.state}</h5>
            <h5>People who are attending this event: ${counts}</h5>
			<c:if test="${empty event.attendees}">
				<p class="text-danger">oh... there's no guest so I will not show the table</p>
			</c:if>	
			<c:if test="${not empty event.attendees}">
			<table class="table table-light text-success">
				<thead>
				  <th>Name</th>
				  <th>Location</th>
				</thead>
				<tbody>
				  <c:forEach var="attendee" items="${event.attendees}">
					  <tr>
						<td>${attendee.firstName} ${attendee.lastName}</td>
						<td>${attendee.location}</td>
				  </c:forEach>
				</tbody>
			  </table>
			</c:if>	
          </div>
          <div class="flex-1 col-sm-6 mb-3">
			<h2>Message Wall</h2>
			<div class="board">
				<ul>
				<c:forEach var="message" items="${event.messages}">
						<li>${message.author.firstName} ${message.author.lastName} : ${message.body}
							<br/>
							---------------------------
						</li>
					</c:forEach> 
				</ul>
			</div>
			<h2>Add Comment:</h2>
			<form:form action="/events/${event.id}/addMessage" method="POST" modelAttribute="message">
			<form:input value="${user_id}" path="author" type="hidden"/>
			<form:input value="${event.id}" path="event" type="hidden"/>
			<form:input path="body" class="message w-100"/>
			<input
            type="submit"
            value="Submit"
            class="btn btn-success w-25 mt-2"
          />
			</form:form>
		  </div>
        </div>
      </main>
    </div>
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>
