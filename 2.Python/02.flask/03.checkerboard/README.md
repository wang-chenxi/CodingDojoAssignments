## Your program should have the following output

1. http://localhost:5000 - should display 8 by 8 checkerboard
2. http://localhost:5000/4 - should display 8 by 4 checkerboard
3. http://localhost:5000/(x)/(y) - should display x by y checkerboard.  For example, http:// localhost:5000/10/10 should display 10 by 10 checkerboard.  Before you pass x or y to Jinja, please remember to convert it to integer first (so that you can use x or y in a for loop)
4. SENSEI BONUS: Have another route accept 4 parameters (i.e. "/<x>/<y>/<color1>/<color2>") and render a checkerboard with x rows and y columns, with alternating colors, color1 and color2