const TeamController = require("../controllers/team.controller")


module.exports = app => {
    app.get("/api/teams/test", TeamController.test),
        app.post("/api/teams", TeamController.newTeam),
        app.get("/api/teams", TeamController.allTeams),
        app.put("/api/:id", TeamController.updateTeam),
        app.delete("/api/:id", TeamController.deleteTeam)
}