# 1. Update Values in Dictionaries and Lists

x = [[5, 2, 3], [10, 8, 9]]


# Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].

x[1][0] = 15
print(x)

# Change the last_name of the first student from 'Jordan' to 'Bryant'
students = [
    {'first_name':  'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
students[0]["last_name"] = "Bryant"
print(students[0])

# In the sports_directory, change 'Messi' to 'Andres'
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']}
sports_directory["soccer"][0] = "Andres"
print(sports_directory)

# Change the value 20 in z to 30

z = [{'x': 10, 'y': 20}]
for i, j in z[0].items():
    if j == 20:
        z[0][i] = 30

print(z)
