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
		<form:form action="/events/${event.id}/edit" method="post" modelAttribute="event" class="form d-flex flex-column gap-2 p-5 bg-light">
		<input type="hidden" name="_method" value="put">
		<h1 class="row">Edit Your Event</h1>
		<div class="row form-control bg-success">
			<form:label path="name" class="col-sm-5 bg-success text-light">Name</form:label>
			<form:input path="name" class="col-sm-6 text-success"/>
			<br/>
			<form:errors path="name" class="text-warning"/>
		</div>
		<div class="row form-control bg-success">
			<form:label path="date" class="col-sm-5 bg-success text-light">Date</form:label>
			<form:input type="date" path="date" class="col-sm-6 text-success"/>
			<br/>
			<form:errors path="date" class="text-warning"/>
		</div>
	    <div class="row form-control bg-success">
            <form:label path="location" class="col-sm-5 bg-success text-light"
              >Location:</form:label
            >
            <form:input path="location" class="col-sm-2 text-success" />
            <form:label path="state" class="col-sm-2 bg-success text-light"
              >State:
            </form:label>
            <form:select path="state" class="col-sm-2 text-success">
              <c:forEach var="state" items="${states}">
                <form:option value="${state.id}"> ${state.state}</form:option>
              </c:forEach>
            </form:select>
            <br />
            <form:input
              type="hidden"
              path="host"
              value="${user_id}"
            ></form:input>
            <form:errors path="location" class="text-warning" />
          </div>
		<input type="submit" value="Submit" class="row btn btn-success w-25"/>
		<a href="/events" class="row btn btn-warning w-25">Cancel</a>
	</form:form>
	  </main>
    </div>
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>
