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
<style type="text/css">
*{
    margin:0;
    padding:0;
    font-family: cursive;
}

.container{
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

h1{
    text-align: center;
    font-size: 50px;
    color: rgb(218, 138, 34);
}

.cards{
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    justify-content: space-between;
}

.card{
    width: 250px;
    height: 250px;
    background: lightblue;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

button{
    width: fit-content;
}

.board{
    height: 250px;
    overflow: scroll;
    overflow-x: hidden;
    border: solid 3px lightseagreen;
    padding: 20px;
    background: navajowhite;
}
</style>
</head>
<body>
	<div class="container">
        <h1>Welcome to the Ninja Money!</h1>
        <div>Your Gold: {{session["gold"]}}</div>
        <div class="cards">
            <form action="/process_money" method="post" class="card">
                <div>
                    <h1>Farm</h1>
                    <span>(earns 10-20 golds)</span>
                </div>
                <input type="hidden" name="building" value="farm" />
                <input type="submit" value="Find Gold!" />
            </form>

            <form action="/process_money" method="post" class="card">
                <div>
                    <h1>Cave</h1>
                    <span>(earns 5-10 golds)</span>
                </div>
                <input type="hidden" name="building" value="cave" />
                <input type="submit" value="Find Gold!" />
            </form>


            <form action="/process_money" method="post" class="card">
                <div>
                    <h1>House</h1>
                    <span>(earns 2-5 golds)</span>
                </div>
                <input type="hidden" name="building" value="house" />
                <input type="submit" value="Find Gold!" />
            </form>


            <form action="/process_money" method="post" class="card">
                <div>
                    <h1>Casino</h1>
                    <span>(earns/takes 0-50 golds)</span>
                </div>
                <input type="hidden" name="building" value="casino" />
                <input type="submit" value="Find Gold!" />
            </form>
        </div>
             <h2>
            You win!
            </h2>
            <div>
                <form action="/reset" method="post">
                    <input type="submit" value="Reset" />
                </form>
            </div>

            <h2>
                You lost!
            </h2>
            <div>
                <form action="/reset" method="post">
                    <input type="submit" value="Reset" />
                </form>
            </div>

            <div class="activities">
                <h2>Activities:</h2>
                <div class="board">
                    <ul>

                    </ul>
                </div>
            </div>
    </div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
</body>
</html>