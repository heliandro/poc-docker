package main

import (
	"database/sql"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

type people struct {
	ID   int    `json:"id"`
	Name string `json:"name"`
}

func main() {
	println("Hello, World!")

	router := gin.Default()
	router.POST("/people", setPeople)
	router.Run(":8080")
}

func setPeople(c *gin.Context) {
	var newPeople people

	if err := c.BindJSON(&newPeople); err != nil {
		return
	}

	println(newPeople.ID)
	println(newPeople.Name)

	db, err := sql.Open("mysql", "test:test@tcp(mysql-db:3306)/nodedb")

	if err != nil {
		panic(err.Error())
	}

	// defer the close till after this function has finished
	// executing
	defer db.Close()

	insert, err := db.Query(
		"INSERT INTO people (name) VALUES (?)",
		newPeople.Name)

	// if there is an error inserting, handle it
	if err != nil {
		panic(err.Error())
	}

	defer insert.Close()

	c.JSON(http.StatusOK, gin.H{"status": http.StatusOK, "data": newPeople})
}
