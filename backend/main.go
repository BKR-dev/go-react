package main

import (
	"fmt"
	"local/server"
)

func main() {
	fmt.Println("Starting server")
	// start the gin router
	server.NewServer()
}
