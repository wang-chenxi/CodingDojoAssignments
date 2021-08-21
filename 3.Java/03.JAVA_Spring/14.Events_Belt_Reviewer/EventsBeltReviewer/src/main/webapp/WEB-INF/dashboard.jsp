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
    <title>Event Belt</title>
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
        <h1 class="text-light">Welcome, ${user.firstName}</h1>
        <a href="/logout" class="btn btn-warning" style="height: fit-content"
          >Log Out</a
        >
      </nav>
      <main
        class="bg-light d-flex flex-column align-items-start"
        style="min-height: 90vh; padding: 5vh"
      >
        <h3>Here are some of the events in your state:</h3>

        <table class="table table-light text-success">
          <thead>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>Host</th>
            <th>Actions / Status</th>
          </thead>
          <tbody>
            <c:forEach var="event" items="${events}">
              <c:if test="${user.state.id == event.state.id}">
                <tr>
                  <td>
                    <a href="/events/${event.id}" class="text-success fw-bold"
                      >${event.name}</a
                    >
                  </td>
                  <td><fmt:formatDate type="date" value="${event.date}" /></td>
                  <td>${event.location}</td>
                  <td>${event.host.firstName}</td>
                  <td>
                    <c:if test="${user.id == event.host.id}">
                      <a href="/events/${event.id}/edit" class="btn btn-warning"
                        >Edit</a
                      >
                      <a
                        href="/events/${event.id}/delete"
                        class="btn btn-warning"
                        onclick="return confirm('Are you sure you want to delete this item?');"
                        >Delete</a
                      >
                    </c:if>
                    <c:if test="${user.id != event.host.id}">
                      <c:set var="contains" value="false" />
                      <c:forEach var="attendee" items="${event.attendees}">
                        <c:if test="${user.id == attendee.id}">
                          <c:set var="contains" value="true" />
                        </c:if>
                      </c:forEach>
                      <c:if test="${contains == true}">
                        Joining
                        <a
                          href="/events/cancel/${event.id}/${user.id}"
                          class="btn btn-warning"
                          onclick="return confirm('Are you sure you want to delete this item?');"
                          >Cancel</a
                        ></c:if
                      >
                      <c:if test="${contains == false}"
                        ><a
                          href="/events/${event.id}/${user.id}"
                          class="btn btn-warning"
                          >Join</a
                        ></c:if
                      >
                    </c:if>
                  </td>
                </tr>
              </c:if>
            </c:forEach>
          </tbody>
        </table>

        <h3>Here are some of the events in other states:</h3>
        <table class="table table-light text-success">
          <thead>
            <th>Name</th>
            <th>Date</th>
            <th>Location</th>
            <th>State</th>
            <th>Host</th>
            <th>Actions</th>
          </thead>
          <tbody>
            <c:forEach var="event" items="${events}">
              <c:if test="${user.state.id != event.state.id}">
                <tr>
                  <td>
                    <a href="/events/${event.id}" class="text-success fw-bold"
                      >${event.name}</a
                    >
                  </td>
                  <td><fmt:formatDate type="date" value="${event.date}" /></td>
                  <td>${event.location}</td>
                  <td>${event.state.state}</td>
                  <td>${event.host.firstName}</td>
                  <td>
                    <c:if test="${user.id == event.host.id}">
                      <a href="/events/${event.id}/edit" class="btn btn-warning"
                        >Edit</a
                      >
                      <a
                        href="/events/${event.id}/delete"
                        class="btn btn-warning"
                        onclick="return confirm('Are you sure you want to delete this item?');"
                        >Delete</a
                      >
                    </c:if>
                    <c:if test="${user.id != event.host.id}">
                      <c:set var="contains" value="false" />
                      <c:forEach var="attendee" items="${event.attendees}">
                        <c:if test="${user.id == attendee.id}">
                          <c:set var="contains" value="true" />
                        </c:if>
                      </c:forEach>
                      <c:if test="${contains == true}">
                        Joining
                        <a
                          href="/events/cancel/${event.id}/${user.id}"
                          class="btn btn-warning"
                          onclick="return confirm('Are you sure you want to delete this item?');"
                          >Cancel</a
                        ></c:if
                      >
                      <c:if test="${contains == false}"
                        ><a
                          href="/events/${event.id}/${user.id}"
                          class="btn btn-warning"
                          >Join</a
                        ></c:if
                      >
                    </c:if>
                  </td>
                </tr>
              </c:if>
            </c:forEach>
          </tbody>
        </table>
        <h3>Create an Event</h3>
        <form:form
          action="/events"
          method="POST"
          modelAttribute="event"
          class="form d-flex flex-column gap-2 p-3 bg-light"
        >
          <div class="row form-control bg-success">
            <form:label path="name" class="col-sm-5 bg-success text-light"
              >Name:</form:label
            >
            <form:input path="name" class="col-sm-6 text-success" />
            <br />
            <form:errors path="name" class="text-warning" />
          </div>

          <div class="row form-control bg-success">
            <form:label path="date" class="col-sm-5 bg-success text-light"
              >Date:</form:label
            >
            <form:input type="date" path="date" class="col-sm-6 text-success" />
            <br />
            <form:errors path="date" class="text-warning" />
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
              value="${user.id}"
            ></form:input>
            <form:errors path="location" class="text-warning" />
          </div>

          <input
            type="submit"
            value="Submit"
            class="row btn btn-warning w-25"
          />
        </form:form>
      </main>
    </div>
    <script src="/webjars/jquery/jquery.min.js"></script>
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
  </body>
</html>
