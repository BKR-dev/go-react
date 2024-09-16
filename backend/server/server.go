package server

import (
    "net/http"
    "github.com/gin-gonic/gin"
)

func NewServer() {
	// ...	// Create a new Gin router
	router := gin.Default()

	// Define routes
	router.GET("/api/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello, World!",
		})
	})

	router.GET("/api/greet/:name", func(c *gin.Context) {
		name := c.Param("name")
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello, " + name,
		})
	})

	router.GET("/api/data", func(c *gin.Context) {
		data := map[string]interface{}{
			"items": []string{"apple", "banana", "cherry"},
			"count": 3,
		}
		c.JSON(http.StatusOK, data)
	})

	// Start the server
	router.Run(":3001") // Default listens on port 3001 
}
